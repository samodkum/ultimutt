import { Button } from "@/components/ui/button";
import { AnimatedSection } from "../animated-section";
import { WaveDivider } from "../wave-divider";
import Link from 'next/link';
import { Phone, MessageSquare } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="bg-primary text-primary-foreground text-center relative py-20 my-0">
      <WaveDivider position="top" colorClassName="text-primary" />
       <div className="relative z-10 container max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
            <h2 className="text-3xl font-bold md:text-4xl font-headline">Planning a trip?</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto opacity-90">Book your dog’s vacation at Ultimutt. We'll make sure they have as much fun as you do!</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                  <a href="https://wa.me/918787004236" target="_blank" rel="noopener noreferrer">
                    <MessageSquare /> WhatsApp
                  </a>
              </Button>
              <Button asChild variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                 <a href="tel:+918069061326">
                  <Phone /> Call Now
                 </a>
              </Button>
            </div>
        </AnimatedSection>
       </div>
    </section>
  );
}
