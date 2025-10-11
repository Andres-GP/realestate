"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

interface PropertySearchProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
}

/**
 * PropertySearch Component
 *
 * Search input for filtering properties by location, title, or description.
 *
 * @component
 * @param {PropertySearchProps} props - Component props
 * @param {string} props.searchQuery - Current search query value
 * @param {function} props.setSearchQuery - Function to update search query
 *
 * @example
 * \`\`\`tsx
 * <PropertySearch
 *   searchQuery={query}
 *   setSearchQuery={setQuery}
 * />
 * \`\`\`
 */
export default function PropertySearch({ searchQuery, setSearchQuery }: PropertySearchProps) {
  return (
    <div className="relative max-w-2xl">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Search by location, title, or description..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pl-12 h-14 text-base"
      />
    </div>
  )
}
