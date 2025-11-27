import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Dog, Bone, Building, Star } from "lucide-react";
import { AnimatedSection } from "../animated-section";
import Image from 'next/image';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";

const offers = [
  {
    icon: Dog,
    title: "Dog Boarding",
    description: "Spacious, climate-controlled kennels for a comfortable overnight stay.",
    imgId: "service-boarding",
    link: "/booking"
  },
  {
    icon: Bone,
    title: "Dog Daycare",
    description: "Supervised group play in our large indoor and outdoor yards.",
    imgId: "service-daycare",
    link: "/services#daycare"
  },
  {
    icon: Building,
    title: "Facility Tour",
    description: "Come see our clean, safe, and fun environment for your furry friend.",
    imgId: "gallery-5",
    link: "/gallery"
  },
  {
    icon: Star,
    title: "Testimonials",
    description: "See what other pet parents have to say about our top-notch care.",
    imgId: "testimonial-2",
    link: "/#testimonials"
  }
];

export function OfferSection() {
  return (
    <section>
      <div className="text-center mb-12">
        <AnimatedSection>
          <h2 className="text-3xl font-bold md:text-4xl font-headline">What We Offer</h2>
          <p className="mt-4 text-lg text-muted-foreground">Comprehensive care for your beloved pet.</p>
        </AnimatedSection>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {offers.map((offer, index) => {
          const image = PlaceHolderImages.find(img => img.id === offer.imgId);
          return (
            <AnimatedSection key={offer.title} delay={index * 100}>
              <Link href={offer.link}>
                <Card className="group overflow-hidden h-full">
                  <div className="overflow-hidden rounded-t-lg aspect-w-4 aspect-h-3">
                    {image && (
                       <Image
                        src={image.imageUrl}
                        alt={image.description}
                        width={400}
                        height={300}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                  </div>
                  <CardHeader className="flex-row items-center gap-4">
                    <offer.icon className="h-8 w-8 text-primary" />
                    <CardTitle>{offer.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{offer.description}</p>
                  </CardContent>
                </Card>
              </Link>
            </AnimatedSection>
          );
        })}
      </div>
    </section>
  );
}
