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


function getSegments(children: React.ReactNode, per: 'word' | 'char' | 'line'): React.ReactNode[] {
    if (typeof children !== 'string') {
        return React.Children.toArray(children);
    }
    
    if (per === 'line') {
        return children.split('\n');
    } else if (per === 'word') {
        const wordsAndSpaces = children.split(/(\s+)/);
        const combined = [];
        let currentWord = '';
        for (const part of wordsAndSpaces) {
            if (part.match(/<[^>]+>/)) { // It's an HTML tag
                if(currentWord) combined.push(currentWord);
                combined.push(part);
                currentWord = '';
            } else if (part.match(/\s+/)) {
                if(currentWord) combined.push(currentWord);
                combined.push(part);
                currentWord = '';
            } else {
                currentWord += part;
            }
        }
        if(currentWord) combined.push(currentWord);
        
        // This is a bit of a hack to handle tags inside words
        const finalSegments: React.ReactNode[] = [];
        let buffer: (string | React.ReactElement)[] = [];

        children.split(/(\s+)/).forEach(word => {
            if (word.includes('<') && word.includes('>')) {
                // This is a rough way to handle simple tags. For complex nested HTML, a proper parser would be needed.
                const parts = word.split(/(<[^>]+>)/g).filter(Boolean);
                parts.forEach(part => {
                    if (part.startsWith('<') && part.endsWith('>')) {
                        finalSegments.push(<span dangerouslySetInnerHTML={{ __html: part }} />);
                    } else {
                        finalSegments.push(part);
                    }
                });
            } else {
                 finalSegments.push(word);
            }
        });


        return children.split(/(\s+)/);
    } else {
        return children.split('');
    }
}


function parseChildren(children: React.ReactNode, per: 'word' | 'char' | 'line'): React.ReactNode[] {
  if (typeof children !== 'string') {
    return React.Children.toArray(children);
  }

  const regex = per === 'word' ? /(\s+)/ : per === 'char' ? /(.)/ : /(\n)/;
  
  // Split the string by html tags, keeping the tags
  const parts = children.split(/(<[^>]+>)/);

  const segments: React.ReactNode[] = [];

  parts.forEach(part => {
    if (part.startsWith('<') && part.endsWith('>')) {
      // It's a tag, push it as a special non-animated segment
      segments.push({ type: 'tag', content: part });
    } else if (part) {
      // It's text, split it by the 'per' delimiter
      part.split(regex).forEach(textSegment => {
        if (textSegment) {
          segments.push(textSegment);
        }
      });
    }
  });

  return segments;
}


const AnimationComponent: React.FC<{
segment: any;
variants: Variants;
per: 'line' | 'word' | 'char';
segmentWrapperClassName?: string;
}> = React.memo(({ segment, variants, per, segmentWrapperClassName }) => {

    if (segment.type === 'tag') {
        return <span dangerouslySetInnerHTML={{ __html: segment.content }} />;
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
            dangerouslySetInnerHTML={ segment.startsWith('<') ? {__html: segment} : undefined }
        >
            { !segment.startsWith('<') ? segment : null}
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

const ariaLabel = typeof children === 'string' ? children.replace(/<[^>]+>/g, '') : undefined;

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
key={`${per}-${index}-${typeof segment === 'string' ? segment : segment.content}`}
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
