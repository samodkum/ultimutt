import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users, Heart, Camera, Trophy, PawPrint, Droplet } from "lucide-react";
import { AnimatedSection } from "../animated-section";
import { WaveDivider } from "../wave-divider";

const features = [
  {
    icon: Users,
    title: "Trained & Caring Staff",
    description: "Our team is passionate about dogs and trained in pet first aid.",
  },
  {
    icon: Heart,
    title: "Home-Cooked Fresh Meals",
    description: "Nutritious and delicious meals prepared daily for your pet.",
  },
  {
    icon: Camera,
    title: "CCTV & Staff Monitoring",
    description: "Your pet's safety is our top priority, with constant supervision.",
  },
  {
    icon: Trophy,
    title: "Cage-Free Daycare & Boarding",
    description: "A free-roaming environment for dogs to play and socialize.",
  },
  {
    icon: PawPrint,
    title: "Obedience Training & Play",
    description: "Engaging sessions to keep your dog mentally and physically active.",
  },
  {
    icon: Droplet,
    title: "Swimming Pool for Summer",
    description: "A fun way for dogs to cool off and exercise during hot months.",
  },
];

export function WhyUsSection() {
  return (
    <section className="bg-secondary relative">
       <WaveDivider position="top" colorClassName="text-secondary" />
      <div className="text-center mb-12 pt-10">
        <AnimatedSection>
          <h2 className="text-3xl font-bold md:text-4xl font-headline">Why Choose Us?</h2>
          <p className="mt-4 text-lg text-muted-foreground">Peace of mind for you, a vacation for your dog.</p>
        </AnimatedSection>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 pb-10">
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
