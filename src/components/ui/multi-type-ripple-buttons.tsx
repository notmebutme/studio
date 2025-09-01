
import React, { ReactNode, useState, useMemo, MouseEvent, CSSProperties } from 'react';

interface RippleState {
  key: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

interface RippleButtonProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
  variant?: 'default' | 'hover' | 'ghost' | 'hoverborder';
  rippleColor?: string; // User override for the JS click ripple color
  rippleDuration?: number; // Duration for the JS click ripple (all variants)

  // For 'hover' variant
  hoverBaseColor?: string;
  hoverRippleColor?: string;

  // For 'hoverborder' variant
  hoverBorderEffectColor?: string; // Color of the visual effect forming the border
  hoverBorderEffectThickness?: string; // Thickness of the border effect (e.g., "0.3em", "2px")
}

const hexToRgba = (hex: string, alpha: number): string => {
  let hexValue = hex.startsWith('#') ? hex.slice(1) : hex;
  if (hexValue.length === 3) {
    hexValue = hexValue.split('').map(char => char + char).join('');
  }
  const r = parseInt(hexValue.slice(0, 2), 16);
  const g = parseInt(hexValue.slice(2, 4), 16);
  const b = parseInt(hexValue.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const GRID_HOVER_NUM_COLS = 36;
const GRID_HOVER_NUM_ROWS = 12;
const GRID_HOVER_TOTAL_CELLS = GRID_HOVER_NUM_COLS * GRID_HOVER_NUM_ROWS;
const GRID_HOVER_RIPPLE_EFFECT_SIZE = "18.973665961em";

const JS_RIPPLE_KEYFRAMES = `
  @keyframes js-ripple-animation {
    0% { transform: scale(0); opacity: 1; }
    100% { transform: scale(1); opacity: 0; }
  }
  .animate-js-ripple-effect {
    animation: js-ripple-animation var(--ripple-duration) ease-out forwards;
  }
`;

const RippleButton: React.FC<RippleButtonProps> = ({
  children,
  onClick,
  className = '',
  disabled = false,
  variant = 'default',
  rippleColor: userProvidedRippleColor,
  rippleDuration = 600,
  hoverBaseColor = '#6996e2',
  hoverRippleColor: customHoverRippleColor,
  hoverBorderEffectColor = '#6996e277',
  hoverBorderEffectThickness = '0.3em',
}) => {
  const [jsRipples, setJsRipples] = useState<RippleState[]>([]);

  const determinedJsRippleColor = useMemo(() => {
    if (userProvidedRippleColor) {
      return userProvidedRippleColor;
    }
    return 'var(--button-ripple-color, rgba(0, 0, 0, 0.1))';
  }, [userProvidedRippleColor]);

  const dynamicGridHoverStyles = useMemo(() => {
    let nthChildHoverRules = '';
    const cellDim = 0.25;
    const initialTopOffset = 0.125;
    const initialLeftOffset = 0.1875;

    // Standardized hover transition duration for width and height
    const hoverEffectDuration = '0.9s'; // CHANGED: Standardized to 0.9s

    for (let r = 0; r < GRID_HOVER_NUM_ROWS; r++) {
      for (let c = 0; c < GRID_HOVER_NUM_COLS; c++) {
        const childIndex = r * GRID_HOVER_NUM_COLS + c + 1;
        const topPos = initialTopOffset + r * cellDim;
        const leftPos = initialLeftOffset + c * cellDim;

        if (variant === 'hover') {
          nthChildHoverRules += `
            .hover-variant-grid-cell:nth-child(${childIndex}):hover ~ .hover-variant-visual-ripple {
              top: ${topPos}em; left: ${leftPos}em;
              transition: width ${hoverEffectDuration} ease, height ${hoverEffectDuration} ease, top 0s linear, left 0s linear;
            }`;
        } else if (variant === 'hoverborder') {
          nthChildHoverRules += `
            .hoverborder-variant-grid-cell:nth-child(${childIndex}):hover ~ .hoverborder-variant-visual-ripple {
              top: ${topPos}em; left: ${leftPos}em;
              transition: width ${hoverEffectDuration} ease-out, height ${hoverEffectDuration} ease-out, top 0s linear, left 0s linear;
            }`; // Using ease-out for hoverborder as it was before, just changed duration
        }
      }
    }

    if (variant === 'hover') {
      const actualHoverRippleColor = customHoverRippleColor
        ? customHoverRippleColor
        : hexToRgba(hoverBaseColor, 0.466);
      return `
        .hover-variant-visual-ripple {
          background-color: ${actualHoverRippleColor};
          transition: width ${hoverEffectDuration} ease, height ${hoverEffectDuration} ease, top 99999s linear, left 99999s linear;
        }
        .hover-variant-grid-cell:hover ~ .hover-variant-visual-ripple {
          width: ${GRID_HOVER_RIPPLE_EFFECT_SIZE}; height: ${GRID_HOVER_RIPPLE_EFFECT_SIZE};
        }
        ${nthChildHoverRules}
      `;
    } else if (variant === 'hoverborder') {
      return `
        .hoverborder-variant-ripple-container {
          padding: ${hoverBorderEffectThickness};
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
        }
        .hoverborder-variant-visual-ripple {
          background-color: ${hoverBorderEffectColor};
          /* Ensure the base transition also uses the standardized duration for width/height */
          transition: width ${hoverEffectDuration} ease-out, height ${hoverEffectDuration} ease-out, top 99999s linear, left 9999s linear;
        }
        .hoverborder-variant-grid-cell:hover ~ .hoverborder-variant-visual-ripple {
          width: ${GRID_HOVER_RIPPLE_EFFECT_SIZE}; height: ${GRID_HOVER_RIPPLE_EFFECT_SIZE};
        }
        ${nthChildHoverRules}
      `;
    }
    return '';
  }, [variant, hoverBaseColor, customHoverRippleColor, hoverBorderEffectColor, hoverBorderEffectThickness]);

  const createJsRipple = (event: MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    const newRipple: RippleState = { key: Date.now(), x, y, size, color: determinedJsRippleColor };
    setJsRipples(prev => [...prev, newRipple]);
    setTimeout(() => {
      setJsRipples(currentRipples => currentRipples.filter(r => r.key !== newRipple.key));
    }, rippleDuration);
  };

  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      createJsRipple(event);
      if (onClick) onClick(event);
    }
  };

  const jsRippleElements = (
    <div className="absolute inset-0 pointer-events-none z-[5]">
      {jsRipples.map(ripple => (
        <span
          key={ripple.key}
          className="absolute rounded-full animate-js-ripple-effect"
          style={{
            left: ripple.x, top: ripple.y, width: ripple.size, height: ripple.size,
            backgroundColor: ripple.color,
            ['--ripple-duration' as any]: `${rippleDuration}ms`,
          } as CSSProperties}
        />
      ))}
    </div>
  );

  if (variant === 'hover') {
    const hoverButtonFinalClassName = [
      "relative", "rounded-lg", "text-lg", "px-4", "py-2",
      "border-none", "bg-transparent", "isolate", "overflow-hidden", "cursor-pointer",
      disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "",
      className,
    ].filter(Boolean).join(" ");
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: JS_RIPPLE_KEYFRAMES }} />
        <style dangerouslySetInnerHTML={{ __html: dynamicGridHoverStyles }} />
        <button className={hoverButtonFinalClassName} onClick={handleButtonClick} disabled={disabled}>
          <span className="relative z-[10] pointer-events-none">{children}</span>
          {jsRippleElements}
          <div
            className="hover-variant-grid-container absolute inset-0 grid overflow-hidden pointer-events-none z-[0]"
            style={{ gridTemplateColumns: `repeat(${GRID_HOVER_NUM_COLS}, 0.25em)` }}
          >
            {Array.from({ length: GRID_HOVER_TOTAL_CELLS }, (_, index) => (
              <span key={index} className="hover-variant-grid-cell relative flex justify-center items-center pointer-events-auto" />
            ))}
            <div className="hover-variant-visual-ripple pointer-events-none absolute w-0 h-0 rounded-full transform -translate-x-1/2 -translate-y-1/2 top-0 left-0 z-[-1]" />
          </div>
        </button>
      </>
    );
  }

  if (variant === 'hoverborder') {
    const hoverBorderButtonFinalClassName = [
      "relative", "rounded-lg", "overflow-hidden", "text-lg", "px-4", "py-2",
      "border-none", "bg-transparent", "isolate", "cursor-pointer",
      disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "",
      className,
    ].filter(Boolean).join(" ");

    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: JS_RIPPLE_KEYFRAMES }} />
        <style dangerouslySetInnerHTML={{ __html: dynamicGridHoverStyles }} />
        <button
          className={hoverBorderButtonFinalClassName}
          onClick={handleButtonClick}
          disabled={disabled}
        >
          <span className="relative z-[10] pointer-events-none">{children}</span>
          {jsRippleElements}
          <div
            className="hoverborder-variant-ripple-container absolute inset-0 grid rounded-[0.8em] overflow-hidden pointer-events-none z-[0]"
            style={{ gridTemplateColumns: `repeat(${GRID_HOVER_NUM_COLS}, 0.25em)` }}
          >
            {Array.from({ length: GRID_HOVER_TOTAL_CELLS }, (_, index) => (
              <span
                key={index}
                className="hoverborder-variant-grid-cell relative flex justify-center items-center pointer-events-auto"
              />
            ))}
            <div className="hoverborder-variant-visual-ripple pointer-events-none absolute w-0 h-0 rounded-full transform -translate-x-1/2 -translate-y-1/2 top-0 left-0 z-[-1]" />
          </div>
        </button>
      </>
    );
  }

  if (variant === 'ghost') {
    const ghostButtonFinalClassName = [
      "relative", "border-none", "bg-transparent", "isolate", "overflow-hidden", "cursor-pointer",
      "px-4", "py-2", "rounded-lg", "text-lg",
      disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "",
      className,
    ].filter(Boolean).join(" ");
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: JS_RIPPLE_KEYFRAMES }} />
        <button className={ghostButtonFinalClassName} onClick={handleButtonClick} disabled={disabled}>
          <span className="relative z-10 pointer-events-none">{children}</span>
          {jsRippleElements}
        </button>
      </>
    );
  }

  // Default variant
  const baseClasses = "relative border-none overflow-hidden isolate transition-all duration-200 cursor-pointer px-4 py-2 bg-blue-600 hover:opacity-90 text-white rounded-lg";
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";
  const buttonClasses = `${baseClasses} ${disabledClasses} ${className}`;
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: JS_RIPPLE_KEYFRAMES }} />
      <button className={buttonClasses} onClick={handleButtonClick} disabled={disabled}>
        <span className="relative z-[1] pointer-events-none">{children}</span>
        {jsRippleElements}
      </button>
    </>
  );
};

export { RippleButton };
