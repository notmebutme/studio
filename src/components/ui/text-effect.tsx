'use client';

import { cn } from '@/lib/utils';
import {
  AnimatePresence,
  motion,
  TargetAndTransition,
  Variants,
} from 'framer-motion';
import React from 'react';

type PresetType = 'blur' | 'shake' | 'scale' | 'fade' | 'slide';

type TextEffectProps = {
  children: React.ReactNode;
  per?: 'word' | 'char' | 'line';
  as?: keyof React.JSX.IntrinsicElements;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
  className?: string;
  preset?: PresetType;
  delay?: number;
  trigger?: boolean;
  onAnimationComplete?: () => void;
  segmentWrapperClassName?: string;
};

const defaultStaggerTimes: Record<'char' | 'word' | 'line', number> = {
  char: 0.03,
  word: 0.05,
  line: 0.1,
};

const defaultContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
  exit: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
  exit: { opacity: 0 },
};

const presetVariants: Record<
  PresetType,
  { container: Variants; item: Variants }
> = {
  blur: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: 'blur(12px)' },
      visible: { opacity: 1, filter: 'blur(0px)' },
      exit: { opacity: 0, filter: 'blur(12px)' },
    },
  },
  shake: {
    container: defaultContainerVariants,
    item: {
      hidden: { x: 0 },
      visible: { x: [-5, 5, -5, 5, 0], transition: { duration: 0.5 } },
      exit: { x: 0 },
    },
  },
  scale: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, scale: 0 },
      visible: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0 },
    },
  },
  fade: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
      exit: { opacity: 0 },
    },
  },
  slide: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 },
    },
  },
};

function parseChildren(
  children: React.ReactNode,
  per: 'word' | 'char' | 'line'
): React.ReactNode[] {
  const segments: React.ReactNode[] = [];
  const regex = per === 'word' ? /(\s+)/ : per === 'char' ? /(.)/ : /(\n)/;

  React.Children.forEach(children, (child) => {
    if (typeof child === 'string') {
      partToSegments(child);
    } else if (React.isValidElement(child) && typeof child.props.children === 'string') {
        const textWithTags = React.Children.map(child.props.children, innerChild => {
            if (typeof innerChild === 'string') {
                return innerChild;
            }
            // This is a rough approximation for simple tags. 
            // For a robust solution, you'd need a proper HTML parser.
            if (React.isValidElement(innerChild) && innerChild.type === 'br') {
                 return '<br>';
            }
            if (React.isValidElement(innerChild) && innerChild.props.className) {
                return `<span class="${innerChild.props.className}">${innerChild.props.children}</span>`;
            }
            return '';
        }).join('');
        
        partToSegments(React.cloneElement(child, {children: textWithTags}));

    } else if (React.isValidElement(child)) {
      segments.push(child);
    }
  });

  function partToSegments(part: React.ReactNode) {
    if (typeof part === 'string') {
      segments.push(...part.split(regex).filter(Boolean));
    } else if (React.isValidElement(part) && typeof part.props.children === 'string') {
       const text = part.props.children;
       const splitText = text.split(regex).filter(Boolean);
       segments.push(...splitText.map(s => React.cloneElement(part, {children: s})));
    }
  }

  return segments;
}


const AnimationComponent: React.FC<{
  segment: any;
  variants: Variants;
  per: 'line' | 'word' | 'char';
  segmentWrapperClassName?: string;
}> = React.memo(({ segment, variants, per, segmentWrapperClassName }) => {

    if (React.isValidElement(segment)) {
        if(typeof segment.props.children === 'string' && segment.props.children.includes('<')){
             return (
                <motion.span variants={variants} className="inline-block" dangerouslySetInnerHTML={{__html: segment.props.children}} />
             )
        }
        return segment;
    }

    if (typeof segment !== 'string') {
        return null;
    }

    const content = per === 'line' ? (
        <motion.span variants={variants} className='block'>
            {segment}
        </motion.span>
    ) : (
        <motion.span
            aria-hidden='true'
            variants={variants}
            className='inline-block whitespace-pre'
        >
            {segment}
        </motion.span>
    );

    if (!segmentWrapperClassName) {
        return content;
    }

    const defaultWrapperClassName = per === 'line' ? 'block' : 'inline-block';

    return (
        <span className={cn(defaultWrapperClassName, segmentWrapperClassName)}>
        {content}
        </span>
    );
});

AnimationComponent.displayName = 'AnimationComponent';

export function TextEffect({
  children,
  per = 'word',
  as = 'p',
  variants,
  className,
  preset,
  delay = 0,
  trigger = true,
  onAnimationComplete,
  segmentWrapperClassName,
}: TextEffectProps) {
  const segments = parseChildren(children, per);

  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;
  const selectedVariants = preset
    ? presetVariants[preset]
    : { container: defaultContainerVariants, item: defaultItemVariants };
  const containerVariants = variants?.container || selectedVariants.container;
  const itemVariants = variants?.item || selectedVariants.item;

  const ariaLabel = React.Children.toArray(children).reduce<string>((acc, child) => {
    if (typeof child === 'string') {
        return acc + child;
    }
    if (React.isValidElement(child) && typeof child.props.children === 'string') {
        return acc + child.props.children;
    }
    return acc;
  }, '').replace(/<[^>]+>/g, '');


  const stagger = defaultStaggerTimes[per];

  const delayedContainerVariants: Variants = {
    hidden: containerVariants.hidden,
    visible: {
      ...containerVariants.visible,
      transition: {
        ...(containerVariants.visible as TargetAndTransition)?.transition,
        staggerChildren:
          (containerVariants.visible as TargetAndTransition)?.transition
            ?.staggerChildren || stagger,
        delayChildren: delay,
      },
    },
    exit: containerVariants.exit,
  };

  return (
    <AnimatePresence mode='popLayout'>
      {trigger && (
        <MotionTag
          initial='hidden'
          animate='visible'
          exit='exit'
          aria-label={ariaLabel}
          variants={delayedContainerVariants}
          className={cn('whitespace-pre-wrap', className)}
          onAnimationComplete={onAnimationComplete}
        >
          {segments.map((segment, index) => (
            <AnimationComponent
              key={`${per}-${index}-${
                typeof segment === 'string'
                  ? segment
                  : React.isValidElement(segment)
                  ? segment.key || index
                  : index
              }`}
              segment={segment}
              variants={itemVariants}
              per={per}
              segmentWrapperClassName={segmentWrapperClassName}
            />
          ))}
        </MotionTag>
      )}
    </AnimatePresence>
  );
}