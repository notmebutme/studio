
"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { GlowCard } from "./spotlight-card";


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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto">
            {items.map((item, index) => (
                 <GlowCard key={index} className={cn("p-0", `col-span-1`)} glowColor="purple" customSize={true}>
                    <Link
                        href={item.href || '#'}
                        className={cn(
                            "group relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl p-2 md:p-6 shadow-sm",
                            "hover:-translate-y-0.5 will-change-transform transition-transform duration-300",
                            {
                                "shadow-[0_2px_12px_rgba(0,0,0,0.03)] -translate-y-0.5":
                                    item.hasPersistentHover,
                                "dark:shadow-[0_2px_12px_rgba(255,255,255,0.03)]":
                                    item.hasPersistentHover,
                            }
                        )}
                    >
                            <div className="relative flex flex-1 flex-col items-center justify-center text-center gap-3">
                            <div className="flex items-center justify-between">
                                <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2 text-primary">
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
                            <div className="space-y-1">
                                <h3 className="pt-0.5 text-sm md:text-xl font-semibold font-sans tracking-tight text-balance text-foreground">
                                    {item.title}
                                </h3>
                                <p className="hidden md:block font-sans text-sm leading-normal text-muted-foreground">
                                    {item.description}
                                </p>
                            </div>
                                <div className="hidden md:flex items-center justify-between mt-auto">
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
                </GlowCard>
            ))}
        </div>
    );
}

export { BentoGrid }
