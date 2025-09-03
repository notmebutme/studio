
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollTriggeredText } from "@/components/ui/scroll-triggered-text";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import Link from "next/link";
import { RainbowButton } from "@/components/ui/rainbow-button";

const corePackages = [
  {
    feature: "Perfect For",
    starter: "Local Shops & Solopreneurs",
    growth: "Growing D2C Brands & Startups",
    scale: "Marketing Agencies & Established Businesses",
  },
  {
    feature: "AI-Generated Articles",
    starter: "4 (up to 1000 words)",
    growth: "10 (up to 1500 words)",
    scale: "25 (up to 2000 words)",
  },
  {
    feature: "Social Media Posts",
    starter: "30 Posts (Captions & Hashtags)",
    growth: "60 Posts (Captions, Hashtags, & Image Ideas)",
    scale: "100+ Posts & Full Content Calendar",
  },
  {
    feature: "AI-Generated Ad Creatives",
    starter: "20 (Image Ads)",
    growth: "100 (Image & Basic Video Ads)",
    scale: "250+ (Advanced A/B Testing Variations)",
  },
  {
    feature: "SEO Optimization",
    starter: <Check className="h-5 w-5 text-primary mx-auto" />,
    growth: <Check className="h-5 w-5 text-primary mx-auto" />,
    scale: <Check className="h-5 w-5 text-primary mx-auto" />,
  },
  {
    feature: "Dedicated Manager",
    starter: "-",
    growth: <Check className="h-5 w-5 text-primary mx-auto" />,
    scale: <Check className="h-5 w-5 text-primary mx-auto" />,
  },
  {
    feature: "Monthly Strategy Call",
    starter: "-",
    growth: "1 Call",
    scale: "Bi-Weekly Calls",
  },
  {
    feature: "Delivery Time",
    starter: "5-7 Business Days",
    growth: "3-5 Business Days",
    scale: "2-3 Business Days",
  },
];

const faqItems = [
    {
        question: "Who owns the rights to the content you create?",
        answer: "You do! Once the project is paid for, you have 100% commercial rights to all content and visuals."
    },
    {
        question: "What if I'm not happy with the results?",
        answer: "We include a set number of revisions in every plan (e.g., 2 revision rounds) to ensure you are delighted with the final product. Your satisfaction is our top priority."
    },
    {
        question: "What is the payment process?",
        answer: "For monthly packages, we bill at the start of each month. For project-based work, we require a 50% advance to begin and 50% on completion."
    },
    {
        question: "Can I combine services from different packages?",
        answer: "Absolutely! Contact us for a 'Build Your Own' package tailored to your exact needs. We are flexible."
    },
    {
        question: "How do you ensure the AI content is high-quality and original?",
        answer: "Our process combines cutting-edge AI tools with expert human oversight. Every piece of content is reviewed, fact-checked, and polished by our team to match your brand voice and meet quality standards."
    }
]

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        {/* Headline & Hook */}
        <section className="w-full py-16 md:py-24 bg-secondary/20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <ScrollTriggeredText as="h1" per="word" preset="slide" className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline text-primary text-glow">
              Find the Perfect Plan to Scale Your Brand with AI.
            </ScrollTriggeredText>
            <ScrollTriggeredText as="p" per="word" preset="slide" delay={0.3} className="mt-4 max-w-3xl mx-auto text-muted-foreground text-base sm:text-lg md:text-xl/relaxed">
              No hidden fees, no complex contracts. Just pure, scalable creative power. All prices are in INR and exclusive of GST.
            </ScrollTriggeredText>
          </div>
        </section>

        {/* Core Packages */}
        <section className="w-full py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary/90">Monthly Content & Ad Packages</h2>
                    <p className="mt-2 text-muted-foreground md:text-lg/relaxed">Ideal for businesses that need a consistent flow of high-quality marketing materials to stay ahead.</p>
                </div>
                <Card className="border-2 border-primary/10 shadow-lg">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[25%] font-bold text-lg">Feature</TableHead>
                                <TableHead className="text-center w-[25%]">
                                    <h3 className="text-xl font-bold">Starter</h3>
                                    <p className="font-normal text-muted-foreground">₹19,999 / month</p>
                                </TableHead>
                                <TableHead className="text-center w-[25%] border-x-2 border-primary/20">
                                    <h3 className="text-xl font-bold text-primary flex items-center justify-center gap-2">
                                        <Star className="w-5 h-5 text-primary" /> Growth
                                    </h3>
                                    <p className="font-normal text-muted-foreground">₹49,999 / month</p>
                                </TableHead>
                                <TableHead className="text-center w-[25%]">
                                    <h3 className="text-xl font-bold">Scale</h3>
                                    <p className="font-normal text-muted-foreground">₹99,999 / month</p>
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {corePackages.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{item.feature}</TableCell>
                                    <TableCell className="text-center text-muted-foreground">{item.starter}</TableCell>
                                    <TableCell className="text-center text-foreground font-medium border-x-2 border-primary/20">{item.growth}</TableCell>
                                    <TableCell className="text-center text-muted-foreground">{item.scale}</TableCell>
                                </TableRow>
                            ))}
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell className="text-center"><Button asChild variant="outline"><Link href="/#booking">Choose Starter</Link></Button></TableCell>
                                <TableCell className="text-center border-x-2 border-primary/20"><RainbowButton asChild href="/#booking">Choose Growth</RainbowButton></TableCell>
                                <TableCell className="text-center"><Button asChild variant="outline"><Link href="/#booking">Choose Scale</Link></Button></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Card>
            </div>
        </section>

        {/* Project-Based Pricing */}
        <section className="w-full py-16 md:py-24 bg-secondary/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary/90">One-Time Visual Projects</h2>
                    <p className="mt-2 text-muted-foreground md:text-lg/relaxed">Perfect for product launches, website redesigns, or specific campaigns.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <Card className="p-6 text-center flex flex-col glow-shadow">
                        <h3 className="text-2xl font-bold font-headline mb-4">AI Product Mockups</h3>
                        <div className="space-y-4 flex-grow">
                            <p><span className="font-semibold">Starter Pack:</span> 10 High-Res Mockups - <span className="text-primary">₹8,000</span></p>
                            <p><span className="font-semibold">Booster Pack:</span> 50 High-Res Mockups - <span className="text-primary">₹35,000</span></p>
                            <p><span className="font-semibold">Bulk Pack:</span> 100+ High-Res Mockups - Contact for Custom Quote</p>
                        </div>
                        <Button asChild className="mt-6"><Link href="/#booking">Start Your Mockup Project</Link></Button>
                    </Card>
                    <Card className="p-6 text-center flex flex-col glow-shadow">
                        <h3 className="text-2xl font-bold font-headline mb-4">AI CGI Video Ads</h3>
                        <div className="space-y-4 flex-grow">
                           <p>Because every CGI project is unique, we provide a custom quote based on your vision.</p>
                           <p className="text-sm">1. 15-Min Discovery Call <br/> 2. Concept & Storyboard <br/> 3. Custom Quote</p>
                           <p className="font-semibold">Pricing starts from <span className="text-primary">₹75,000</span> for a 15-second ad.</p>
                        </div>
                        <Button asChild className="mt-6"><Link href="/#booking">Get a Free CGI Quote</Link></Button>
                    </Card>
                </div>
            </div>
        </section>
        
        {/* Custom Solutions */}
        <section className="w-full py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
                 <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary/90">Custom AI Automation Solutions</h2>
                 <p className="mt-2 text-muted-foreground md:text-lg/relaxed">For businesses ready to revolutionize their customer experience and internal workflows.</p>
                 <Card className="p-6 mt-8 text-center glow-shadow">
                    <h3 className="text-2xl font-bold font-headline mb-4">AI Voice Agents & Website Chatbots</h3>
                    <p className="text-muted-foreground">Our AI agents are tailored to your business needs, from handling customer queries in Gujarati to capturing leads 24/7.</p>
                    <p className="mt-4"><span className="font-semibold">One-Time Setup Fee:</span> Starts at <span className="text-primary">₹50,000</span> (Includes consultation, AI training, and integration)</p>
                    <p><span className="font-semibold">Monthly Retainer:</span> Starts at <span className="text-primary">₹15,000</span> (Includes hosting, updates, and support)</p>
                    <Button asChild className="mt-6"><Link href="/#booking">Book a Free Automation Audit</Link></Button>
                 </Card>
            </div>
        </section>

        {/* FAQ */}
        <section className="w-full py-16 md:py-24 bg-secondary/20">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary/90">Frequently Asked Questions</h2>
                </div>
                <Accordion type="single" collapsible className="w-full">
                    {faqItems.map((item, index) => (
                        <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger className="text-lg text-left">{item.question}</AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>

        {/* Final CTA */}
        <section className="w-full py-20 text-center">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary text-glow">Still Unsure? Let's Talk.</h2>
                <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg/relaxed">Schedule a free, 15-minute strategy call with our founder, Veer Shah. We'll help you identify the best plan for your budget and business goals. No pressure, just solutions.</p>
                <RainbowButton asChild href="/#booking" size="lg" className="mt-8">
                    Schedule Your Free Strategy Call
                </RainbowButton>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
