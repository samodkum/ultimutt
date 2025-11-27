"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Image from 'next/image';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { WaveDivider } from "@/components/wave-divider";

const faqs = [
    { q: "What vaccinations are required?", a: "For the safety of all our guests, we require up-to-date vaccinations for Rabies, DHPPi (Distemper, Hepatitis, Parainfluenza, and Parvovirus), and Bordetella (Kennel Cough)." },
    { q: "What should I pack for my dog's boarding stay?", a: "Please pack your dog's food to avoid any dietary issues. You can also bring a favorite toy or blanket to make them feel more at home. We provide beds, bowls, and everything else." },
    { q: "How do you handle first-time daycare dogs?", a: "First-timers undergo a temperament assessment to ensure they are a good fit for group play. We introduce them slowly to the pack and monitor them closely to ensure they are comfortable and safe." },
    { q: "What is your cancellation policy?", a: "We require a 48-hour notice for boarding cancellations and a 24-hour notice for daycare. Please contact us for more details about rescheduling." },
];

export default function ContactPage() {
    const mapImage = PlaceHolderImages.find(img => img.id === 'contact-map');

    const handleInquirySubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        const mailtoLink = `mailto:contact@ultimutt.com?subject=${encodeURIComponent(String(subject) + " - Inquiry from " + name)}&body=${encodeURIComponent(String(message) + "\n\nFrom: " + name + "\nEmail: " + email)}`;
        window.location.href = mailtoLink;
    };

    return (
        <>
            <section className="bg-secondary relative">
                <div className="container mx-auto max-w-[1400px] px-4 py-20 text-center sm:px-6 lg:px-8">
                <AnimatedSection>
                    <h1 className="text-4xl font-bold md:text-5xl font-headline">Get In Touch</h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Have questions? We're here to help. Reach out to us via phone, email, or the form below.
                    </p>
                </AnimatedSection>
                </div>
                <WaveDivider position="bottom" colorClassName="text-secondary" />
            </section>

            <section>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    <AnimatedSection className="lg:col-span-2">
                        <div className="space-y-8 sticky top-28">
                             {mapImage && (
                                <div className="overflow-hidden rounded-lg shadow-lg">
                                    <Image src={mapImage.imageUrl} alt={mapImage.description} data-ai-hint={mapImage.imageHint} width={600} height={450} className="w-full" />
                                </div>
                             )}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Contact Information</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 text-muted-foreground">
                                    <div className="flex items-start gap-4"><MapPin className="text-primary mt-1 h-5 w-5 flex-shrink-0" /><span>123 Puppy Lane, Sector 56, Gurgaon, Haryana 122011</span></div>
                                    <div className="flex items-center gap-4"><Phone className="text-primary h-5 w-5 flex-shrink-0" /><span>+91 98765 43210</span></div>
                                    <div className="flex items-center gap-4"><Mail className="text-primary h-5 w-5 flex-shrink-0" /><span>contact@ultimutt.com</span></div>
                                    <div className="flex items-center gap-4"><Clock className="text-primary h-5 w-5 flex-shrink-0" /><span>Open Daily: 8:00 AM - 8:00 PM</span></div>
                                </CardContent>
                            </Card>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection delay={200} className="lg:col-span-3">
                         <Card>
                            <CardHeader>
                                <CardTitle>Send Us a Message</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleInquirySubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2"><Label htmlFor="name">Name</Label><Input id="name" name="name" required /></div>
                                        <div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" name="email" type="email" required /></div>
                                    </div>
                                    <div className="space-y-2"><Label htmlFor="subject">Subject</Label>
                                        <Select name="subject" required>
                                            <SelectTrigger id="subject"><SelectValue placeholder="Select a subject" /></SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Boarding">Boarding Inquiry</SelectItem>
                                                <SelectItem value="Daycare">Daycare Inquiry</SelectItem>
                                                <SelectItem value="Grooming">Grooming Inquiry</SelectItem>
                                                <SelectItem value="Other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2"><Label htmlFor="message">Message</Label><Textarea id="message" name="message" required rows={5}/></div>
                                    <Button type="submit" className="w-full" size="lg">Send Inquiry</Button>
                                </form>
                            </CardContent>
                         </Card>
                    </AnimatedSection>
                </div>
            </section>

            <section>
                <div className="text-center mb-12">
                    <AnimatedSection>
                        <h2 className="text-3xl font-bold md:text-4xl font-headline">Frequently Asked Questions</h2>
                    </AnimatedSection>
                </div>
                <AnimatedSection delay={200} className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                        <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger className="text-lg text-left">{faq.q}</AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground">{faq.a}</AccordionContent>
                        </AccordionItem>
                        ))}
                    </Accordion>
                </AnimatedSection>
            </section>
        </>
    )
}
