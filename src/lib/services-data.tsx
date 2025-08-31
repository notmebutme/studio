
import { Bot, Clapperboard, MonitorSmartphone, Voicemail, MessageCircle, Film } from "lucide-react";
import { ReactNode } from "react";

export interface Service {
    slug: string;
    icon: ReactNode;
    title: string;
    description: string;
    benefits: string[];
}

export const servicesData: Service[] = [
  {
    slug: "ai-generated-content",
    icon: <Bot className="h-12 w-12" />,
    title: "AI-Generated Content",
    description: "Go beyond generic blog posts. We produce high-quality, SEO-optimized articles, social media updates, and website copy that resonates with your audience and establishes your brand as an authority. Scale your content engine without scaling your team.",
    benefits: ["Achieve higher search rankings with targeted SEO strategies.", "Maintain a consistent and engaging brand voice across all platforms.", "Generate weeks of content in a matter of hours, not days."],
  },
  {
    slug: "ai-generated-ads",
    icon: <Clapperboard className="h-12 w-12" />,
    title: "AI-Generated Ads",
    description: "Stop the guesswork. Our AI analyzes market trends to create a multitude of high-performing ad creatives tailored for any platform. Test hundreds of variations to find the perfect message that converts, all in a fraction of the time.",
    benefits: ["Rapidly A/B test dozens of ad variations to maximize ROI.", "Get creatives perfectly formatted for Facebook, Instagram, TikTok, and more.", "Track ad performance with our integrated analytics to make data-driven decisions."],
  },
  {
    slug: "ai-product-mockups",
    icon: <MonitorSmartphone className="h-12 w-12" />,
    title: "AI Product Mockups",
    description: "Say goodbye to expensive and time-consuming photoshoots. We can place your product in any environment or context imaginable, creating a library of stunning, realistic lifestyle images and mockups that drive sales.",
    benefits: ["Showcase your product in countless realistic and aspirational settings.", "Customize every detail, from lighting and shadows to background environments.", "Generate entire campaigns of lifestyle imagery for a fraction of the cost of one photoshoot."],
  },
  {
    slug: "ai-cgi-ads",
    icon: <Film className="h-12 w-12" />,
    title: "AI CGI Ads",
    description: "Unleash limitless creativity with photorealistic CGI video ads. From creating fantastical worlds to showcasing complex products in impossible ways, our AI-powered CGI removes the constraints of physical shoots, at a significantly lower cost.",
    benefits: ["Produce jaw-dropping, hyper-realistic visuals that capture attention.", "Break free from the laws of physics and create any scene you can imagine.", "Cut production costs and timelines by eliminating the need for physical sets and crews."],
  },
  {
    slug: "ai-voice-agent",
    icon: <Voicemail className="h-12 w-12" />,
    title: "AI Voice Agent",
    description: "Transform your customer service with a human-like AI voice agent. Our agents can handle inbound and outbound calls 24/7, providing support, answering queries, and even closing sales with natural, conversational language.",
    benefits: ["Provide instant, round-the-clock customer support without hiring more staff.", "Communicate with your global customer base in their native language.", "Dramatically reduce customer wait times and improve satisfaction."],
  },
  {
    slug: "ai-chatbot",
    icon: <MessageCircle className="h-12 w-12" />,
    title: "AI Chatbot",
    description: "Deploy an intelligent, context-aware chatbot on your website to engage visitors, answer questions, and capture leads. Our chatbots provide instant, accurate responses and can seamlessly hand off complex inquiries to your human team.",
    benefits: ["Deliver instant answers to customer questions, 24/7.", "Automatically qualify and capture leads directly from your website.", "Ensure a smooth customer experience with intelligent routing to human agents when needed."],
  }
];
