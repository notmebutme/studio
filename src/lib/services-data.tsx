import { Bot, Clapperboard, MonitorSmartphone, Voicemail, MessageCircle, Film, Sparkles, Target, Palette, Scale, Users, BrainCircuit, Repeat, Clock, Database, LineChart } from "lucide-react";
import { ReactNode } from "react";
import { ComparisonData } from "@/components/comparison-table";

export interface Service {
    slug: string;
    icon: ReactNode;
    title: string;
    description: string;
    detailedDescription: string;
    useCases: string[];
    keyFeatures: {
        icon: ReactNode;
        title: string;
        description: string;
    }[];
    howItWorks: {
        title: string;
        description: string;
    }[];
    comparison: ComparisonData;
    benefits: string[]; // Kept for backwards compatibility if needed, but new page doesn't use it.
}

export const servicesData: Service[] = [
  {
    slug: "ai-generated-content",
    icon: <Bot className="h-12 w-12" />,
    title: "AI-Generated Content",
    description: "Go beyond generic blog posts. We produce high-quality, SEO-optimized articles, social media updates, and website copy that resonates with your audience and establishes your brand as an authority. Scale your content engine without scaling your team.",
    detailedDescription: "Harness the power of advanced AI to produce high-quality, SEO-optimized articles, social media updates, and website copy. Our system understands your brand voice to create content that resonates with your target audience, establishing you as an industry authority.",
    useCases: [
        "Automated blog post and article creation.",
        "Engaging social media captions and updates.",
        "Compelling website copy and landing pages.",
        "Product descriptions that sell."
    ],
    keyFeatures: [
        { icon: <Sparkles className="h-8 w-8" />, title: "Brand Voice Alignment", description: "Our AI learns your unique brand tone, style, and messaging to ensure all generated content is perfectly on-brand." },
        { icon: <Target className="h-8 w-8" />, title: "SEO Optimization", description: "Integrated keyword research and optimization tools help your content rank higher in search engine results." },
        { icon: <Scale className="h-8 w-8" />, title: "Infinite Scalability", description: "Produce vast amounts of high-quality content in minutes, not weeks. Perfect for large-scale content strategies." },
        { icon: <LineChart className="h-8 w-8" />, title: "Data-Driven Insights", description: "Analyze content performance to understand what resonates with your audience and refine your strategy." },
    ],
    howItWorks: [
        { title: "Define Goals", description: "You provide a content brief, including topics, keywords, and target audience." },
        { title: "AI Generation", description: "Our platform generates multiple content drafts based on your input." },
        { title: "Review & Refine", description: "You review the content, provide feedback, and our AI makes instant revisions." },
    ],
    comparison: {
        headers: ["Feature", "Traditional Copywriting", "Intrix AI Content"],
        rows: [
            { feature: "Turnaround Time", traditional: "3-5 Business Days", intrix: "5-10 Minutes" },
            { feature: "Cost per 1000 words", traditional: "$100 - $500+", intrix: "Fraction of the cost" },
            { feature: "Revision Rounds", traditional: "Limited, Slow", intrix: "Unlimited, Instant" },
            { feature: "Scalability", traditional: "Depends on team size", intrix: "Virtually unlimited" },
        ]
    },
    benefits: ["Achieve higher search rankings with targeted SEO strategies.", "Maintain a consistent and engaging brand voice across all platforms.", "Generate weeks of content in a matter of hours, not days."],
  },
  {
    slug: "ai-generated-ads",
    icon: <Clapperboard className="h-12 w-12" />,
    title: "AI-Generated Ads",
    description: "Stop the guesswork. Our AI analyzes market trends to create a multitude of high-performing ad creatives tailored for any platform. Test hundreds of variations to find the perfect message that converts, all in a fraction of the time.",
    detailedDescription: "Move beyond guesswork. Our AI analyzes market trends and your performance data to generate a multitude of high-performing ad creatives. We produce visuals and copy tailored for any platform, enabling you to test hundreds of variations to find the perfect message that converts.",
    useCases: [
        "A/B testing ad copy and visuals at scale.",
        "Campaigns for social media (Facebook, Instagram, etc.).",
        "Display advertising banners.",
        "Video ad scripts and storyboards."
    ],
    keyFeatures: [
        { icon: <Palette className="h-8 w-8" />, title: "Multi-Platform Creatives", description: "Get ad variants perfectly formatted for Facebook, Instagram, TikTok, Google Ads, and more." },
        { icon: <BrainCircuit className="h-8 w-8" />, title: "Performance Prediction", description: "Our AI scores creative variations to predict performance before you spend a dime on ad buys." },
        { icon: <Repeat className="h-8 w-8" />, title: "Rapid Iteration", description: "Instantly generate new ad concepts and variations based on performance data from active campaigns." },
        { icon: <Users className="h-8 w-8" />, title: "Audience Targeting", description: "Generates ad copy specifically tailored to different audience segments for maximum relevance." },
    ],
    howItWorks: [
        { title: "Input Product Info", description: "Provide your product details, target audience, and campaign objectives." },
        { title: "Generate Variations", description: "Our AI creates hundreds of ad copy and visual combinations." },
        { title: "Launch & Optimize", description: "Deploy your ads and let our system automatically optimize for the best performers." },
    ],
    comparison: {
        headers: ["Feature", "Traditional Ad Agency", "Intrix AI Ads"],
        rows: [
            { feature: "Creative Development", traditional: "Weeks", intrix: "Hours" },
            { feature: "Number of Variants", traditional: "2-5 per campaign", intrix: "100+ per campaign" },
            { feature: "Cost", traditional: "High Retainer + Ad Spend %", intrix: "Flat, predictable fee" },
            { feature: "Optimization Speed", traditional: "Manual, weekly", intrix: "Automated, real-time" },
        ]
    },
    benefits: ["Rapidly A/B test dozens of ad variations to maximize ROI.", "Get creatives perfectly formatted for Facebook, Instagram, TikTok, and more.", "Track ad performance with our integrated analytics to make data-driven decisions."],
  },
  {
    slug: "ai-product-mockups",
    icon: <MonitorSmartphone className="h-12 w-12" />,
    title: "AI Product Mockups",
    description: "Say goodbye to expensive and time-consuming photoshoots. We can place your product in any environment or context imaginable, creating a library of stunning, realistic lifestyle images and mockups that drive sales.",
    detailedDescription: "Eliminate expensive and time-consuming photoshoots. Our AI can place your product in any environment or context imaginable, generating a massive library of stunning, realistic lifestyle images and professional mockups that are proven to drive sales.",
    useCases: [
        "E-commerce product listings.",
        "Social media lifestyle shots.",
        "Advertising and marketing campaigns.",
        "Website hero images."
    ],
    keyFeatures: [
        { icon: <Sparkles className="h-8 w-8" />, title: "Virtual Photoshoots", description: "Generate photorealistic images of your product in any setting without a physical camera." },
        { icon: <Palette className="h-8 w-8" />, title: "Contextual Backgrounds", description: "Place your product in a city, on a mountain, in a kitchen—anywhere you can imagine." },
        { icon: <Users className="h-8 w-8" />, title: "AI-Generated Models", description: "Include diverse, AI-generated human models to create relatable lifestyle scenes for your product." },
        { icon: <Repeat className="h-8 w-8" />, title: "Style Consistency", description: "Maintain a consistent look and feel across all your product imagery for a strong brand identity." },
    ],
    howItWorks: [
        { title: "Upload Product Image", description: "Provide a few clean images of your product from different angles." },
        { title: "Describe Scene", description: "Tell our AI the scene, setting, and style you want for your mockup." },
        { title: "Generate Mockups", description: "Receive a batch of high-resolution, ready-to-use product mockups." },
    ],
    comparison: {
        headers: ["Feature", "Traditional Photoshoot", "Intrix AI Mockups"],
        rows: [
            { feature: "Cost", traditional: "$2,000 - $10,000+", intrix: "Starts at $49" },
            { feature: "Time", traditional: "2-4 Weeks", intrix: "Under 30 Minutes" },
            { feature: "Location Limits", traditional: "Geographically bound", intrix: "None. Any location imaginable." },
            { feature: "Image Variety", traditional: "Limited by budget/time", intrix: "Virtually infinite" },
        ]
    },
    benefits: ["Showcase your product in countless realistic and aspirational settings.", "Customize every detail, from lighting and shadows to background environments.", "Generate entire campaigns of lifestyle imagery for a fraction of the cost of one photoshoot."],
  },
  {
    slug: "ai-cgi-ads",
    icon: <Film className="h-12 w-12" />,
    title: "AI CGI Ads",
    description: "Unleash limitless creativity with photorealistic CGI video ads. From creating fantastical worlds to showcasing complex products in impossible ways, our AI-powered CGI removes the constraints of physical shoots, at a significantly lower cost.",
    detailedDescription: "Unleash limitless creativity with photorealistic CGI video ads. Our AI-powered workflow allows for the creation of fantastical worlds and impossible scenarios, perfect for showcasing complex products or building unforgettable brand narratives without the high cost of traditional production.",
    useCases: [
        "Product demos with impossible physics.",
        "Brand storytelling in fantastical settings.",
        "High-impact social media video ads.",
        "Explainer videos for complex services."
    ],
    keyFeatures: [
        { icon: <Sparkles className="h-8 w-8" />, title: "Photorealistic Visuals", description: "Our AI rendering engine produces jaw-dropping, hyper-realistic visuals that capture attention." },
        { icon: <BrainCircuit className="h-8 w-8" />, title: "Physics-Defying Scenes", description: "Break free from the laws of physics and create any scene you can imagine to tell your story." },
        { icon: <Clock className="h-8 w-8" />, title: "Reduced Production Time", description: "Cut production costs and timelines by eliminating the need for physical sets, crews, and locations." },
        { icon: <Palette className="h-8 w-8" />, title: "On-Brand Asset Creation", description: "Generate custom 3D models and assets that perfectly align with your brand's aesthetic and guidelines." },
    ],
    howItWorks: [
        { title: "Storyboard & Script", description: "You provide the creative concept, script, and storyboard for the ad." },
        { title: "AI Scene Generation", description: "Our artists use AI to generate and compose the 3D assets and environments." },
        { title: "Animation & Rendering", description: "We animate the scene and render the final video in high-resolution." },
    ],
    comparison: {
        headers: ["Feature", "Traditional CGI Studio", "Intrix AI CGI"],
        rows: [
            { feature: "Cost per Minute", traditional: "$10,000 - $100,000+", intrix: "Significantly lower fixed price" },
            { feature: "Timeline", traditional: "2-6 Months", intrix: "1-3 Weeks" },
            { feature: "Creative Flexibility", traditional: "High, but costly changes", intrix: "High, with fast iterations" },
            { feature: "Overhead", traditional: "Large crews, expensive hardware", intrix: "Lean, AI-augmented team" },
        ]
    },
    benefits: ["Produce jaw-dropping, hyper-realistic visuals that capture attention.", "Break free from the laws of physics and create any scene you can imagine.", "Cut production costs and timelines by eliminating the need for physical sets and crews."],
  },
  {
    slug: "ai-voice-agent",
    icon: <Voicemail className="h-12 w-12" />,
    title: "AI Voice Agent",
    description: "Transform your customer service with a human-like AI voice agent. Our agents can handle inbound and outbound calls 24/7, providing support, answering queries, and even closing sales with natural, conversational language.",
    detailedDescription: "Elevate your customer service with a sophisticated, human-like AI voice agent. Our agents handle inbound and outbound calls 24/7, providing world-class support, answering complex queries, and even closing sales with natural, emotionally-aware conversational language.",
    useCases: [
        "24/7 customer support and helpdesk.",
        "Automated appointment scheduling.",
        "Outbound sales and lead qualification.",
        "Order status and information lookup."
    ],
    keyFeatures: [
        { icon: <Users className="h-8 w-8" />, title: "Human-like Conversation", description: "Our agents understand context, handle interruptions, and use natural intonation." },
        { icon: <BrainCircuit className="h-8 w-8" />, title: "Complex Task Handling", description: "Integrates with your existing systems to perform tasks like booking, ordering, and account management." },
        { icon: <Database className="h-8 w-8" />, title: "CRM Integration", description: "Automatically logs call details, transcripts, and outcomes into your CRM (e.g., Salesforce, HubSpot)." },
        { icon: <Repeat className="h-8 w-8" />, title: "Continuous Learning", description: "The agent improves over time by learning from every interaction, increasing its accuracy and effectiveness." },
    ],
    howItWorks: [
        { title: "Define Tasks", description: "We work with you to define the goals and conversation flows for your voice agent." },
        { title: "Integration", description: "We connect the agent to your phone systems and backend databases or APIs." },
        { title: "Train & Deploy", description: "The agent is trained on your specific data and deployed to handle live calls." },
    ],
    comparison: {
        headers: ["Feature", "Human Call Center", "Intrix AI Voice Agent"],
        rows: [
            { feature: "Availability", traditional: "Business Hours", intrix: "24/7/365" },
            { feature: "Cost per Call", traditional: "$5 - $15", intrix: "Pennies per minute" },
            { feature: "Scalability", traditional: "Limited by hiring", intrix: "Instantly scalable" },
            { feature: "Consistency", traditional: "Variable", intrix: "100% consistent quality" },
        ]
    },
    benefits: ["Provide instant, round-the-clock customer support without hiring more staff.", "Communicate with your global customer base in their native language.", "Dramatically reduce customer wait times and improve satisfaction."],
  },
  {
    slug: "ai-chatbot",
    icon: <MessageCircle className="h-12 w-12" />,
    title: "AI Chatbot",
    description: "Deploy an intelligent, context-aware chatbot on your website to engage visitors, answer questions, and capture leads. Our chatbots provide instant, accurate responses and can seamlessly hand off complex inquiries to your human team.",
    detailedDescription: "Deploy an intelligent, context-aware chatbot on your website, Slack, or Discord to engage visitors, answer questions, and capture leads. Our chatbots provide instant, accurate responses and can seamlessly hand off complex inquiries to your human team when necessary.",
    useCases: [
        "Instant website lead capture.",
        "First-line customer support.",
        "Onboarding new users or employees.",
        "Internal knowledge base for teams."
    ],
    keyFeatures: [
        { icon: <BrainCircuit className="h-8 w-8" />, title: "Knowledge Base Integration", description: "Train your chatbot on your own documents, websites, and databases for accurate answers." },
        { icon: <Users className="h-8 w-8" />, title: "Seamless Handoff", description: "Intelligently routes conversations to the correct human agent when a query requires a personal touch." },
        { icon: <Sparkles className="h-8 w-8" />, title: "Proactive Engagement", description: "Initiates conversations with website visitors based on their behavior to increase engagement and leads." },
        { icon: <LineChart className="h-8 w-8" />, title: "Analytics Dashboard", description: "Track conversation metrics, user satisfaction, and common queries to improve your support." },
    ],
    howItWorks: [
        { title: "Connect Data", description: "You provide your knowledge base (documents, website link) for the chatbot to learn." },
        { title: "Customize Behavior", description: "Define the chatbot's personality, goals, and rules for when to hand off to a human." },
        { title: "Deploy Anywhere", description: "Embed the chatbot on your website with a simple copy-paste snippet or add to Slack/Discord." },
    ],
    comparison: {
        headers: ["Feature", "Basic Chatbot", "Intrix AI Chatbot"],
        rows: [
            { feature: "Context Awareness", traditional: "Follows rigid script", intrix: "Understands conversation history" },
            { feature: "Knowledge Source", traditional: "Pre-programmed answers", intrix: "Learns from your documents" },
            { feature: "Integration", traditional: "Limited or none", intrix: "Deep CRM/API integration" },
            { feature: "Lead Quality", traditional: "Low, unverified", intrix: "High, qualified leads" },
        ]
    },
    benefits: ["Deliver instant answers to customer questions, 24/7.", "Automatically qualify and capture leads directly from your website.", "Ensure a smooth customer experience with intelligent routing to human agents when needed."],
  }
];
