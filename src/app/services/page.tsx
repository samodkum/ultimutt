import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { AnimatedSection } from "@/components/animated-section";
import { WaveDivider } from "@/components/wave-divider";

const boardingServices = [
  { name: "Standard Boarding", price: "₹1200/night", description: "A cozy and safe spot for your pup.", imgId: "service-boarding" },
  { name: "Premium Suites", price: "₹2000/night", description: "Spacious private suite with a comfy bed and webcam access.", imgId: "service-boarding" },
  { name: "Long-Stay Boarding", price: "Contact us", description: "Special packages for stays longer than 15 days.", imgId: "service-boarding" },
];

const daycareServices = [
    { name: "Half Day (5 hours)", price: "₹600", description: "Perfect for a few hours of play and socialization.", imgId: "service-daycare" },
    { name: "Full Day (10 hours)", price: "₹1000", description: "A full day of fun, games, and nap time.", imgId: "service-daycare" },
    { name: "Monthly Pass", price: "₹18000", description: "Unlimited daycare for a full month. Best value!", imgId: "service-daycare" },
];

const groomingServices = [
    { name: "Bath & Brush", price: "From ₹800", description: "A refreshing bath, blow-dry, and thorough brushing.", imgId: "service-grooming" },
    { name: "Full Groom", price: "From ₹1500", description: "Includes bath, haircut, nail trimming, and ear cleaning.", imgId: "service-grooming" },
    { name: "Puppy's First Groom", price: "From ₹1000", description: "A gentle introduction to grooming for your little one.", imgId: "service-grooming" },
];

const addons = [
    { name: "Extra Walk", price: "₹200", description: "A 20-minute private walk around the neighborhood.", imgId: "service-training" },
    { name: "Gourmet Meal", price: "₹300", description: "A special, freshly cooked meal for your pet.", imgId: "service-training" },
    { name: "Pet Taxi", price: "Based on distance", description: "Convenient pick-up and drop-off service.", imgId: "service-training" },
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
              <TabsTrigger value="addons" className="py-2">Add-ons</TabsTrigger>
            </TabsList>
          </AnimatedSection>

          <AnimatedSection delay={200} className="mt-8">
            <TabsContent value="boarding">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {boardingServices.map(s => <ServiceCard key={s.name} {...s} />)}
              </div>
            </TabsContent>
            <TabsContent value="daycare">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {daycareServices.map(s => <ServiceCard key={s.name} {...s} />)}
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
