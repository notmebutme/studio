
"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { GlowingEffect } from "./glowing-effect";


export interface BentoItem {
    title: string;
    description: string;
    icon: React.ReactNode;
    status?: string;
    tags?: string[];
    meta?: string;
    cta?: string;
    colSpan?: number;
    hasPersistentHover?: boolean;
    href?: string;
}

interface BentoGridProps {
    items: BentoItem[];
}


function BentoGrid({ items }: BentoGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 max-w-7xl mx-auto">
            {items.map((item, index) => (
                <div key={index} className={cn(
                    "relative rounded-[1.25rem] p-0.5 md:rounded-[1.5rem]", // Adjusted padding for border
                    item.colSpan ? `md:col-span-${item.colSpan}` : "",
                )}>
                    <GlowingEffect
                        spread={40}
                        glow={true}
                        disabled={false}
                        proximity={64}
                        inactiveZone={0.01}
                        borderWidth={1} // Use a smaller border width for the effect
                    />
                    <Link
                        href={item.href || '#'}
                        className={cn(
                            "group relative p-6 rounded-xl overflow-hidden transition-all duration-300 h-full flex flex-col",
                            "bg-white/95 dark:bg-black/95", // Slightly less transparent
                            "hover:shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:hover:shadow-[0_2px_12px_rgba(255,255,255,0.03)]",
                            "hover:-translate-y-0.5 will-change-transform",
                            {
                                "shadow-[0_2px_12px_rgba(0,0,0,0.03)] -translate-y-0.5":
                                    item.hasPersistentHover,
                                "dark:shadow-[0_2px_12px_rgba(255,255,255,0.03)]":
                                    item.hasPersistentHover,
                            }
                        )}
                    >
                        <div
                            className={`absolute inset-0 ${
                                item.hasPersistentHover
                                    ? "opacity-100"
                                    : "opacity-0 group-hover:opacity-100"
                            } transition-opacity duration-300`}
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:4px_4px]" />
                        </div>

                        <div className="relative flex flex-col space-y-3 h-full">
                            <div className="flex items-center justify-between">
                                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-black/5 dark:bg-white/10 group-hover:bg-gradient-to-br from-primary/20 to-accent/20 transition-all duration-300 text-primary">
                                    {item.icon}
                                </div>
                                {item.status && <span
                                    className={cn(
                                        "text-xs font-medium px-2 py-1 rounded-lg backdrop-blur-sm",
                                        "bg-black/5 dark:bg-white/10 text-gray-600 dark:text-gray-300",
                                        "transition-colors duration-300 group-hover:bg-black/10 dark:group-hover:bg-white/20"
                                    )}
                                >
                                    {item.status}
                                </span>}
                            </div>

                            <div className="space-y-2 flex-grow">
                                <h3 className="font-medium text-gray-900 dark:text-gray-100 tracking-tight text-[15px]">
                                    {item.title}
                                    {item.meta && <span className="ml-2 text-xs text-gray-500 dark:text-gray-400 font-normal">
                                        {item.meta}
                                    </span>}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 leading-snug font-[425]">
                                    {item.description}
                                </p>
                            </div>

                            <div className="flex items-center justify-between mt-auto">
                                <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                                    {item.tags?.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 rounded-md bg-black/5 dark:bg-white/10 backdrop-blur-sm transition-all duration-200 hover:bg-black/10 dark:hover:bg-white/20"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                                <span className="text-xs text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                    {item.cta || "Explore →"}
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export { BentoGrid }
