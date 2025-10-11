"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bed, Bath, Maximize, MapPin } from "lucide-react"
import type { Property } from "@/lib/types"

interface PropertyCardProps {
  property: Property
}

/**
 * PropertyCard Component
 *
 * Displays a property listing card with image, details, and pricing.
 * Includes hover effects and links to the property detail page.
 *
 * @component
 * @param {PropertyCardProps} props - Component props
 * @param {Property} props.property - Property data to display
 *
 * @example
 * \`\`\`tsx
 * <PropertyCard property={propertyData} />
 * \`\`\`
 */
export default function PropertyCard({ property }: PropertyCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  const formatPrice = (price: number) => {
    if (property.status === "rent") {
      return (
        new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(price) + "/mo"
      )
    }
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <Link href={`/property/${property.id}`}>
      <Card className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <img
            src={property.image || "/placeholder.svg"}
            alt={property.title}
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          <Badge className="absolute top-4 right-4 capitalize bg-background/90 backdrop-blur-sm">
            For {property.status}
          </Badge>
        </div>

        <CardContent className="p-6 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-xl font-semibold group-hover:text-primary transition-colors line-clamp-1">
                {property.title}
              </h3>
              <p className="text-xl font-bold whitespace-nowrap">{formatPrice(property.price)}</p>
            </div>

            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span className="line-clamp-1">{property.location}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-2 border-t border-border">
            <div className="flex items-center gap-1.5 text-sm">
              <Bed className="w-4 h-4 text-muted-foreground" />
              <span>{property.bedrooms}</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm">
              <Bath className="w-4 h-4 text-muted-foreground" />
              <span>{property.bathrooms}</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm">
              <Maximize className="w-4 h-4 text-muted-foreground" />
              <span>{property.area.toLocaleString()} sqft</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
