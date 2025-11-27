import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Video, HeartPulse, Sparkles, Clock } from "lucide-react";
import { AnimatedSection } from "../animated-section";
import { WaveDivider } from "../wave-divider";

const features = [
  {
    icon: Video,
    title: "24/7 Supervision",
    description: "Our facility is monitored around the clock with CCTV and on-site staff to ensure your pet's safety.",
  },
  {
    icon: HeartPulse,
    title: "Vet-on-Call",
    description: "We have a veterinarian on-call for any emergencies and conduct regular health checks.",
  },
  {
    icon: Sparkles,
    title: "Play Zones",
    description: "Separate indoor and outdoor play areas for small and large dogs to socialize safely.",
  },
  {
    icon: Clock,
    title: "Structured Routines",
    description: "A balanced schedule of walks, feeding, playtime, and naps to keep your dog happy and healthy.",
  },
];

export function WhyUsSection() {
  return (
    <section className="bg-secondary relative">
       <WaveDivider position="top" colorClassName="text-secondary" />
      <div className="text-center mb-12 pt-10">
        <AnimatedSection>
          <h2 className="text-3xl font-bold md:text-4xl font-headline">Why Ultimutt?</h2>
          <p className="mt-4 text-lg text-muted-foreground">Peace of mind for you, a vacation for your dog.</p>
        </AnimatedSection>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 pb-10">
        {features.map((feature, index) => (
          <AnimatedSection key={feature.title} delay={index * 100}>
            <Card className="text-center h-full">
              <CardHeader className="items-center">
                <div className="bg-primary/20 p-4 rounded-full">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>
      <WaveDivider position="bottom" colorClassName="text-secondary" />
    </section>
  );
}
