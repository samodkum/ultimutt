import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { AnimatedSection } from "@/components/animated-section";
import { WaveDivider } from "@/components/wave-divider";

const boardingServices = [
  { name: "Small/Medium Dog", price: "₹1000/night", description: "A cozy and safe spot for your pup.", imgId: "service-boarding" },
  { name: "Large Dog", price: "₹1200/night", description: "Spacious private suite with a comfy bed.", imgId: "service-boarding" },
  { name: "Fresh cooked meals (optional)", price: "₹100/meal", description: "Special packages for stays longer than 15 days.", imgId: "service-boarding" },
];

const daycareServices = [
    { name: "Full Day (Up to 10 hours)", price: "₹700", description: "A full day of fun, games, and nap time.", imgId: "service-daycare" },
];

const groomingServices = [
    { name: "Bath & Brush", price: "From ₹800", description: "A refreshing bath, blow-dry, and thorough brushing.", imgId: "service-grooming" },
    { name: "Full Groom", price: "From ₹1500", description: "Includes bath, haircut, nail trimming, and ear cleaning.", imgId: "service-grooming" },
    { name: "Puppy's First Groom", price: "From ₹1000", description: "A gentle introduction to grooming for your little one.", imgId: "service-grooming" },
];

const addons = [
    { name: "Pickup & Drop", price: "₹15/km", description: "One-way distance billed once. Toll charges added if applicable.", imgId: "service-training" },
];

const dailySchedule = [
    "8:30 am — Breakfast",
    "9:00–11:00 am — Outdoor play, checks & grooming touch-ups",
    "11:30 am–1:00 pm — Nap",
    "1:00–1:30 pm — Buttermilk/lunch",
    "1:30–6:30 pm — Outdoor play & pee/poop breaks",
];

const ServiceCard = ({ name, price, description, imgId }: { name: string, price: string, description: string, imgId: string }) => {
  const image = PlaceHolderImages.find(img => img.id === imgId);
  return (
    <Card className="group overflow-hidden flex flex-col">
        <div className="overflow-hidden aspect-w-4 aspect-h-3">
            {image && <Image src={image.imageUrl} alt={image.description} data-ai-hint={image.imageHint} width={400} height={300} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"/>}
        </div>
        <CardHeader>
            <CardTitle>{name}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
            <p className="text-muted-foreground">{description}</p>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
            <p className="font-bold text-lg text-primary">{price}</p>
            <Button asChild>
                <Link href="/booking">Book Now</Link>
            </Button>
        </CardFooter>
    </Card>
  );
};


export default function ServicesPage() {
  return (
    <>
      <section className="bg-secondary relative">
        <div className="container mx-auto max-w-[1400px] px-4 py-20 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-4xl font-bold md:text-5xl font-headline">Our Services</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              From overnight stays to a simple bath, we provide a wide range of services to keep your dog happy, healthy, and safe.
            </p>
          </AnimatedSection>
        </div>
        <WaveDivider position="bottom" colorClassName="text-secondary" />
      </section>

      <section>
        <Tabs defaultValue="boarding" className="w-full">
          <AnimatedSection>
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 max-w-2xl mx-auto h-auto">
              <TabsTrigger value="boarding" className="py-2">Boarding</TabsTrigger>
              <TabsTrigger value="daycare" id="daycare" className="py-2">Daycare</TabsTrigger>
              <TabsTrigger value="grooming" id="grooming" className="py-2">Grooming</TabsTrigger>
              <TabsTrigger value="addons" className="py-2">Pickup/Drop</TabsTrigger>
            </TabsList>
          </AnimatedSection>

          <AnimatedSection delay={200} className="mt-8">
            <TabsContent value="boarding">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {boardingServices.map(s => <ServiceCard key={s.name} {...s} />)}
              </div>
            </TabsContent>
            <TabsContent value="daycare">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold md:text-4xl font-headline">Let Your Doggo Have an Ultimutt Day!</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        <Card>
                            <CardHeader><CardTitle>Daily Schedule Example</CardTitle></CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {dailySchedule.map(item => <li key={item}>{item}</li>)}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                    <div>
                        {daycareServices.map(s => <ServiceCard key={s.name} {...s} />)}
                    </div>
                </div>
            </TabsContent>
            <TabsContent value="grooming">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {groomingServices.map(s => <ServiceCard key={s.name} {...s} />)}
              </div>
            </TabsContent>
            <TabsContent value="addons">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {addons.map(s => <ServiceCard key={s.name} {...s} />)}
              </div>
            </TabsContent>
          </AnimatedSection>
        </Tabs>
      </section>
    </>
  );
}
