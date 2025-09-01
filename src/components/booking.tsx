import { BookingForm } from "./booking-form";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ScrollTriggeredText } from "./ui/scroll-triggered-text";

export function Booking() {
  return (
    <section id="booking" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
            <ScrollTriggeredText as="h2" per="word" preset="slide" className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary text-glow">
                Book an Appointment
            </ScrollTriggeredText>
            <ScrollTriggeredText as="p" per="word" preset="slide" delay={0.3} className="mt-4 text-muted-foreground md:text-xl/relaxed">
                Schedule a call to see how Intrix AI can revolutionize your content strategy. Get a calendar invite for Google Calendar or Outlook upon booking.
            </ScrollTriggeredText>
        </div>
        <div className="max-w-4xl mx-auto mt-12">
            <Card className="bg-card/80 border-2 border-primary/20 shadow-xl">
                <CardHeader>
                    <CardTitle>Schedule Your Demo</CardTitle>
                    <CardDescription>Fill out the form below to book your session.</CardDescription>
                </CardHeader>
                <CardContent>
                    <BookingForm />
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
