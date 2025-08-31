import { TestimonialsSection } from "@/components/blocks/testimonials-with-marquee"


const testimonials = [
{
author: {
name: "Emma Thompson",
handle: "@emmaai",
avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
},
text: "Using Intrix AI has transformed how we handle content creation. The speed and quality are unprecedented.",
href: "https://twitter.com/emmaai"
},
{
author: {
name: "David Park",
handle: "@davidtech",
avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
},
text: "The API integration is flawless. We've reduced our ad creation time by 60% since implementing this solution.",
href: "https://twitter.com/davidtech"
},
{
author: {
name: "Sofia Rodriguez",
handle: "@sofiaml",
avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
},
text: "Finally, an AI tool that actually understands our brand voice! The accuracy in generating on-brand content is impressive."
},
{
author: {
name: "Michael Chen",
handle: "@mikechen",
avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop&crop=face"
},
text: "The product mockups are unbelievably realistic. It's saved us thousands on expensive photoshoots."
},
{
author: {
name: "Laura Evans",
handle: "@laura_e",
avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop&crop=face"
},
text: "As a small business, Intrix AI has been a game-changer. We can now compete with much larger companies on content quality."
}
]

export function Testimonials() {
return (
<TestimonialsSection
title="Trusted by innovators worldwide"
description="Join thousands of creators and marketers who are already building the future with Intrix AI."
testimonials={testimonials}
/>
)
}
