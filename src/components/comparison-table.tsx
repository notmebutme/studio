
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle2, XCircle } from "lucide-react";

export interface ComparisonRow {
    feature: string;
    traditional: string;
    intrix: string;
}

export interface ComparisonData {
    headers: [string, string, string];
    rows: ComparisonRow[];
}

export function ComparisonTable({ data }: { data: ComparisonData }) {
  return (
    <Card className="overflow-hidden border-2 border-primary/10 shadow-lg">
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/30">
              <TableHead className="font-bold w-[34%] text-lg">{data.headers[0]}</TableHead>
              <TableHead className="font-bold text-center text-lg w-[33%]">{data.headers[1]}</TableHead>
              <TableHead className="font-bold text-center text-lg text-primary w-[33%]">{data.headers[2]}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.rows.map((item) => (
              <TableRow key={item.feature} className="text-base">
                <TableCell className="font-medium">{item.feature}</TableCell>
                <TableCell className="text-center text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <XCircle className="h-5 w-5 text-destructive/80" />
                    <span>{item.traditional}</span>
                  </div>
                </TableCell>
                <TableCell className="text-center font-semibold text-primary">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>{item.intrix}</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
