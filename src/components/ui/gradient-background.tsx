'use client';
import type React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type GradientBackgroundProps = React.ComponentProps<'div'> & {
	// Animation customization
	gradients?: string[];
	animationDuration?: number;
	animationDelay?: number;

	// Layout customization
	enableCenterContent?: boolean;

	// Visual customization
	overlay?: boolean;
	overlayOpacity?: number;
};

const Default_Gradients = [
    "linear-gradient(135deg, hsl(var(--primary)/0.2) 0%, hsl(var(--accent)/0.2) 100%)",
    "linear-gradient(135deg, hsl(var(--accent)/0.2) 0%, hsl(var(--secondary)/0.2) 100%)",
    "linear-gradient(135deg, hsl(var(--secondary)/0.2) 0%, hsl(var(--primary)/0.2) 100%)",
    "linear-gradient(135deg, hsl(var(--primary)/0.2) 0%, hsl(var(--accent)/0.2) 100%)",
  ]

export function GradientBackground({
	children,
	className = '',
	gradients = Default_Gradients,
	animationDuration = 15,
	animationDelay = 0,
	overlay = true,
	overlayOpacity = 0.1,
}: GradientBackgroundProps) {
	return (
		<div className={cn('w-full relative', className)}>
			{/* Animated gradient background */}
			<motion.div
				className="absolute inset-0"
				style={{ background: gradients[0] }}
				animate={{ background: gradients }}
				transition={{
					delay: animationDelay,
					duration: animationDuration,
					repeat: Number.POSITIVE_INFINITY,
					ease: 'easeInOut',
				}}
			/>

			{/* Optional overlay */}
			{overlay && (
				<div
					className="absolute inset-0 bg-black"
					style={{ opacity: overlayOpacity }}
				/>
			)}

			{/* Content wrapper */}
			{children && (
				<div
					className={cn(
						'relative z-10',
					)}
				>
					{children}
				</div>
			)}
		</div>
	);
}
