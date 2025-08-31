"use client";

import React, { useRef, useEffect, useState } from 'react';

const FluidCursorEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number | null>(null);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    const canvas = canvasRef.current;
    if (!canvas) return;

    let gl: WebGLRenderingContext | WebGL2RenderingContext | null = null;
    try {
        const params = {
            alpha: true,
            depth: false,
            stencil: false,
            antialias: false,
            preserveDrawingBuffer: false
        };
        gl = canvas.getContext("webgl2", params) || canvas.getContext("webgl", params);
    } catch (e) {
        console.error("WebGL is not supported.", e);
        return;
    }

    if (!gl) {
        console.error("Failed to get WebGL context.");
        return;
    }
    
    let pointers = [{
        id: -1,
        texcoordX: 0, texcoordY: 0,
        prevTexcoordX: 0, prevTexcoordY: 0,
        deltaX: 0, deltaY: 0,
        down: false, moved: false,
        color: { r: 0, g: 0, b: 0 }
    }];

    let lastUpdateTime = Date.now();
    let colorUpdateTimer = 0.0;

    let dye: any, velocity: any, divergence: any, curlFBO: any, pressureFBO: any;
    let copyProgram: Program, clearProgram: Program, splatProgram: Program, advectionProgram: Program;
    let divergenceProgram: Program, curlProgram: Program, vorticityProgram: Program, pressureProgram: Program;
    let gradienSubtractProgram: Program;
    let displayMaterial: Material;
    
    let ext: any;

    const config = {
      SIM_RESOLUTION: 128,
      DYE_RESOLUTION: 1024,
      CAPTURE_RESOLUTION: 512,
      DENSITY_DISSIPATION: 1,
      VELOCITY_DISSIPATION: 0.2,
      PRESSURE: 0.8,
      PRESSURE_ITERATIONS: 20,
      CURL: 30,
      SPLAT_RADIUS: 0.25,
      SPLAT_FORCE: 6000,
      SHADING: true,
      COLORFUL: true,
      COLOR_UPDATE_SPEED: 10,
      PAUSED: false,
      BACK_COLOR: { r: 0, g: 0, b: 0 },
      TRANSPARENT: false
    };

    function getSupportedFormat (gl: WebGLRenderingContext | WebGL2RenderingContext, internalFormat: number, format: number, type: number) {
        if (!supportRenderTextureFormat(gl, internalFormat, format, type))
        {
            if (gl instanceof WebGL2RenderingContext) {
                switch (internalFormat)
                {
                    case gl.R16F:
                        return getSupportedFormat(gl, gl.RG16F, gl.RG, type);
                    case gl.RG16F:
                        return getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, type);
                    default:
                        return null;
                }
            }
            return null;
        }
    
        return {
            internalFormat,
            format
        }
    }
    
    function supportRenderTextureFormat (gl: WebGLRenderingContext | WebGL2RenderingContext, internalFormat: number, format: number, type: number) {
        let texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, 4, 4, 0, format, type, null);
    
        let fbo = gl.createFramebuffer();
        gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
    
        const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
        return status == gl.FRAMEBUFFER_COMPLETE;
    }
    
    function compileShader (type: number, source: string, keywords?: string[]) {
        source = addKeywords(source, keywords);
    
        const shader = gl!.createShader(type);
        if(!shader) return null;

        gl!.shaderSource(shader, source);
        gl!.compileShader(shader);
    
        if (!gl!.getShaderParameter(shader, gl!.COMPILE_STATUS))
            console.trace(gl!.getShaderInfoLog(shader));
    
        return shader;
    };
    
    function addKeywords (source: string, keywords?: string[]) {
        if (keywords == null) return source;
        let keywordsString = '';
        keywords.forEach(keyword => {
            keywordsString += '#define ' + keyword + '\n';
        });
        return keywordsString + source;
    }
    
    class Program {
      uniforms: {[key: string]: WebGLUniformLocation};
      program: WebGLProgram;

        constructor (vertexShader: WebGLShader, fragmentShader: WebGLShader) {
            this.program = createProgram(vertexShader, fragmentShader);
            this.uniforms = getUniforms(this.program);
        }
    
        bind () {
            gl!.useProgram(this.program);
        }
    }
    
    function createProgram (vertexShader: WebGLShader, fragmentShader: WebGLShader) {
        let program = gl!.createProgram();
        if(!program) throw new Error("Failed to create program");
        gl!.attachShader(program, vertexShader);
        gl!.attachShader(program, fragmentShader);
        gl!.linkProgram(program);
    
        if (!gl!.getProgramParameter(program, gl!.LINK_STATUS))
            console.trace(gl!.getProgramInfoLog(program));
    
        return program;
    }
    
    function getUniforms (program: WebGLProgram) {
        let uniforms: {[key: string]: WebGLUniformLocation} = {};
        let uniformCount = gl!.getProgramParameter(program, gl!.ACTIVE_UNIFORMS);
        for (let i = 0; i < uniformCount; i++) {
            let uniformName = gl!.getActiveUniform(program, i)!.name;
            uniforms[uniformName] = gl!.getUniformLocation(program, uniformName)!;
        }
        return uniforms;
    }

    class Material {
      vertexShader: WebGLShader;
      fragmentShaderSource: string;
      programs: {[key: number]: Program} = {};
      activeProgram: Program | null = null;
      uniforms: {[key: string]: WebGLUniformLocation } = {};

        constructor (vertexShader: WebGLShader, fragmentShaderSource: string) {
            this.vertexShader = vertexShader;
            this.fragmentShaderSource = fragmentShaderSource;
        }
    
        setKeywords (keywords: string[]) {
            let hash = 0;
            for (let i = 0; i < keywords.length; i++)
                hash += hashCode(keywords[i]);
    
            let program = this.programs[hash];
            if (program == null)
            {
                let fragmentShader = compileShader(gl!.FRAGMENT_SHADER, this.fragmentShaderSource, keywords)!;
                program = new Program(this.vertexShader, fragmentShader);
                this.programs[hash] = program;
            }
    
            if (program == this.activeProgram) return;
    
            this.uniforms = program.uniforms;
            this.activeProgram = program;
        }
    
        bind () {
            if (this.activeProgram) {
                this.activeProgram.bind();
            }
        }
    }

    const hashCode = (s: string) => {
        if (s.length == 0) return 0;
        let hash = 0;
        for (let i = 0; i < s.length; i++) {
            hash = (hash << 5) - hash + s.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    };
    
    const baseVertexShader = compileShader(gl.VERTEX_SHADER, `
        precision highp float;
        attribute vec2 aPosition;
        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform vec2 texelSize;

        void main () {
            vUv = aPosition * 0.5 + 0.5;
            vL = vUv - vec2(texelSize.x, 0.0);
            vR = vUv + vec2(texelSize.x, 0.0);
            vT = vUv + vec2(0.0, texelSize.y);
            vB = vUv - vec2(0.0, texelSize.y);
            gl_Position = vec4(aPosition, 0.0, 1.0);
        }`)!;

    const clearShader = compileShader(gl.FRAGMENT_SHADER, `
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        uniform sampler2D uTexture;
        uniform float value;
        void main () {
            gl_FragColor = value * texture2D(uTexture, vUv);
        }`)!;

    const displayShaderSource = `
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        uniform sampler2D uTexture;
        void main () {
            vec3 c = texture2D(uTexture, vUv).rgb;
            float a = max(c.r, max(c.g, c.b));
            gl_FragColor = vec4(c, a);
        }`;
    
    const splatShader = compileShader(gl.FRAGMENT_SHADER, `
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      uniform sampler2D uTarget;
      uniform float aspectRatio;
      uniform vec3 color;
      uniform vec2 point;
      uniform float radius;

      void main () {
          vec2 p = vUv - point.xy;
          p.x *= aspectRatio;
          vec3 splat = exp(-dot(p, p) / radius) * color;
          vec3 base = texture2D(uTarget, vUv).xyz;
          gl_FragColor = vec4(base + splat, 1.0);
      }`)!;
    
    const advectionShader = compileShader(gl.FRAGMENT_SHADER, `
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        uniform sampler2D uVelocity;
        uniform sampler2D uSource;
        uniform vec2 texelSize;
        uniform vec2 dyeTexelSize;
        uniform float dt;
        uniform float dissipation;

        vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
            vec2 st = uv / tsize - 0.5;
            vec2 iuv = floor(st);
            vec2 fuv = fract(st);
            vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
            vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
            vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
            vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);
            return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
        }

        void main () {
            #ifdef MANUAL_FILTERING
                vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
                gl_FragColor = bilerp(uSource, coord, dyeTexelSize);
            #else
                vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
                gl_FragColor = texture2D(uSource, coord);
            #endif
            gl_FragColor *= dissipation;
        }`,
        ext?.supportLinearFiltering ? undefined : ['MANUAL_FILTERING']
    )!;

    const divergenceShader = compileShader(gl.FRAGMENT_SHADER, `
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uVelocity;

        void main () {
            float L = texture2D(uVelocity, vL).x;
            float R = texture2D(uVelocity, vR).x;
            float T = texture2D(uVelocity, vT).y;
            float B = texture2D(uVelocity, vB).y;

            vec2 C = texture2D(uVelocity, vUv).xy;
            if (vL.x < 0.0) { L = -C.x; }
            if (vR.x > 1.0) { R = -C.x; }
            if (vT.y > 1.0) { T = -C.y; }
            if (vB.y < 0.0) { B = -C.y; }

            float div = 0.5 * (R - L + T - B);
            gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
        }`)!;

    const curlShader = compileShader(gl.FRAGMENT_SHADER, `
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uVelocity;
        void main () {
            float L = texture2D(uVelocity, vL).y;
            float R = texture2D(uVelocity, vR).y;
            float T = texture2D(uVelocity, vT).x;
            float B = texture2D(uVelocity, vB).x;
            float vorticity = R - L - T + B;
            gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
        }`)!;

    const vorticityShader = compileShader(gl.FRAGMENT_SHADER, `
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform sampler2D uVelocity;
        uniform sampler2D uCurl;
        uniform float curl;
        uniform float dt;
        void main () {
            float L = texture2D(uCurl, vL).x;
            float R = texture2D(uCurl, vR).x;
            float T = texture2D(uCurl, vT).x;
            float B = texture2D(uCurl, vB).x;
            float C = texture2D(uCurl, vUv).x;
            vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
            force /= length(force) + 0.0001;
            force *= curl * C;
            force.y *= -1.0;
            vec2 velocity = texture2D(uVelocity, vUv).xy;
            velocity += force * dt;
            velocity = min(max(velocity, -1000.0), 1000.0);
            gl_FragColor = vec4(velocity, 0.0, 1.0);
        }`)!;

    const pressureShader = compileShader(gl.FRAGMENT_SHADER, `
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uPressure;
        uniform sampler2D uDivergence;
        void main () {
            float L = texture2D(uPressure, vL).x;
            float R = texture2D(uPressure, vR).x;
            float T = texture2D(uPressure, vT).x;
            float B = texture2D(uPressure, vB).x;
            float C = texture2D(uPressure, vUv).x;
            float divergence = texture2D(uDivergence, vUv).x;
            float pressure = (L + R + B + T - divergence) * 0.25;
            gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
        }`)!;

    const gradientSubtractShader = compileShader(gl.FRAGMENT_SHADER, `
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uPressure;
        uniform sampler2D uVelocity;
        void main () {
            float L = texture2D(uPressure, vL).x;
            float R = texture2D(uPressure, vR).x;
            float T = texture2D(uPressure, vT).x;
            float B = texture2D(uPressure, vB).x;
            vec2 velocity = texture2D(uVelocity, vUv).xy;
            velocity.xy -= vec2(R - L, T - B);
            gl_FragColor = vec4(velocity, 0.0, 1.0);
        }`)!;

    
    const init = () => {
      const isWebGL2 = gl instanceof WebGL2RenderingContext;

      let halfFloat, supportLinearFiltering;
      if (isWebGL2) {
          gl.getExtension('EXT_color_buffer_float');
          supportLinearFiltering = gl.getExtension('OES_texture_float_linear');
          halfFloat = gl.HALF_FLOAT;
      } else {
          const OES_texture_half_float = gl.getExtension('OES_texture_half_float');
          supportLinearFiltering = gl.getExtension('OES_texture_half_float_linear');
          halfFloat = OES_texture_half_float ? OES_texture_half_float.HALF_FLOAT_OES : 0;
      }

      ext = {
          isWebGL2,
          supportLinearFiltering,
          halfFloat,
          formatRGBA: getSupportedFormat(gl!, isWebGL2 ? (gl as WebGL2RenderingContext).RGBA16F : gl!.RGBA, gl!.RGBA, halfFloat)!,
          formatRG: getSupportedFormat(gl!, isWebGL2 ? (gl as WebGL2RenderingContext).RG16F : gl!.RGBA, isWebGL2 ? (gl as WebGL2RenderingContext).RG : gl!.RGBA, halfFloat)!,
          formatR: getSupportedFormat(gl!, isWebGL2 ? (gl as WebGL2RenderingContext).R16F : gl!.RGBA, isWebGL2 ? (gl as WebGL2RenderingContext).RED : gl!.RGBA, halfFloat)!
      };
      
      if (!ext.formatRGBA) {
        console.error("WebGL format RGBA not supported");
        return;
      }

      const buffer = gl!.createBuffer();
      gl!.bindBuffer(gl!.ARRAY_BUFFER, buffer);
      gl!.bufferData(gl!.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), gl!.STATIC_DRAW);
      const elemBuffer = gl!.createBuffer();
      gl!.bindBuffer(gl!.ELEMENT_ARRAY_BUFFER, elemBuffer);
      gl!.bufferData(gl!.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), gl!.STATIC_DRAW);
      gl!.vertexAttribPointer(0, 2, gl!.FLOAT, false, 0, 0);
      gl!.enableVertexAttribArray(0);


      copyProgram = new Program(baseVertexShader, compileShader(gl!.FRAGMENT_SHADER, `
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        uniform sampler2D uTexture;
        void main () {
            gl_FragColor = texture2D(uTexture, vUv);
        }`)!);

      clearProgram = new Program(baseVertexShader, clearShader);
      splatProgram = new Program(baseVertexShader, splatShader);
      advectionProgram = new Program(baseVertexShader, advectionShader);
      divergenceProgram = new Program(baseVertexShader, divergenceShader);
      curlProgram = new Program(baseVertexShader, curlShader);
      vorticityProgram = new Program(baseVertexShader, vorticityShader);
      pressureProgram = new Program(baseVertexShader, pressureShader);
      gradienSubtractProgram = new Program(baseVertexShader, gradientSubtractShader);

      displayMaterial = new Material(baseVertexShader, displayShaderSource);
      displayMaterial.setKeywords([]);
      
      initFramebuffers();
      multipleSplats(parseInt(String(Math.random() * 20 + 5)));
      update();
    }
    
    function initFramebuffers () {
        let simRes = getResolution(config.SIM_RESOLUTION);
        let dyeRes = getResolution(config.DYE_RESOLUTION);

        const texType = ext.halfFloat;
        const rgba = ext.formatRGBA;
        const rg = ext.formatRG;
        const r = ext.formatR;
        const filtering = ext.supportLinearFiltering ? gl!.LINEAR : gl!.NEAREST;

        if (!rgba || !rg || !r) {
            console.error("Failed to get supported texture formats.");
            return;
        }

        if (dye == null)
            dye = createDoubleFBO(dyeRes.width, dyeRes.height, rgba.internalFormat, rgba.format, texType, filtering);
        else
            dye = resizeDoubleFBO(dye, dyeRes.width, dyeRes.height, rgba.internalFormat, rgba.format, texType, filtering);

        if (velocity == null)
            velocity = createDoubleFBO(simRes.width, simRes.height, rg.internalFormat, rg.format, texType, filtering);
        else
            velocity = resizeDoubleFBO(velocity, simRes.width, simRes.height, rg.internalFormat, rg.format, texType, filtering);

        divergence = createFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl!.NEAREST);
        curlFBO = createFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl!.NEAREST);
        pressureFBO = createDoubleFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl!.NEAREST);
    }
    
    function getResolution (resolution: number) {
        let aspectRatio = gl!.drawingBufferWidth / gl!.drawingBufferHeight;
        if (aspectRatio < 1)
            aspectRatio = 1.0 / aspectRatio;
    
        let min = Math.round(resolution);
        let max = Math.round(resolution * aspectRatio);
    
        if (gl!.drawingBufferWidth > gl!.drawingBufferHeight)
            return { width: max, height: min };
        else
            return { width: min, height: max };
    }
    
    function createFBO (w: number, h: number, internalFormat: number, format: number, type: number, param: number) {
        gl!.activeTexture(gl!.TEXTURE0);
        let texture = gl!.createTexture();
        gl!.bindTexture(gl!.TEXTURE_2D, texture);
        gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_MIN_FILTER, param);
        gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_MAG_FILTER, param);
        gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_WRAP_S, gl!.CLAMP_TO_EDGE);
        gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_WRAP_T, gl!.CLAMP_TO_EDGE);
        gl!.texImage2D(gl!.TEXTURE_2D, 0, internalFormat, w, h, 0, format, type, null);
    
        let fbo = gl!.createFramebuffer();
        gl!.bindFramebuffer(gl!.FRAMEBUFFER, fbo);
        gl!.framebufferTexture2D(gl!.FRAMEBUFFER, gl!.COLOR_ATTACHMENT0, gl!.TEXTURE_2D, texture, 0);
        gl!.viewport(0, 0, w, h);
        gl!.clear(gl!.COLOR_BUFFER_BIT);
    
        let texelSizeX = 1.0 / w;
        let texelSizeY = 1.0 / h;
    
        return {
            texture,
            fbo,
            width: w,
            height: h,
            texelSizeX,
            texelSizeY,
            attach (id: number) {
                gl!.activeTexture(gl!.TEXTURE0 + id);
                gl!.bindTexture(gl!.TEXTURE_2D, texture);
                return id;
            }
        };
    }
    
    function createDoubleFBO (w: number, h: number, internalFormat: number, format: number, type: number, param: number) {
        let fbo1 = createFBO(w, h, internalFormat, format, type, param);
        let fbo2 = createFBO(w, h, internalFormat, format, type, param);
    
        return {
            get read () {
                return fbo1;
            },
            set read (value) {
                fbo1 = value;
            },
            get write () {
                return fbo2;
            },
            set write (value) {
                fbo2 = value;
            },
            width: w,
            height: h,
            texelSizeX: 1.0 / w,
            texelSizeY: 1.0 / h,
            swap () {
                let temp = fbo1;
                fbo1 = fbo2;
                fbo2 = temp;
            }
        }
    }

    function resizeFBO (target: any, w: number, h: number, internalFormat: number, format: number, type: number, param: number) {
        let newFBO = createFBO(w, h, internalFormat, format, type, param);
        copyProgram.bind();
        gl!.uniform1i(copyProgram.uniforms.uTexture, target.attach(0));
        blit(newFBO, false);
        return newFBO;
    }

    function resizeDoubleFBO (target: any, w: number, h: number, internalFormat: number, format: number, type: number, param: number) {
        if (target.width == w && target.height == h)
            return target;
        target.read = resizeFBO(target.read, w, h, internalFormat, format, type, param);
        target.write = createFBO(w, h, internalFormat, format, type, param);
        target.width = w;
        target.height = h;
        target.texelSizeX = 1.0 / w;
        target.texelSizeY = 1.0 / h;
        return target;
    }
    
    const multipleSplats = (amount: number) => {
        for (let i = 0; i < amount; i++) {
            const color = { r: Math.random() * 0.5 + 0.2, g: Math.random() * 0.5 + 0.2, b: Math.random() * 0.5 + 0.2 };
            const x = canvas.width * Math.random();
            const y = canvas.height * Math.random();
            const dx = 1000 * (Math.random() - 0.5);
            const dy = 1000 * (Math.random() - 0.5);
            splat(x, y, dx, dy, color);
        }
    };

    const splat = (x: number, y: number, dx: number, dy: number, color: {r: number, g: number, b: number}) => {
        splatProgram.bind();
        gl!.uniform1i(splatProgram.uniforms.uTarget, velocity.read.attach(0));
        gl!.uniform1f(splatProgram.uniforms.aspectRatio, canvas.width / canvas.height);
        gl!.uniform2f(splatProgram.uniforms.point, x / canvas.width, 1.0 - y / canvas.height);
        gl!.uniform3f(splatProgram.uniforms.color, dx, dy, 0.0);
        gl!.uniform1f(splatProgram.uniforms.radius, correctRadius(config.SPLAT_RADIUS / 100.0));
        blit(velocity.write, false);
        velocity.swap();

        gl!.uniform1i(splatProgram.uniforms.uTarget, dye.read.attach(0));
        gl!.uniform3f(splatProgram.uniforms.color, color.r, color.g, color.b);
        blit(dye.write, false);
        dye.swap();
    };

    function correctRadius (radius: number) {
      let aspectRatio = canvas.width / canvas.height;
      if (aspectRatio > 1)
          radius *= aspectRatio;
      return radius;
    }

    const calcDeltaTime = () => {
      const now = Date.now();
      let dt = (now - lastUpdateTime) / 1000;
      dt = Math.min(dt, 0.016666);
      lastUpdateTime = now;
      return dt;
    };
    
    function updatePointers () {
      pointers.forEach(p => {
          if (p.moved) {
              p.moved = false;
              splatPointer(p);
          }
      });
    }

    function splatPointer (pointer: typeof pointers[number]) {
      let dx = pointer.deltaX * config.SPLAT_FORCE;
      let dy = pointer.deltaY * config.SPLAT_FORCE;
      splat(pointer.texcoordX * canvas.width, pointer.texcoordY * canvas.height, dx, dy, pointer.color);
  }

  function updateColors (dt: number) {
    if (!config.COLORFUL) return;

    colorUpdateTimer += dt * config.COLOR_UPDATE_SPEED;
    if (colorUpdateTimer >= 1) {
        colorUpdateTimer = wrap(colorUpdateTimer, 0, 1);
        pointers.forEach(p => {
            p.color = generateColor();
        });
    }
  }

  function generateColor () {
    let c = HSVtoRGB(Math.random(), 1.0, 1.0);
    c.r *= 0.15;
    c.g *= 0.15;
    c.b *= 0.15;
    return c;
  }

  function HSVtoRGB (h: number, s: number, v: number) {
    let r: number, g: number, b: number, i: number, f: number, p: number, q: number, t: number;
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);

    switch (i % 6) {
        case 0: r = v; g = t; b = p; break;
        case 1: r = q; g = v; b = p; break;
        case 2: r = p; g = v; b = t; break;
        case 3: r = p; g = q; b = v; break;
        case 4: r = t; g = p; b = v; break;
        case 5: r = v; g = p; b = q; break;
        default: r = 0; g = 0; b = 0; break;
    }

    return {
        r: r,
        g: g,
        b: b
    };
  }

  function wrap (value: number, min: number, max: number) {
    let range = max - min;
    if (range == 0) return min;
    return (value - min) % range + min;
  }

    function blit (target: { fbo: WebGLFramebuffer | null, width: number, height: number} | null, clear = false) {
        if(target == null) {
            gl!.viewport(0, 0, gl!.drawingBufferWidth, gl!.drawingBufferHeight);
            gl!.bindFramebuffer(gl!.FRAMEBUFFER, null);
        } else {
            gl!.viewport(0, 0, target.width, target.height);
            gl!.bindFramebuffer(gl!.FRAMEBUFFER, target.fbo);
        }
        if (clear)
        {
            gl!.clearColor(0.0, 0.0, 0.0, 1.0);
            gl!.clear(gl!.COLOR_BUFFER_BIT);
        }
        gl!.drawElements(gl!.TRIANGLES, 6, gl!.UNSIGNED_SHORT, 0);
    }
    
    function step (dt: number) {
      gl!.disable(gl!.BLEND);

      curlProgram.bind();
      gl!.uniform2f(curlProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
      gl!.uniform1i(curlProgram.uniforms.uVelocity, velocity.read.attach(0));
      blit(curlFBO, false);

      vorticityProgram.bind();
      gl!.uniform2f(vorticityProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
      gl!.uniform1i(vorticityProgram.uniforms.uVelocity, velocity.read.attach(0));
      gl!.uniform1i(vorticityProgram.uniforms.uCurl, curlFBO.attach(1));
      gl!.uniform1f(vorticityProgram.uniforms.curl, config.CURL);
      gl!.uniform1f(vorticityProgram.uniforms.dt, dt);
      blit(velocity.write, false);
      velocity.swap();

      divergenceProgram.bind();
      gl!.uniform2f(divergenceProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
      gl!.uniform1i(divergenceProgram.uniforms.uVelocity, velocity.read.attach(0));
      blit(divergence, false);

      clearProgram.bind();
      gl!.uniform1i(clearProgram.uniforms.uTexture, pressureFBO.read.attach(0));
      gl!.uniform1f(clearProgram.uniforms.value, config.PRESSURE);
      blit(pressureFBO.write, false);
      pressureFBO.swap();

      pressureProgram.bind();
      gl!.uniform2f(pressureProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
      gl!.uniform1i(pressureProgram.uniforms.uDivergence, divergence.attach(0));
      for (let i = 0; i < config.PRESSURE_ITERATIONS; i++) {
          gl!.uniform1i(pressureProgram.uniforms.uPressure, pressureFBO.read.attach(1));
          blit(pressureFBO.write, false);
          pressureFBO.swap();
      }

      gradienSubtractProgram.bind();
      gl!.uniform2f(gradienSubtractProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
      gl!.uniform1i(gradienSubtractProgram.uniforms.uPressure, pressureFBO.read.attach(0));
      gl!.uniform1i(gradienSubtractProgram.uniforms.uVelocity, velocity.read.attach(1));
      blit(velocity.write, false);
      velocity.swap();

      advectionProgram.bind();
      gl!.uniform2f(advectionProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
      if (!ext.supportLinearFiltering)
          gl!.uniform2f(advectionProgram.uniforms.dyeTexelSize, velocity.texelSizeX, velocity.texelSizeY);
      let velocityId = velocity.read.attach(0);
      gl!.uniform1i(advectionProgram.uniforms.uVelocity, velocityId);
      gl!.uniform1i(advectionProgram.uniforms.uSource, velocityId);
      gl!.uniform1f(advectionProgram.uniforms.dt, dt);
      gl!.uniform1f(advectionProgram.uniforms.dissipation, 1.0 - config.VELOCITY_DISSIPATION * dt);
      blit(velocity.write, false);
      velocity.swap();

      if (!ext.supportLinearFiltering)
          gl!.uniform2f(advectionProgram.uniforms.dyeTexelSize, dye.texelSizeX, dye.texelSizeY);
      gl!.uniform1i(advectionProgram.uniforms.uVelocity, velocity.read.attach(0));
      gl!.uniform1i(advectionProgram.uniforms.uSource, dye.read.attach(1));
      gl!.uniform1f(advectionProgram.uniforms.dissipation, 1.0 - config.DENSITY_DISSIPATION * dt);
      blit(dye.write, false);
      dye.swap();
    }

    function render (target: { fbo: WebGLFramebuffer | null} | null) {
      gl!.blendFunc(gl!.ONE, gl!.ONE_MINUS_SRC_ALPHA);
      gl!.enable(gl!.BLEND);
  
      let width = target == null ? gl!.drawingBufferWidth : (target as any).width;
      let height = target == null ? gl!.drawingBufferHeight : (target as any).height;
  
      displayMaterial.bind();
      gl!.uniform1i(displayMaterial.uniforms.uTexture, dye.read.attach(0));
      blit(target, false);
    }
    
    const update = () => {
      const dt = calcDeltaTime();
      if (resizeCanvas())
          initFramebuffers();
      updateColors(dt);
      updatePointers();
      step(dt);
      render(null!);
      if (isMounted.current) {
        animationIdRef.current = requestAnimationFrame(update);
      }
    };
    
    function resizeCanvas () {
      let width = scaleByPixelRatio(canvas.clientWidth);
      let height = scaleByPixelRatio(canvas.clientHeight);
      if (canvas.width != width || canvas.height != height) {
          canvas.width = width;
          canvas.height = height;
          return true;
      }
      return false;
    }

    function scaleByPixelRatio (input: number) {
      let pixelRatio = window.devicePixelRatio || 1;
      return Math.floor(input * pixelRatio);
    }

    function updatePointerMoveData (pointer: typeof pointers[number], posX: number, posY: number) {
      pointer.prevTexcoordX = pointer.texcoordX;
      pointer.prevTexcoordY = pointer.texcoordY;
      pointer.texcoordX = posX / canvas.width;
      pointer.texcoordY = 1.0 - posY / canvas.height;
      pointer.deltaX = correctDeltaX(pointer.texcoordX - pointer.prevTexcoordX);
      pointer.deltaY = correctDeltaY(pointer.texcoordY - pointer.prevTexcoordY);
      pointer.moved = Math.abs(pointer.deltaX) > 0 || Math.abs(pointer.deltaY) > 0;
    }

    function correctDeltaX (delta: number) {
      let aspectRatio = canvas.width / canvas.height;
      if (aspectRatio < 1) delta *= aspectRatio;
      return delta;
    }

    function correctDeltaY (delta: number) {
        let aspectRatio = canvas.width / canvas.height;
        if (aspectRatio > 1) delta /= aspectRatio;
        return delta;
    }

    const handleMouseMove = (e: MouseEvent) => {
        let posX = scaleByPixelRatio(e.clientX);
        let posY = scaleByPixelRatio(e.clientY);
        let pointer = pointers[0];
        updatePointerMoveData(pointer, posX, posY);
    };

    const handleMouseDown = (e: MouseEvent) => {
        let posX = scaleByPixelRatio(e.clientX);
        let posY = scaleByPixelRatio(e.clientY);
        let pointer = pointers[0];
        pointer.down = true;
        pointer.color = generateColor();
        updatePointerMoveData(pointer, posX, posY);
    };

    window.addEventListener('mouseup', () => {
        pointers[0].down = false;
    });
    
    init();

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    
    return () => {
        isMounted.current = false;
        if (animationIdRef.current) {
            cancelAnimationFrame(animationIdRef.current);
        }
        // Cleanup event listeners
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
       <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};


const SmokeyCursor = () => {
    const [isClient, setIsClient] = useState(false)
 
    useEffect(() => {
        setIsClient(true)
    }, [])

    return isClient ? <FluidCursorEffect /> : null;
}


export default SmokeyCursor;
