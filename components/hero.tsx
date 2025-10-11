"use client";

import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Hero Component
 *
 * Full-screen hero section with background image and call-to-action.
 * Includes smooth scroll functionality to the properties section.
 *
 * @component
 * @example
 * \`\`\`tsx
 * <Hero />
 * \`\`\`
 */
export default function Hero() {
  const scrollToListings = () => {
    const listingsSection = document.getElementById("properties");
    listingsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/luxury-modern-real-estate-architecture-exterior.jpg"
          alt="Luxury property"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance leading-[1.1]">
            Discover Your
            <br />
            <span className="italic font-light">Dream Home</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Explore exceptional properties curated for those who appreciate
            refined living and architectural excellence
          </p>

          <div className="flex items-center justify-center pt-4">
            <Button
              size="lg"
              onClick={scrollToListings}
              className="text-base px-8"
            >
              Explore Properties
            </Button>
          </div>
        </div>

        <button
          onClick={scrollToListings}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
          aria-label="Scroll to properties"
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </button>
      </div>
    </section>
  );
}
