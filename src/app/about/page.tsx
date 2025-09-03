
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Founder } from "@/components/founder";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Founder />
      </main>
      <Footer />
    </div>
  );
}
