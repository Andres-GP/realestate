"use client"

import { useState, useEffect } from "react"
import PropertyCard from "@/components/property-card"
import PropertyFilters from "@/components/property-filters"
import PropertySearch from "@/components/property-search"
import { Loader2 } from "lucide-react"
import type { Property } from "@/lib/types"
import { mockProperties } from "@/lib/mock-properties"

/**
 * PropertyListings Component
 *
 * Main listings section that displays filtered and searchable property cards.
 * Manages search, filtering, and loading states.
 *
 * @component
 * @example
 * \`\`\`tsx
 * <PropertyListings />
 * \`\`\`
 */
export default function PropertyListings() {
  const [properties, setProperties] = useState<Property[]>([])
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [filters, setFilters] = useState({
    type: "all",
    minPrice: 0,
    maxPrice: 10000000,
    bedrooms: "all",
    status: "all",
  })

  useEffect(() => {
    fetchProperties()
  }, [])

  useEffect(() => {
    applyFilters()
  }, [properties, searchQuery, filters])

  const fetchProperties = async () => {
    try {
      setLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 800))
      setProperties(mockProperties)
      setFilteredProperties(mockProperties)
    } catch (error) {
      console.error("Error fetching properties:", error)
    } finally {
      setLoading(false)
    }
  }

  const applyFilters = () => {
    let filtered = [...properties]

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (property) =>
          property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          property.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    // Type filter
    if (filters.type !== "all") {
      filtered = filtered.filter((property) => property.type === filters.type)
    }

    if (filters.status !== "all") {
      filtered = filtered.filter((property) => property.status === filters.status)
    }

    // Price filter
    filtered = filtered.filter((property) => property.price >= filters.minPrice && property.price <= filters.maxPrice)

    // Bedrooms filter
    if (filters.bedrooms !== "all") {
      const bedroomCount = Number.parseInt(filters.bedrooms)
      filtered = filtered.filter((property) => property.bedrooms >= bedroomCount)
    }

    setFilteredProperties(filtered)
  }

  return (
    <section id="properties" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
            Featured Properties
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Discover our carefully curated selection of exceptional properties, each offering unique character and
            unparalleled quality
          </p>
        </div>

        <div className="space-y-8 mb-12">
          <PropertySearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <PropertyFilters filters={filters} setFilters={setFilters} />
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
          </div>
        ) : filteredProperties.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-lg text-muted-foreground">No properties found matching your criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
