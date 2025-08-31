import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle2, XCircle } from "lucide-react";

const comparisonData = [
  { feature: "Speed", traditional: "Days to Weeks", intrix: "Minutes to Hours", intrixIsBetter: true },
  { feature: "Cost", traditional: "High", intrix: "Fraction of the cost", intrixIsBetter: true },
  { feature: "Scalability", traditional: "Limited", intrix: "Infinite Variations", intrixIsBetter: true },
  { feature: "Revisions", traditional: "Slow & Costly", intrix: "Instant & Affordable", intrixIsBetter: true },
  { feature: "Performance", traditional: "Hit or Miss", intrix: "Data-Driven Optimization", intrixIsBetter: true },
];

export function Comparison() {
  return (
    <section className="w-full py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary text-glow">
            The Intrix AI Advantage
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            See how our AI-powered platform stacks up against traditional content creation methods.
          </p>
        </div>
        <Card className="mt-12 overflow-hidden border-2 border-primary/20 shadow-lg">
            <CardContent className="p-0">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-muted/30">
                        <TableHead className="font-bold w-[25%] text-lg">Feature</TableHead>
                        <TableHead className="font-bold text-center text-lg">Traditional Content</TableHead>
                        <TableHead className="font-bold text-center text-lg text-primary">Intrix AI</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {comparisonData.map((item) => (
                        <TableRow key={item.feature} className="text-base">
                            <TableCell className="font-medium">{item.feature}</TableCell>
                            <TableCell className="text-center text-muted-foreground flex items-center justify-center gap-2">
                                <XCircle className="h-5 w-5 text-destructive/80" />
                                {item.traditional}
                            </TableCell>
                            <TableCell className="text-center font-semibold text-primary flex items-center justify-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-primary" />
                                {item.intrix}
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
      </div>
    </section>
  );
}
