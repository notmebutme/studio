

import { Bot, Clapperboard, MonitorSmartphone, Film, Sparkles, Target, Palette, Scale, Users, BrainCircuit, Repeat, Clock, Database, LineChart, PhoneCall, MessagesSquare } from "lucide-react";
import { ReactNode } from "react";
import { ComparisonData } from "@/components/comparison-table";
import { PricingCardProps } from "@/components/ui/animated-glassy-pricing";

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
    pricingPlans?: PricingPlan[] | PricingCardProps[];
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
    icon: <PhoneCall className="h-6 w-6 md:h-8 md:w-8" />,
    title: "AI Voice Agent",
    description: "Automate customer support with a 24/7 AI voice agent that understands and responds with natural, human-like conversation.",
    detailedDescription: "Revolutionize your customer service with an intelligent AI voice agent. Handle calls 24/7, answer queries, book appointments, and escalate complex issues, all with a natural, conversational tone.",
    useCases: [
        "24/7 inbound and outbound customer support.",
        "Automated appointment scheduling and reminders.",
        "Lead qualification and follow-up calls.",
        "Surveys and customer feedback collection."
    ],
    keyFeatures: [
        { icon: <Sparkles className="h-6 w-6 md:h-8 md:w-8" />, title: "Natural Conversation", description: "Engages customers with fluid, human-like dialogue, not robotic menus." },
        { icon: <BrainCircuit className="h-6 w-6 md:h-8 md:w-8" />, title: "Intelligent Call Routing", description: "Seamlessly transfers calls to human agents when necessary, with full context." },
        { icon: <Database className="h-6 w-6 md:h-8 md:w-8" />, title: "CRM Integration", description: "Logs call details and outcomes directly into your existing CRM system." },
        { icon: <LineChart className="h-6 w-6 md:h-8 md:w-8" />, title: "Real-time Analytics", description: "Monitor call volume, resolution rates, and customer satisfaction in real-time." },
    ],
    howItWorks: [
        { title: "Define Your Goals", description: "We work with you to define call flows and agent objectives." },
        { title: "Train The Agent", description: "We train the AI on your product documentation and common queries." },
        { title: "Deploy & Monitor", description: "Go live and watch your AI agent handle calls from day one." },
    ],
    comparison: {
        headers: ["Feature", "Human Call Center", "Intrix AI Voice Agent"],
        rows: [
            { feature: "Availability", traditional: "Business Hours", intrix: "24/7/365" },
            { feature: "Cost per Call", traditional: "$5 - $15", intrix: "Pennies per call" },
            { feature: "Scalability", traditional: "Limited by hiring", intrix: "Instantly scalable" },
            { feature: "Consistency", traditional: "Variable", intrix: "100% Consistent" },
        ]
    },
    demo: {
        title: "AI Voice Agent",
        traditionalImg: "https://picsum.photos/seed/tradvoice/800/600",
        aiImg: "https://picsum.photos/seed/aivoice/800/600",
        traditionalHint: "call center",
        aiHint: "sound wave"
    },
    pricingPlans: [
      { 
        planName: 'Basic', 
        description: 'Perfect for personal projects and hobbyists.', 
        price: '0', 
        features: ['1 User', '1GB Storage', 'Community Forum'], 
        buttonText: 'Get Started', 
        buttonVariant: 'secondary'
      },
      { 
        planName: 'Team', 
        description: 'Collaborate with your team on multiple projects.', 
        price: '49', 
        features: ['10 Users', '100GB Storage', 'Email Support', 'Shared Workspaces'], 
        buttonText: 'Choose Team Plan', 
        isPopular: true, 
        buttonVariant: 'primary' 
      },
      { 
        planName: 'Agency', 
        description: 'Manage all your clients under one roof.', 
        price: '149', 
        features: ['Unlimited Users', '1TB Storage', 'Dedicated Support', 'Client Invoicing'], 
        buttonText: 'Contact Us', 
        buttonVariant: 'primary' 
      },
    ]
  },
  {
    slug: "ai-chatbot",
    icon: <MessagesSquare className="h-6 w-6 md:h-8 md:w-8" />,
    title: "AI Chatbot",
    description: "Deploy an intelligent chatbot on your website to answer questions, capture leads, and guide users 24/7.",
    detailedDescription: "Transform your website into a lead-generation machine with an AI chatbot that provides instant answers, qualifies visitors, and books meetings around the clock.",
    useCases: [
        "Instant website support and FAQ answers.",
        "24/7 lead capture and qualification.",
        "Interactive product recommendations.",
        "User onboarding and guidance."
    ],
    keyFeatures: [
        { icon: <Sparkles className="h-6 w-6 md:h-8 md:w-8" />, title: "Custom Knowledge Base", description: "Train your chatbot on your own website content, docs, and FAQs for accurate answers." },
        { icon: <BrainCircuit className="h-6 w-6 md:h-8 md:w-8" />, title: "Proactive Engagement", description: "Initiates conversations with visitors based on their behavior to increase engagement." },
        { icon: <Users className="h-6 w-6 md:h-8 md:w-8" />, title: "Lead Capture Forms", description: "Seamlessly collect user information within the chat conversation." },
        { icon: <Clock className="h-6 w-6 md:h-8 md:w-8" />, title: "Appointment Booking", description: "Integrates with your calendar to book meetings and demos directly in the chat." },
    ],
    howItWorks: [
        { title: "Connect Data", description: "We connect the chatbot to your website and other data sources." },
        { title: "Customize Behavior", description: "Define the chatbot's personality, goals, and conversation starters." },
        { title: "Embed On-Site", description: "Add one line of code to your website to deploy the chatbot." },
    ],
    comparison: {
        headers: ["Feature", "Live Chat (Human)", "Intrix AI Chatbot"],
        rows: [
            { feature: "Response Time", traditional: "Minutes to Hours", intrix: "Instant" },
            { feature: "Availability", traditional: "Limited by staffing", intrix: "24/7" },
            { feature: "Cost", traditional: "Per agent, per month", intrix: "Flat monthly fee" },
            { feature: "Lead Capture", traditional: "Manual", intrix: "Automated, 24/7" },
        ]
    },
    demo: {
        title: "AI Chatbot",
        traditionalImg: "https://picsum.photos/seed/tradchat/800/600",
        aiImg: "https://picsum.photos/seed/aichat/800/600",
        traditionalHint: "customer support",
        aiHint: "chat bubbles"
    },
    pricingPlans: [
      { 
        planName: 'Basic', 
        description: 'Perfect for personal projects and hobbyists.', 
        price: '0', 
        features: ['1 User', '1GB Storage', 'Community Forum'], 
        buttonText: 'Get Started', 
        buttonVariant: 'secondary'
      },
      { 
        planName: 'Team', 
        description: 'Collaborate with your team on multiple projects.', 
        price: '49', 
        features: ['10 Users', '100GB Storage', 'Email Support', 'Shared Workspaces'], 
        buttonText: 'Choose Team Plan', 
        isPopular: true, 
        buttonVariant: 'primary' 
      },
      { 
        planName: 'Agency', 
        description: 'Manage all your clients under one roof.', 
        price: '149', 
        features: ['Unlimited Users', '1TB Storage', 'Dedicated Support', 'Client Invoicing'], 
        buttonText: 'Contact Us', 
        buttonVariant: 'primary' 
      },
    ]
  }
];
