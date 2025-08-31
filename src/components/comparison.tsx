import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle2, XCircle } from "lucide-react";
import { ScrollTriggeredText } from "./ui/scroll-triggered-text";
import { ComparisonTable, ComparisonData } from "./comparison-table";

const comparisonData: ComparisonData = {
  headers: ["Feature", "Traditional Content", "Intrix AI"],
  rows: [
    { feature: "Speed", traditional: "Days to Weeks", intrix: "Minutes to Hours" },
    { feature: "Cost", traditional: "High", intrix: "Fraction of the cost" },
    { feature: "Scalability", traditional: "Limited", intrix: "Infinite Variations" },
    { feature: "Revisions", traditional: "Slow & Costly", intrix: "Instant & Affordable" },
    { feature: "Performance", traditional: "Hit or Miss", intrix: "Data-Driven Optimization" },
  ]
};

export function Comparison() {
  return (
    <section className="w-full py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <ScrollTriggeredText as="h2" per="word" preset="slide" className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary text-glow">
            The Intrix AI Advantage
          </ScrollTriggeredText>
          <ScrollTriggeredText as="p" per="word" preset="slide" delay={0.3} className="mt-4 text-muted-foreground md:text-xl/relaxed">
            See how our AI-powered platform stacks up against traditional content creation methods.
          </ScrollTriggeredText>
        </div>
        <div className="mt-12">
            <ComparisonTable data={comparisonData} />
        </div>
      </div>
    </section>
  );
}
