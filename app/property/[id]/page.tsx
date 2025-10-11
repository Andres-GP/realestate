import { notFound } from "next/navigation"
import PropertyDetail from "@/components/property-detail"
import { mockProperties } from "@/lib/mock-properties"

export default function PropertyPage({ params }: { params: { id: string } }) {
  const property = mockProperties.find((p) => p.id === params.id)

  if (!property) {
    notFound()
  }

  return <PropertyDetail property={property} />
}
