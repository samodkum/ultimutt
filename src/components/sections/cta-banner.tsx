import { Button } from "@/components/ui/button";
import { AnimatedSection } from "../animated-section";
import { WaveDivider } from "../wave-divider";
import Link from 'next/link';

export function CtaBanner() {
  return (
    <section className="bg-primary text-primary-foreground text-center relative py-20 my-0 -mx-4 sm:-mx-6 lg:-mx-8">
      <WaveDivider position="top" colorClassName="text-primary" />
       <div className="relative z-10 container max-w-[1400px] mx-auto">
        <AnimatedSection>
            <h2 className="text-3xl font-bold md:text-4xl font-headline">Planning a trip?</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto opacity-90">Book your dog’s vacation at Ultimutt. We'll make sure they have as much fun as you do!</p>
            <Button asChild variant="secondary" size="lg" className="mt-8 bg-white text-primary hover:bg-white/90">
                <Link href="/booking">Check Availability</Link>
            </Button>
        </AnimatedSection>
       </div>
    </section>
  );
}
