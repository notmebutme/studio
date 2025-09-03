
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function OurWorkPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto py-12 md:py-24">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline text-center">
          Our Work
        </h1>
        <p className="mt-4 text-center text-muted-foreground md:text-xl/relaxed">
          Here's a showcase of our projects.
        </p>
      </main>
      <Footer />
    </div>
  );
}
