"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { format } from "date-fns"
import { Calendar as CalendarIcon, Loader2 } from "lucide-react"
import { useState } from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent } from "./ui/card"

const addons = [
  { id: "extra_walks", label: "Extra Walks" },
  { id: "grooming", label: "Grooming Session" },
  { id: "pet_taxi", label: "Pet Taxi (Pick-up & Drop-off)" },
];

const bookingFormSchema = z.object({
  parentName: z.string().min(2, "Name must be at least 2 characters."),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number."),
  email: z.string().email("Please enter a valid email address."),
  dogName: z.string().min(2, "Dog's name must be at least 2 characters."),
  breed: z.string().min(2, "Breed must be at least 2 characters."),
  age: z.string().min(1, "Please enter dog's age."),
  neutered: z.enum(["yes", "no"], { required_error: "Please select an option."}),
  serviceType: z.enum(["boarding", "daycare", "grooming", "combo"], { required_error: "Please select a service." }),
  dateRange: z.object({
    from: z.date({ required_error: "Check-in date is required." }),
    to: z.date().optional(),
  }).optional(),
  addons: z.array(z.string()).optional(),
  notes: z.string().max(500, "Notes cannot exceed 500 characters.").optional(),
});

type BookingFormValues = z.infer<typeof bookingFormSchema>;

export function BookingForm() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
        parentName: "",
        phone: "",
        email: "",
        dogName: "",
        breed: "",
        age: "",
        addons: [],
        notes: "",
        dateRange: {
            from: undefined,
            to: undefined,
        },
    },
  });

  function onSubmit(data: BookingFormValues) {
    setLoading(true);
    
    if (!data.dateRange?.from) {
        toast({
            variant: "destructive",
            title: "Booking failed!",
            description: "Please select a check-in date.",
        });
        setLoading(false);
        return;
    }

    const message = `
New Booking Request from ${data.parentName}:
--------------------
Service: ${data.serviceType}
Check-in: ${format(data.dateRange.from, "PPP")}
${data.dateRange.to ? `Check-out: ${format(data.dateRange.to, "PPP")}` : ''}

Owner Details:
- Name: ${data.parentName}
- Phone: ${data.phone}
- Email: ${data.email}

Pet Details:
- Name: ${data.dogName}
- Breed: ${data.breed}
- Age: ${data.age}
- Neutered/Spayed: ${data.neutered}

Add-ons:
- ${data.addons && data.addons.length > 0 ? data.addons.map(a => addons.find(ad => ad.id === a)?.label).join(", ") : "None"}

Notes:
- ${data.notes || "None"}
    `;

    // Simulate API call and open WhatsApp
    setTimeout(() => {
        const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        
        toast({
          title: "Booking request sent!",
          description: "We've opened WhatsApp for you. We'll confirm your booking shortly.",
        });
        form.reset();
        setLoading(false);
    }, 1000);
  }

  return (
    <Card>
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="parentName" render={({ field }) => (
                    <FormItem><FormLabel>Your Name</FormLabel><FormControl><Input placeholder="John Doe" {...field} /></FormControl><FormMessage /></FormItem>
                )}/>
                <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem><FormLabel>Phone Number</FormLabel><FormControl><Input placeholder="9876543210" {...field} /></FormControl><FormMessage /></FormItem>
                )}/>
            </div>
            <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem><FormLabel>Email Address</FormLabel><FormControl><Input placeholder="john.doe@example.com" {...field} /></FormControl><FormMessage /></FormItem>
            )}/>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FormField control={form.control} name="dogName" render={({ field }) => (
                    <FormItem><FormLabel>Dog's Name</FormLabel><FormControl><Input placeholder="Buddy" {...field} /></FormControl><FormMessage /></FormItem>
                )}/>
                <FormField control={form.control} name="breed" render={({ field }) => (
                    <FormItem><FormLabel>Breed</FormLabel><FormControl><Input placeholder="Golden Retriever" {...field} /></FormControl><FormMessage /></FormItem>
                )}/>
                <FormField control={form.control} name="age" render={({ field }) => (
                    <FormItem><FormLabel>Age</FormLabel><FormControl><Input placeholder="2 years" {...field} /></FormControl><FormMessage /></FormItem>
                )}/>
            </div>
            <FormField control={form.control} name="neutered" render={({ field }) => (
                <FormItem className="space-y-3"><FormLabel>Neutered/Spayed?</FormLabel><FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex items-center gap-6">
                        <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="yes" /></FormControl><FormLabel className="font-normal">Yes</FormLabel></FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="no" /></FormControl><FormLabel className="font-normal">No</FormLabel></FormItem>
                    </RadioGroup>
                </FormControl><FormMessage /></FormItem>
            )}/>
            <FormField control={form.control} name="serviceType" render={({ field }) => (
                <FormItem><FormLabel>Service Type</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl><SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger></FormControl>
                    <SelectContent>
                        <SelectItem value="boarding">Boarding</SelectItem>
                        <SelectItem value="daycare">Daycare</SelectItem>
                        <SelectItem value="grooming">Grooming</SelectItem>
                        <SelectItem value="combo">Combo (e.g., Boarding + Grooming)</SelectItem>
                    </SelectContent>
                </Select><FormMessage /></FormItem>
            )}/>
            <FormField control={form.control} name="dateRange" render={({ field }) => (
                <FormItem className="flex flex-col"><FormLabel>Check-in & Check-out Dates</FormLabel>
                    <Popover><PopoverTrigger asChild>
                        <FormControl><Button variant={"outline"} className={cn("w-full justify-start text-left font-normal", !field.value?.from && "text-muted-foreground")}>
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {field.value?.from ? ( field.value.to ? (<> {format(field.value.from, "LLL dd, y")} - {format(field.value.to, "LLL dd, y")} </>) : (format(field.value.from, "LLL dd, y")) ) : (<span>Pick a date range</span>)}
                        </Button></FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                        <Calendar mode="range" selected={field.value} onSelect={field.onChange} numberOfMonths={2} disabled={(date) => date < new Date(new Date().setDate(new Date().getDate() - 1))} />
                    </PopoverContent>
                    </Popover><FormMessage />
                </FormItem>
            )}/>
            <FormField control={form.control} name="addons" render={() => (
                <FormItem><div className="mb-4"><FormLabel>Add-ons</FormLabel></div>
                {addons.map((item) => (
                    <FormField key={item.id} control={form.control} name="addons" render={({ field }) => (
                        <FormItem key={item.id} className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl><Checkbox checked={field.value?.includes(item.id)} onCheckedChange={(checked) => {
                                return checked ? field.onChange([...(field.value || []), item.id]) : field.onChange(field.value?.filter((value) => value !== item.id))
                            }} /></FormControl>
                            <FormLabel className="font-normal">{item.label}</FormLabel>
                        </FormItem>
                    )}/>
                ))}<FormMessage /></FormItem>
            )}/>
            <FormField control={form.control} name="notes" render={({ field }) => (
                <FormItem><FormLabel>Notes</FormLabel><FormDescription>Any special instructions? (e.g., diet, temperament)</FormDescription><FormControl><Textarea placeholder="My dog is a bit shy at first..." {...field} /></FormControl><FormMessage /></FormItem>
            )}/>

            <Button type="submit" size="lg" className="w-full" disabled={loading}>
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Send Booking Request
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
