"use client";
import Image, { type StaticImageData } from 'next/image';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AnimatedSection } from '@/components/animated-section';
import { WaveDivider } from '@/components/wave-divider';
import { Badge } from '@/components/ui/badge';

const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));
const filters = ["All", "Daycare", "Boarding", "Grooming", "Facility"];

const imageCategories: { [key: string]: string } = {
    'gallery-1': 'Daycare', 'gallery-2': 'Boarding', 'gallery-3': 'Grooming',
    'gallery-4': 'Daycare', 'gallery-5': 'Facility', 'gallery-6': 'Grooming',
    'gallery-7': 'Facility', 'gallery-8': 'Daycare',
};

type SelectedImage = ImagePlaceholder & { category: string };

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredImages = activeFilter === "All"
    ? galleryImages
    : galleryImages.filter(img => imageCategories[img.id] === activeFilter);
  
  return (
    <>
      <section className="bg-secondary relative">
        <div className="container mx-auto max-w-[1400px] px-4 py-20 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-4xl font-bold md:text-5xl font-headline">Gallery</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              A glimpse into the happy life at Ultimutt Pet Resort.
            </p>
          </AnimatedSection>
        </div>
        <WaveDivider position="bottom" colorClassName="text-secondary" />
      </section>

      <section>
        <AnimatedSection>
          <Tabs value={activeFilter} onValueChange={setActiveFilter} className="w-full mb-8">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 max-w-2xl mx-auto h-auto">
              {filters.map(filter => (
                <TabsTrigger key={filter} value={filter} className="py-2">{filter}</TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </AnimatedSection>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {filteredImages.map((image, index) => (
            <AnimatedSection key={image.id} delay={index * 50}>
              <div
                className="overflow-hidden rounded-lg cursor-pointer group break-inside-avoid"
                onClick={() => setSelectedImage({ ...image, category: imageCategories[image.id] })}
              >
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  width={600}
                  height={Math.random() > 0.5 ? 800 : 600}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={image.imageHint}
                />
              </div>
            </AnimatedSection>
          ))}
        </div>

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-2">
            {selectedImage && (
              <>
                <Image
                  src={selectedImage.imageUrl}
                  alt={selectedImage.description}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain rounded-lg max-h-[80vh]"
                  data-ai-hint={selectedImage.imageHint}
                />
                <div className="absolute bottom-4 left-4 bg-black/50 text-white p-2 rounded-lg text-sm">
                    <p>{selectedImage.description}</p>
                    <Badge variant="secondary" className="mt-2">{selectedImage.category}</Badge>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </section>
    </>
  );
}
