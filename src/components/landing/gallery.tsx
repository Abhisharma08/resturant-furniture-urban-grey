
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const galleryItems = [
  {
    title: "Casual Dining Tables",
    description: "Sturdy, easy-to-clean surfaces built for daily high traffic.",
    image: "https://res.cloudinary.com/dtc8bbbco/image/upload/v1756537629/WhatsApp_Image_2025-08-30_at_12.29.20_PM_see0p5.jpg",
    hint: "Casual Dining Tables",
  },
  {
    title: "Booth & Lounge Seating",
    description: "Comfortable setups that create cozy, social, and welcoming zones.",
    image: "https://res.cloudinary.com/dtc8bbbco/image/upload/v1756537629/WhatsApp_Image_2025-08-30_at_12.29.19_PM_umpbbp.jpg",
    hint: "Booth & Lounge Seating",
  },
  {
    title: "Outdoor & Patio Furniture",
    description: "Durable solutions for terraces, rooftops, and open-air dining.",
    image: "https://res.cloudinary.com/dtc8bbbco/image/upload/v1756537629/WhatsApp_Image_2025-08-30_at_12.29.18_PM_jodaae.jpg",
    hint: "Outdoor & Patio Furniture",
  },

];

export function Gallery() {
  return (
    <section id="gallery" className="bg-background py-20 sm:py-28">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl text-foreground">
            Products <span className="text-accent">Gallery</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-foreground/80 md:text-xl">
        Designed for comfort. Crafted for community. Explore our best-selling cafeteria collections
          </p>
        </div>
        <div className="mt-16">
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4">
            {galleryItems.map((item) => (
              <div key={item.title} className="overflow-hidden rounded-lg shadow-lg bg-card text-card-foreground flex flex-col">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  data-ai-hint={item.hint}
                />
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="font-headline text-xl font-bold">{item.title}</h3>
                  <p className="mt-2 text-foreground/80 text-base flex-grow">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 text-center">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
            <Link href="#get-a-quote">Get a Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
