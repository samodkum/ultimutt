'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AnimatedSection } from '@/components/animated-section';

export function HeroSection() {
  const heroImages = [
    PlaceHolderImages.find((img) => img.id === 'hero-1'),
    PlaceHolderImages.find((img) => img.id === 'hero-2'),
    PlaceHolderImages.find((img) => img.id === 'hero-3'),
  ].filter((img): img is NonNullable<typeof img> => !!img);

  const phoneMockupImage = PlaceHolderImages.find((img) => img.id === 'hero-phone-mockup');

  return (
    <div className="relative h-[90vh] min-h-[700px] w-full overflow-hidden bg-background pt-20">
      <Carousel
        className="absolute inset-0 h-full w-full embla--fade"
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: true,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="h-full -ml-0">
          {heroImages.map((image, index) => (
            <CarouselItem key={index} className="h-full">
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover"
                data-ai-hint={image.imageHint}
                priority={index === 0}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/10" />

      <div className="container relative z-10 mx-auto grid h-full max-w-[1400px] grid-cols-1 items-center gap-8 px-4 text-white md:grid-cols-2 sm:px-6 lg:px-8">
        <AnimatedSection className="flex flex-col items-start gap-6">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl font-headline">
            Premium Dog Boarding & Daycare in Gurgaon.
          </h1>
          <p className="text-lg md:text-xl text-slate-200">
            Safe, supervised, and fun stays for your dog — whether it’s a day
            visit or an extended vacation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/booking">Book a Stay</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={200} className="hidden items-center justify-center md:flex">
          <div className="relative h-[500px] w-[250px] rounded-[40px] border-8 border-gray-800 bg-gray-900 shadow-2xl">
            <div className="absolute top-4 left-1/2 -translate-x-1/2 h-4 w-24 rounded-full bg-gray-800"></div>
            {phoneMockupImage && (
              <Image
                src={phoneMockupImage.imageUrl}
                alt={phoneMockupImage.description}
                fill
                className="object-cover rounded-[32px] p-1"
                data-ai-hint={phoneMockupImage.imageHint}
              />
            )}
            <div className="absolute -bottom-4 -right-16 bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                <h4 className="font-bold">Live Updates</h4>
                <ul className="text-sm mt-2 space-y-1 text-slate-200">
                    <li>✓ Playtime photos</li>
                    <li>✓ Feeding & walk schedule</li>
                </ul>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
