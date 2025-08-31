import React from 'react';
import { cn } from "@/lib/utils"

const AnimatedGlowingTextArea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<'textarea'>>(
    ({ className, ...props }, ref) => {
  return (
    <div className="relative flex items-center justify-center w-full">
      <div className="absolute z-[-1] overflow-hidden h-full w-full rounded-xl blur-[3px] 
                      before:absolute before:content-[''] before:z-[-2] before:w-[999px] before:h-[999px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-60
                      before:bg-[conic-gradient(hsl(var(--primary-foreground)),hsl(var(--primary))_5%,hsl(var(--primary-foreground))_38%,hsl(var(--primary-foreground))_50%,hsl(var(--accent))_60%,hsl(var(--primary-foreground))_87%)] before:transition-all before:duration-2000
                      group-hover:before:rotate-[-120deg] group-focus-within:before:rotate-[420deg] group-focus-within:before:duration-[4000ms]">
      </div>
      <div className="absolute z-[-1] overflow-hidden h-full w-full rounded-xl blur-[3px] 
                      before:absolute before:content-[''] before:z-[-2] before:w-[600px] before:h-[600px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-[82deg]
                      before:bg-[conic-gradient(rgba(0,0,0,0),hsl(var(--primary)),rgba(0,0,0,0)_10%,rgba(0,0,0,0)_50%,hsl(var(--accent)),rgba(0,0,0,0)_60%)] before:transition-all before:duration-2000
                      group-hover:before:rotate-[-98deg] group-focus-within:before:rotate-[442deg] group-focus-within:before:duration-[4000ms]">
      </div>
      <div className="absolute z-[-1] overflow-hidden h-full w-full rounded-xl blur-[3px] 
                      before:absolute before:content-[''] before:z-[-2] before:w-[600px] before:h-[600px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-[82deg]
                      before:bg-[conic-gradient(rgba(0,0,0,0),hsl(var(--primary)),rgba(0,0,0,0)_10%,rgba(0,0,0,0)_50%,hsl(var(--accent)),rgba(0,0,0,0)_60%)] before:transition-all before:duration-2000
                      group-hover:before:rotate-[-98deg] group-focus-within:before:rotate-[442deg] group-focus-within:before:duration-[4000ms]">
      </div>
      <div className="absolute z-[-1] overflow-hidden h-full w-full rounded-xl blur-[3px] 
                      before:absolute before:content-[''] before:z-[-2] before:w-[600px] before:h-[600px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-[82deg]
                      before:bg-[conic-gradient(rgba(0,0,0,0),hsl(var(--primary)),rgba(0,0,0,0)_10%,rgba(0,0,0,0)_50%,hsl(var(--accent)),rgba(0,0,0,0)_60%)] before:transition-all before:duration-2000
                      group-hover:before:rotate-[-98deg] group-focus-within:before:rotate-[442deg] group-focus-within:before:duration-[4000ms]">
      </div>

      <div className="absolute z-[-1] overflow-hidden h-full w-full rounded-lg blur-[2px] 
                      before:absolute before:content-[''] before:z-[-2] before:w-[600px] before:h-[600px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-[83deg]
                      before:bg-[conic-gradient(rgba(0,0,0,0)_0%,hsl(var(--primary)),rgba(0,0,0,0)_8%,rgba(0,0,0,0)_50%,hsl(var(--accent)),rgba(0,0,0,0)_58%)] before:brightness-140
                      before:transition-all before:duration-2000 group-hover:before:rotate-[-97deg] group-focus-within:before:rotate-[443deg] group-focus-within:before:duration-[4000ms]">
      </div>

      <div className="absolute z-[-1] overflow-hidden h-full w-full rounded-xl blur-[0.5px] 
                      before:absolute before:content-[''] before:z-[-2] before:w-[600px] before:h-[600px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-70
                      before:bg-[conic-gradient(hsl(var(--background)),hsl(var(--primary))_5%,hsl(var(--background))_14%,hsl(var(--background))_50%,hsl(var(--accent))_60%,hsl(var(--background))_64%)] before:brightness-130
                      before:transition-all before:duration-2000 group-hover:before:rotate-[-110deg] group-focus-within:before:rotate-[430deg] group-focus-within:before:duration-[4000ms]">
      </div>

      <div className="relative group w-full">
        <textarea
            ref={ref}
            className={cn("bg-background/80 border-none w-full min-h-[120px] rounded-lg text-foreground px-4 py-3 text-base focus:outline-none placeholder:text-muted-foreground resize-none", className)}
            {...props}
         />
      </div>
    </div>
  );
});

AnimatedGlowingTextArea.displayName = 'AnimatedGlowingTextArea';


export { AnimatedGlowingTextArea };
