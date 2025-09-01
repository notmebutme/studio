
import { Bot, Clapperboard, MonitorSmartphone, Voicemail, MessageCircle, Film, Sparkles, Target, Palette, Scale, Users, BrainCircuit, Repeat, Clock, Database, LineChart } from "lucide-react";
import { ReactNode } from "react";
import { ComparisonData } from "@/components/comparison-table";

interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

const defaultPricingPlans: PricingPlan[] = [
    {
        name: "STARTER",
        price: "50",
        yearlyPrice: "40",
        period: "per month",
        features: [
            "Up to 1,000 interactions/mo",
            "Basic conversation flows",
            "Website widget integration",
            "48-hour support response time",
        ],
        description: "Perfect for individuals and small projects",
        buttonText: "Start Free Trial",
        href: "/#booking",
        isPopular: false,
    },
    {
        name: "PROFESSIONAL",
        price: "99",
        yearlyPrice: "79",
        period: "per month",
        features: [
            "Up to 5,000 interactions/mo",
            "Advanced conversation flows with conditional logic",
            "CRM & multi-platform integration",
            "Priority support",
            "Basic analytics dashboard"
        ],
        description: "Ideal for growing teams and businesses",
        buttonText: "Get Started",
        href: "/#booking",
        isPopular: true,
    },
    {
        name: "ENTERPRISE",
        price: "299",
        yearlyPrice: "239",
        period: "per month",
        features: [
            "Unlimited interactions",
            "Custom-built conversation flows",
            "Dedicated account manager",
            "1-hour support response time & SLAs",
            "Advanced security & compliance",
        ],
        description: "For large organizations with specific needs",
        buttonText: "Contact Sales",
        href: "/#booking",
        isPopular: false,
    },
];

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
    demo: {
      title: string;
      traditionalImg: string;
      aiImg: string;
      traditionalHint: string;
      aiHint: string;
    };
    pricingPlans?: PricingPlan[];
}

export const servicesData: Service[] = [
  {
    slug: "ai-generated-content",
    icon: <Bot className="h-6 w-6 md:h-8 md:w-8" />,
    title: "AI-Generated Content",
    description: "High-quality, SEO-optimized articles, social media updates, and website copy that establishes you as an industry leader.",
    detailedDescription: "Scale your content engine without scaling your team. Our AI produces premium, SEO-optimized content that resonates with your audience and builds brand authority.",
    useCases: [
        "Automated blog post and article creation.",
        "Engaging social media captions and updates.",
        "Compelling website copy and landing pages.",
        "Product descriptions that sell."
    ],
    keyFeatures: [
        { icon: <Sparkles className="h-6 w-6 md:h-8 md:w-8" />, title: "Brand Voice Alignment", description: "Our AI learns your unique brand tone to ensure all generated content is perfectly on-brand." },
        { icon: <Target className="h-6 w-6 md:h-8 md:w-8" />, title: "SEO Optimization", description: "Integrated keyword research helps your content rank higher in search engine results." },
        { icon: <Scale className="h-6 w-6 md:h-8 md:w-8" />, title: "Infinite Scalability", description: "Produce vast amounts of high-quality content in minutes, not weeks." },
        { icon: <LineChart className="h-6 w-6 md:h-8 md:w-8" />, title: "Data-Driven Insights", description: "Analyze content performance to understand what resonates and refine your strategy." },
    ],
    howItWorks: [
        { title: "Define Goals", description: "Provide a content brief, topics, and keywords." },
        { title: "AI Generation", description: "Our platform generates multiple content drafts." },
        { title: "Review & Refine", description: "Review the content, provide feedback for instant revisions." },
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
    demo: {
        title: "Content & Copy Generation",
        traditionalImg: "https://picsum.photos/seed/tradcontent/800/600",
        aiImg: "https://picsum.photos/seed/aicontent/800/600",
        traditionalHint: "person writing",
        aiHint: "glowing text"
    }
  },
  {
    slug: "ai-generated-ads",
    icon: <Clapperboard className="h-6 w-6 md:h-8 md:w-8" />,
    title: "AI-Generated Ads",
    description: "Stop the guesswork. We analyze market trends to create hundreds of high-performing ad creatives that are guaranteed to convert.",
    detailedDescription: "Launch campaigns in hours, not months. Our AI generates and tests hundreds of ad variations to find the perfect message that converts, maximizing your ROI.",
    useCases: [
        "A/B testing ad copy and visuals at scale.",
        "Campaigns for social media (Facebook, Instagram, etc.).",
        "Display advertising banners.",
        "Video ad scripts and storyboards."
    ],
    keyFeatures: [
        { icon: <Palette className="h-6 w-6 md:h-8 md:w-8" />, title: "Multi-Platform Creatives", description: "Get ad variants perfectly formatted for all major social and search platforms." },
        { icon: <BrainCircuit className="h-6 w-6 md:h-8 md:w-8" />, title: "Performance Prediction", description: "Our AI scores creative variations to predict performance before you spend a dime." },
        { icon: <Repeat className="h-6 w-6 md:h-8 md:w-8" />, title: "Rapid Iteration", description: "Instantly generate new ad concepts based on real-time campaign performance data." },
        { icon: <Users className="h-6 w-6 md:h-8 md:w-8" />, title: "Audience Targeting", description: "Generates ad copy tailored to different audience segments for maximum relevance." },
    ],
    howItWorks: [
        { title: "Input Product Info", description: "Provide product details, audience, and campaign goals." },
        { title: "Generate Variations", description: "Our AI creates hundreds of ad copy and visual combinations." },
        { title: "Launch & Optimize", description: "Deploy ads and let our system automatically optimize for the best performers." },
    ],
    comparison: {
        headers: ["Feature", "Traditional Ad Agency", "Intrix AI Ads"],
        rows: [
            { feature: "Creative Development", traditional: "Weeks", intrix: "Hours" },
            { feature: "Number of Variants", traditional: "2-5 per campaign", intrix: "100+ per campaign" },
            { feature: "Cost", traditional: "High Retainer + %", intrix: "Flat, predictable fee" },
            { feature: "Optimization Speed", traditional: "Manual, weekly", intrix: "Automated, real-time" },
        ]
    },
    demo: {
        title: "AI-Generated Ad Creatives",
        traditionalImg: "https://picsum.photos/seed/tradad/800/600",
        aiImg: "https://picsum.photos/seed/aiad/800/600",
        traditionalHint: "billboard city",
        aiHint: "futuristic ad"
    }
  },
  {
    slug: "ai-product-mockups",
    icon: <MonitorSmartphone className="h-6 w-6 md:h-8 md:w-8" />,
    title: "AI Product Mockups",
    description: "Forget expensive photoshoots. We place your product in any environment imaginable, creating stunning, realistic lifestyle images.",
    detailedDescription: "Generate a massive library of stunning, realistic lifestyle images and professional mockups without a single photoshoot. Place your product in any context to drive sales.",
    useCases: [
        "E-commerce product listings.",
        "Social media lifestyle shots.",
        "Advertising and marketing campaigns.",
        "Website hero images."
    ],
    keyFeatures: [
        { icon: <Sparkles className="h-6 w-6 md:h-8 md:w-8" />, title: "Virtual Photoshoots", description: "Generate photorealistic images of your product in any setting, no camera required." },
        { icon: <Palette className="h-6 w-6 md:h-8 md:w-8" />, title: "Contextual Backgrounds", description: "Place your product in a city, on a mountain, or in a kitchen—anywhere you can imagine." },
        { icon: <Users className="h-6 w-6 md:h-8 md:w-8" />, title: "AI-Generated Models", description: "Include diverse, AI-generated human models to create relatable lifestyle scenes." },
        { icon: <Repeat className="h-6 w-6 md:h-8 md:w-8" />, title: "Style Consistency", description: "Maintain a consistent visual identity across all your product imagery." },
    ],
    howItWorks: [
        { title: "Upload Product Image", description: "Provide a few clean images of your product." },
        { title: "Describe Scene", description: "Tell our AI the scene, setting, and style you want." },
        { title: "Generate Mockups", description: "Receive a batch of high-resolution, ready-to-use mockups." },
    ],
    comparison: {
        headers: ["Feature", "Traditional Photoshoot", "Intrix AI Mockups"],
        rows: [
            { feature: "Cost", traditional: "$2,000 - $10,000+", intrix: "Starts at $49" },
            { feature: "Time", traditional: "2-4 Weeks", intrix: "Under 30 Minutes" },
            { feature: "Location Limits", traditional: "Geographically bound", intrix: "None. Any location." },
            { feature: "Image Variety", traditional: "Limited by budget", intrix: "Virtually infinite" },
        ]
    },
    demo: {
        title: "AI-Enhanced Product Mockups",
        traditionalImg: "https://picsum.photos/seed/tradmockup/800/600",
        aiImg: "https://picsum.photos/seed/aimockup/800/600",
        traditionalHint: "product studio",
        aiHint: "product lifestyle"
    }
  },
  {
    slug: "ai-cgi-ads",
    icon: <Film className="h-6 w-6 md:h-8 md:w-8" />,
    title: "AI CGI Ads",
    description: "Create photorealistic CGI video ads. From fantastical worlds to impossible product demos, our AI removes the constraints of reality.",
    detailedDescription: "Unleash limitless creativity with photorealistic CGI video ads. Our AI-powered workflow builds unforgettable brand narratives without the high cost of traditional production.",
    useCases: [
        "Product demos with impossible physics.",
        "Brand storytelling in fantastical settings.",
        "High-impact social media video ads.",
        "Explainer videos for complex services."
    ],
    keyFeatures: [
        { icon: <Sparkles className="h-6 w-6 md:h-8 md:w-8" />, title: "Photorealistic Visuals", description: "Our AI rendering engine produces jaw-dropping, hyper-realistic visuals." },
        { icon: <BrainCircuit className="h-6 w-6 md:h-8 md:w-8" />, title: "Physics-Defying Scenes", description: "Break free from the laws of physics to create any scene you can imagine." },
        { icon: <Clock className="h-6 w-6 md:h-8 md:w-8" />, title: "Reduced Production Time", description: "Eliminate the need for physical sets, crews, and locations, cutting costs and time." },
        { icon: <Palette className="h-6 w-6 md:h-8 md:w-8" />, title: "On-Brand Asset Creation", description: "Generate custom 3D models and assets that align with your brand's aesthetic." },
    ],
    howItWorks: [
        { title: "Storyboard & Script", description: "Provide the creative concept, script, and storyboard." },
        { title: "AI Scene Generation", description: "Our artists use AI to generate and compose 3D assets." },
        { title: "Animation & Rendering", description: "We animate the scene and render the final video." },
    ],
    comparison: {
        headers: ["Feature", "Traditional CGI Studio", "Intrix AI CGI"],
        rows: [
            { feature: "Cost per Minute", traditional: "$10,000 - $100,000+", intrix: "Lower fixed price" },
            { feature: "Timeline", traditional: "2-6 Months", intrix: "1-3 Weeks" },
            { feature: "Creative Flexibility", traditional: "High, but costly changes", intrix: "High, with fast iterations" },
            { feature: "Overhead", traditional: "Large crews, hardware", intrix: "Lean, AI-augmented team" },
        ]
    },
    demo: {
        title: "AI-Generated CGI Scenes",
        traditionalImg: "https://picsum.photos/seed/tradcgi/800/600",
        aiImg: "https://picsum.photos/seed/aicgi/800/600",
        traditionalHint: "film set",
        aiHint: "alien planet"
    }
  },
  {
    slug: "ai-voice-agent",
    icon: <Voicemail className="h-6 w-6 md:h-8 md:w-8" />,
    title: "AI Voice Agent",
    description: "A human-like AI voice agent to handle calls 24/7. It provides support, answers queries, and even closes sales.",
    detailedDescription: "Elevate your customer service with a sophisticated, human-like AI voice agent. Our agents handle calls 24/7, providing world-class support with natural, conversational language.",
    useCases: [
        "24/7 customer support and helpdesk.",
        "Automated appointment scheduling.",
        "Outbound sales and lead qualification.",
        "Order status and information lookup."
    ],
    keyFeatures: [
        { icon: <Users className="h-6 w-6 md:h-8 md:w-8" />, title: "Human-like Conversation", description: "Our agents understand context, handle interruptions, and use natural intonation." },
        { icon: <BrainCircuit className="h-6 w-6 md:h-8 md:w-8" />, title: "Complex Task Handling", description: "Integrates with your systems to perform tasks like booking, ordering, and account management." },
        { icon: <Database className="h-6 w-6 md:h-8 md:w-8" />, title: "CRM Integration", description: "Automatically logs call details, transcripts, and outcomes into your existing CRM." },
        { icon: <Repeat className="h-6 w-6 md:h-8 md:w-8" />, title: "Continuous Learning", description: "The agent improves over time by learning from every single interaction." },
    ],
    howItWorks: [
        { title: "Define Tasks", description: "We work with you to define goals and conversation flows." },
        { title: "Integration", description: "We connect the agent to your phone systems and backend APIs." },
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
    demo: {
        title: "AI Voice Agent Interaction",
        traditionalImg: "https://picsum.photos/seed/tradcall/800/600",
        aiImg: "https://picsum.photos/seed/aicall/800/600",
        traditionalHint: "call center",
        aiHint: "sound wave"
    },
    pricingPlans: defaultPricingPlans,
  },
  {
    slug: "ai-chatbot",
    icon: <MessageCircle className="h-6 w-6 md:h-8 md:w-8" />,
    title: "AI Chatbot",
    description: "An intelligent chatbot to engage visitors, answer questions, and capture leads, with seamless hand-off to your human team.",
    detailedDescription: "Deploy an intelligent chatbot on your website, Slack, or Discord. Our bots provide instant, accurate answers and can seamlessly hand off complex inquiries to your team.",
    useCases: [
        "Instant website lead capture.",
        "First-line customer support.",
        "Onboarding new users or employees.",
        "Internal knowledge base for teams."
    ],
    keyFeatures: [
        { icon: <BrainCircuit className="h-6 w-6 md:h-8 md-w-8" />, title: "Knowledge Base Integration", description: "Train your chatbot on your own documents and websites for accurate answers." },
        { icon: <Users className="h-6 w-6 md:h-8 md:w-8" />, title: "Seamless Handoff", description: "Intelligently routes conversations to the correct human agent when needed." },
        { icon: <Sparkles className="h-6 w-6 md:h-8 md:w-8" />, title: "Proactive Engagement", description: "Initiates conversations with website visitors based on their behavior to increase leads." },
        { icon: <LineChart className="h-6 w-6 md:h-8 md:w-8" />, title: "Analytics Dashboard", description: "Track conversation metrics, user satisfaction, and common queries to improve support." },
    ],
    howItWorks: [
        { title: "Connect Data", description: "Provide your knowledge base for the chatbot to learn." },
        { title: "Customize Behavior", description: "Define the chatbot's personality, goals, and handoff rules." },
        { title: "Deploy Anywhere", description: "Embed the chatbot on your website or add to Slack/Discord." },
    ],
    comparison: {
        headers: ["Feature", "Basic Chatbot", "Intrix AI Chatbot"],
        rows: [
            { feature: "Context Awareness", traditional: "Follows rigid script", intrix: "Understands conversation" },
            { feature: "Knowledge Source", traditional: "Pre-programmed", intrix: "Learns from your documents" },
            { feature: "Integration", traditional: "Limited or none", intrix: "Deep CRM/API integration" },
            { feature: "Lead Quality", traditional: "Low, unverified", intrix: "High, qualified leads" },
        ]
    },
    demo: {
        title: "AI Chatbot Conversation",
        traditionalImg: "https://picsum.photos/seed/tradchat/800/600",
        aiImg: "https://picsum.photos/seed/aichat/800/600",
        traditionalHint: "customer service",
        aiHint: "chat bubbles"
    },
    pricingPlans: defaultPricingPlans,
  }
];
