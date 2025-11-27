import { BookingForm } from "@/components/booking-form";
import { AnimatedSection } from "@/components/animated-section";
import { WaveDivider } from "@/components/wave-divider";
import { PawPrint, Heart, Camera } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const stayProcess = [
    { icon: PawPrint, title: "Plenty of space to run + supervised outdoor fun" },
    { icon: PawPrint, title: "Lots of toys & social play" },
    { icon: PawPrint, title: "Human supervision + trained staff" },
    { icon: PawPrint, title: "Indoor sleeping areas" },
    { icon: PawPrint, title: "Safe & secure environment" },
    { icon: PawPrint, title: "Swimming in summer" },
];

const weProvide = [
    { icon: Heart, title: "Comfortable beds & blankets (Winters)" },
    { icon: Heart, title: "Fresh home-cooked meals & water" },
    { icon: Heart, title: "Lots of love, cuddles & one-on-one care" },
    { icon: Camera, title: "Regular photo/video updates to parents via WhatsApp" },
];


export default function BookingPage() {
  return (
    <>
      <section className="bg-secondary relative">
        <div className="container mx-auto max-w-[1400px] px-4 py-20 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-4xl font-bold md:text-5xl font-headline">Overnight Dog Boarding Services</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Check-in/out timing: 7am – 7pm
            </p>
          </AnimatedSection>
        </div>
        <WaveDivider position="bottom" colorClassName="text-secondary" />
      </section>
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
                <AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                      <Card>
                        <CardHeader><CardTitle>At Ultimutt, Your Dog Will Enjoy:</CardTitle></CardHeader>
                        <CardContent className="space-y-4">
                          {stayProcess.map((item, index) => (
                            <div key={index} className="flex gap-4">
                                <item.icon className="h-6 w-6 text-primary flex-shrink-0" />
                                <p>{item.title}</p>
                            </div>
                          ))}
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader><CardTitle>We Provide:</CardTitle></CardHeader>
                        <CardContent className="space-y-4">
                          {weProvide.map((item, index) => (
                            <div key={index} className="flex gap-4">
                                <item.icon className="h-6 w-6 text-primary flex-shrink-0" />
                                <p>{item.title}</p>
                            </div>
                          ))}
                        </CardContent>
                      </Card>
                    </div>
                     <Card>
                        <CardHeader><CardTitle>Pricing (24 hours)</CardTitle></CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-muted-foreground">
                                <li className="flex justify-between"><span>Small/Medium Dog</span> <span>₹1000</span></li>
                                <li className="flex justify-between"><span>Large Dog</span> <span>₹1200</span></li>
                                <li className="flex justify-between border-t pt-2 mt-2"><span>Meals (fresh cooked, optional)</span> <span>₹100 per meal</span></li>
                            </ul>
                        </CardContent>
                    </Card>
                </AnimatedSection>
            </div>
            <div className="lg:col-span-1">
                <AnimatedSection delay={200}>
                    <div className="space-y-8 sticky top-28">
                        <h2 className="text-2xl font-bold font-headline">Request a Booking</h2>
                        <BookingForm />
                    </div>
                </AnimatedSection>
            </div>
        </div>
      </section>
    </>
  );
}
