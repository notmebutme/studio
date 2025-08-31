import { cn } from "@/lib/utils"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

export interface TestimonialAuthor {
name: string
handle: string
avatar: string
}

export interface TestimonialCardProps {
author: TestimonialAuthor
text: string
href?: string
className?: string
}

export function TestimonialCard({
author,
text,
href,
className
}: TestimonialCardProps) {
const Card = href ? 'a' : 'div'

return (
<Card
{...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
className={cn(
"flex flex-col rounded-lg border",
"border-primary/20 bg-card/80",
"p-4 text-start sm:p-6",
"hover:border-primary/40",
"max-w-[320px] sm:max-w-[320px]",
"transition-colors duration-300",
"glow-shadow",
className
)}
>
<div className="flex items-center gap-3">
<Avatar className="h-12 w-12 border-2 border-primary/50">
<AvatarImage src={author.avatar} alt={author.name} />
</Avatar>
<div className="flex flex-col items-start">
<h3 className="text-md font-semibold leading-none">
{author.name}
</h3>
<p className="text-sm text-muted-foreground">
{author.handle}
</p>
</div>
</div>
<p className="sm:text-md mt-4 text-sm text-foreground/80">
{text}
</p>
</Card>
)
}
