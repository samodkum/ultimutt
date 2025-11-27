'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { AnimatedSection } from "../animated-section";

const testimonials = [
  {
    name: "Mishti’s hooman — Sushmit Mustafi",
    quote: "My golden retriever, Leo, had the time of his life! The staff sent daily updates and he came back so happy and tired. It's his second home now.",
    imgId: "testimonial-1",
  },
  {
    name: "Austin’s hooman — Deeptyoti Deka",
    quote: "I was so nervous leaving my anxious beagle, Moti, for the first time. The team at Ultimutt was incredibly patient and caring. I could see him playing on the CCTV. Highly recommend!",
    imgId: "testimonial-2",
  },
  {
    name: "Kaju’s hooman — Raaghav Gaur",
    quote: "The best daycare in Gurgaon, period. My husky has so much energy and he gets all the exercise he needs. The facility is clean and the staff is amazing.",
    imgId: "testimonial-3",
  },
  {
    name: "Sheru’s hooman — Bagmishree",
    quote: "A fantastic place for my dog Sheru. He gets so excited when we even take the road to Ultimutt. They are professional, caring and the facility is top-notch.",
    imgId: "gallery-1",
  },
  {
    name: "Cherry’s hooman — Aarushi",
    quote: "I've tried other places, but Ultimutt is by far the best. My little Cherry is treated like a princess and she loves the staff. The updates give me peace of mind.",
    imgId: "gallery-8",
  },
  {
    name: "Zo’s hooman — Yash Vyas",
    quote: "Zo comes back happy and exhausted every single time. It's a huge relief to have a place I can trust completely. The team is passionate and it shows.",
    imgId: "gallery-4"
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials">
      <div className="text-center mb-12">
        <AnimatedSection>
          <h2 className="text-3xl font-bold md:text-4xl font-headline">Pawsitive Reviews</h2>
          <p className="mt-4 text-lg text-muted-foreground">What pet parents are saying about us.</p>
        </AnimatedSection>
      </div>
      <AnimatedSection delay={200}>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => {
              const image = PlaceHolderImages.find(img => img.id === testimonial.imgId);
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full">
                      <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
                        <Avatar className="w-20 h-20 mb-4 border-4 border-primary">
                          {image && <AvatarImage src={image.imageUrl} alt={image.description} data-ai-hint={image.imageHint} />}
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <blockquote className="text-muted-foreground italic flex-grow">"{testimonial.quote}"</blockquote>
                        <p className="mt-4 font-bold font-headline text-lg text-foreground">- {testimonial.name}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </AnimatedSection>
    </section>
  );
}
