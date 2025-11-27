'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AnimatedSection } from '@/components/animated-section';
import { WaveDivider } from '../wave-divider';
import { Phone, MessageSquare } from 'lucide-react';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-1');

  return (
    <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden bg-background pt-20 -mt-20 flex items-center justify-center text-center">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}

      <div className="absolute inset-0 bg-black/50" />

      <div className="container relative z-10 mx-auto max-w-[1400px] px-4 text-white sm:px-6 lg:px-8">
        <AnimatedSection className="flex max-w-3xl mx-auto flex-col items-center gap-6">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl font-headline">
            Dog Boarding in Gurgaon & Delhi/NCR
          </h1>
          <p className="text-lg md:text-xl text-slate-200">
            A cage-free, leash-free daycare & boarding resort for dogs.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <a href="https://wa.me/918717004236" target="_blank" rel="noopener noreferrer"><MessageSquare /> WhatsApp</a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="tel:+918069061326"><Phone /> Call Us</a>
            </Button>
          </div>
        </AnimatedSection>
      </div>
       <WaveDivider position="bottom" colorClassName="text-background" />
    </section>
  );
}
