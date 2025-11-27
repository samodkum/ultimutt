import { BookingForm } from "@/components/booking-form";
import { AnimatedSection } from "@/components/animated-section";
import { WaveDivider } from "@/components/wave-divider";
import { Clock, PawPrint, Heart } from 'lucide-react';

const stayProcess = [
    { icon: Clock, title: "Check-in/Out", description: "Check-in after 12 PM, check-out before 10 AM. Flexible timings available on request." },
    { icon: PawPrint, title: "Food & Fun", description: "We provide high-quality food. Playtime is scheduled twice daily. You can bring their favorite toy!" },
    { icon: Heart, title: "Vaccinations", description: "All pets must have up-to-date vaccinations including Rabies, DHPPi, and Kennel Cough." },
]

export default function BookingPage() {
  return (
    <>
      <section className="bg-secondary relative">
        <div className="container mx-auto max-w-[1400px] px-4 py-20 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-4xl font-bold md:text-5xl font-headline">Book a Stay</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to give your pet a vacation? Fill out the form below to request a booking. We'll get back to you shortly to confirm.
            </p>
          </AnimatedSection>
        </div>
        <WaveDivider position="bottom" colorClassName="text-secondary" />
      </section>
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
                <AnimatedSection>
                    <BookingForm />
                </AnimatedSection>
            </div>
            <div className="lg:col-span-1">
                <AnimatedSection delay={200}>
                    <div className="space-y-8 sticky top-28">
                        <h2 className="text-2xl font-bold font-headline">Our Process</h2>
                        {stayProcess.map((item, index) => (
                            <div key={index} className="flex gap-4">
                                <div className="bg-primary/20 p-3 rounded-full h-fit">
                                    <item.icon className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">{item.title}</h3>
                                    <p className="text-muted-foreground">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </div>
      </section>
    </>
  );
}
