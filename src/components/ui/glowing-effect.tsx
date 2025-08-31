
'use client';
import { animate } from 'motion';
import {
  HTMLMotionProps,
  motion,
  useMotionTemplate,
  useMotionValue,
} from 'framer-motion';
import { useWindowSize } from '@/hooks/use-window-size';
import { cn } from '@/lib/utils';
import React, {
  MouseEvent,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

type GlowingEffectProps = PropsWithChildren<
  {
    glow?: boolean;
    disabled?: boolean;
    proximity?: number;
    spread?: number;
    inactiveZone?: number;
    borderWidth?: number;
  } & Omit<HTMLMotionProps<'div'>, 'children' | 'className'>
>;

export const GlowingEffect: React.FC<GlowingEffectProps> = ({
  children,
  glow = true,
  disabled = false,
  proximity = 64,
  spread = 40,
  inactiveZone = 0.01,
  borderWidth = 1,
  className,
  ...rest
}) => {
  const [isGlowing, setIsGlowing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { width: windowWidth, height: windowHeight } = useWindowSize();

  const handleMove = useCallback(
    ({ clientX, clientY, currentTarget }: MouseEvent<HTMLDivElement>) => {
      if (disabled || !glow) return;

      const { left, top } = currentTarget.getBoundingClientRect();
      const containerLeft = containerRef.current?.getBoundingClientRect().left;
      const containerTop = containerRef.current?.getBoundingClientRect().top;
      const x = clientX - (containerLeft ?? left);
      const y = clientY - (containerTop ?? top);
      mouseX.set(x);
      mouseY.set(y);
      const movementDuration = 0.2;
      const angle =
        (Math.atan2(
          y - (containerRef.current?.clientHeight ?? 0) / 2,
          x - (containerRef.current?.clientWidth ?? 0) / 2
        ) *
          180) /
        Math.PI;

      const currentAngle = parseFloat(
        (containerRef.current?.style.getPropertyValue('--angle') ?? '0')
          .replace('deg', '')
      );
      const angleDiff = angle - currentAngle;
      const newAngle = currentAngle + angleDiff;

      animate(currentAngle, newAngle, {
        duration: movementDuration,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (value) => {
          containerRef.current?.style.setProperty('--angle', `${value}deg`);
        },
      });
    },
    [disabled, glow, mouseX, mouseY]
  );

  const handleEnter = useCallback(() => {
    setIsGlowing(true);
  }, []);

  const handleLeave = useCallback(() => {
    setIsGlowing(false);
  }, []);

  useEffect(() => {
    if (!glow) {
      setIsGlowing(false);
    }
  }, [glow]);

  useEffect(() => {
    if (disabled) {
      setIsGlowing(false);
    }
  }, [disabled]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMove as any);
      container.addEventListener('mouseenter', handleEnter);
      container.addEventListener('mouseleave', handleLeave);
    }
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMove as any);
        container.removeEventListener('mouseenter', handleEnter);
        container.removeEventListener('mouseleave', handleLeave);
      }
    };
  }, [handleMove, handleEnter, handleLeave, children]);

  const background = useMotionTemplate`radial-gradient(
    ${spread}px circle at ${mouseX}px ${mouseY}px,
    hsl(var(--primary)) 0%,
    transparent 100%
    )`;

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        'relative h-full w-full pointer-events-none',
        !disabled &&
          glow &&
          'before:absolute before:inset-0 before:z-0 before:h-full before:w-full before:rounded-[inherit] before:bg-[radial-gradient(ellipse_at_50%_50%,rgba(255,255,255,0)_0%,rgba(0,0,0,0)_100%)] before:[background-position:calc(var(--x)/100*100%)_calc(var(--y)/100*100%)] before:[background-size:200%_200%] before:[mask:linear-gradient(white,white)_content-box,linear-gradient(white,white)] before:[mask-composite:exclude]',
        className
      )}
      style={{
        border: `${borderWidth}px solid transparent`,
        backgroundClip: 'padding-box, border-box',
        backgroundOrigin: 'padding-box, border-box',
        backgroundImage: `linear-gradient(to right, hsl(var(--background)), hsl(var(--background))), linear-gradient(var(--angle, 0deg), hsl(var(--primary) / 0.54) 8.33%, hsl(var(--primary) / 0.38) 20.83%, hsl(var(--primary) / 0) 29.17%)`,
        padding: borderWidth,
      }}
      {...rest}
    >
      <motion.div
        className={cn('relative h-full w-full rounded-[inherit]')}
        style={
          isGlowing && !disabled
            ? {
                backgroundImage: background,
              }
            : {}
        }
      >
        <div
          className={cn(
            'h-full w-full rounded-[inherit]',
            `absolute inset-0 z-0 bg-background/90`,
            `after:absolute after:inset-0 after:z-0 after:h-full after:w-full after:rounded-[inherit] after:bg-repeat after:opacity-10`,
            'after:[background-image:radial-gradient(hsl(var(--foreground)_/_0.15)_1px,_transparent_1px)] after:[background-size:20px_20px]'
          )}
        />
        <div className="relative z-10 h-full w-full rounded-[inherit]">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};
