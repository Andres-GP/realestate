# Component Documentation

This document provides detailed information about each component in the RealEstate application.

## Table of Contents

- [Header](#header)
- [Hero](#hero)
- [PropertyCard](#propertycard)
- [PropertySearch](#propertysearch)
- [PropertyFilters](#propertyfilters)
- [PropertyListings](#propertylistings)
- [PropertyDetail](#propertydetail)
- [About](#about)
- [Contact](#contact)
- [Footer](#footer)

---

## Header

**File**: `components/header.tsx`

A responsive navigation header with smooth scroll functionality. Features a fixed position that becomes translucent on scroll.

### Props

None (standalone component)

### Features

- Fixed positioning with scroll-based styling
- Smooth scroll navigation to page sections
- Mobile-responsive with hamburger menu
- Backdrop blur effect when scrolled

### Usage

\`\`\`tsx
import Header from "@/components/header"

export default function Layout() {
  return (
    <>
      <Header />
      {/* Rest of your content */}
    </>
  )
}
\`\`\`

### Tests

- Renders logo and navigation links
- Toggles mobile menu on button click
- Calls scrollIntoView when navigation links are clicked
- Applies scrolled styles when page is scrolled

---

## Hero

**File**: `components/hero.tsx`

Full-screen hero section with background image and call-to-action. Includes smooth scroll functionality to the properties section.

### Props

None (standalone component)

### Features

- Full-screen layout with background image
- Gradient overlay for text readability
- Call-to-action button with smooth scroll
- Animated scroll indicator

### Usage

\`\`\`tsx
import Hero from "@/components/hero"

export default function HomePage() {
  return <Hero />
}
\`\`\`

### Tests

- Renders main heading and description
- Renders Explore Properties button
- Scrolls to properties section when button is clicked
- Renders scroll down arrow button

---

## PropertyCard

**File**: `components/property-card.tsx`

Displays a property listing card with image, details, and pricing. Includes hover effects and links to the property detail page.

### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| property | Property | Yes | Property data object containing all listing information |

### Property Type

\`\`\`typescript
interface Property {
  id: string
  title: string
  price: number
  location: string
  bedrooms: number
  bathrooms: number
  area: number
  image: string
  type: "house" | "apartment"
  status: "sale" | "rent"
  description: string
}
\`\`\`

### Features

- Image lazy loading with fade-in effect
- Hover scale animation on image
- Status badge (For Sale/For Rent)
- Formatted pricing with currency
- Property details (bedrooms, bathrooms, area)
- Links to property detail page

### Usage

\`\`\`tsx
import PropertyCard from "@/components/property-card"

const property = {
  id: "1",
  title: "Modern Loft",
  price: 850000,
  location: "New York, NY",
  // ... other properties
}

export default function PropertyGrid() {
  return <PropertyCard property={property} />
}
\`\`\`

### Tests

- Renders property title, location, and price
- Formats price correctly for sale and rent
- Renders property details (bedrooms, bathrooms, area)
- Renders status badge
- Links to correct property detail page

---

## PropertySearch

**File**: `components/property-search.tsx`

Search input for filtering properties by location, title, or description.

### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| searchQuery | string | Yes | Current search query value |
| setSearchQuery | (query: string) => void | Yes | Function to update search query |

### Features

- Real-time search input
- Search icon indicator
- Large, accessible input field

### Usage

\`\`\`tsx
import PropertySearch from "@/components/property-search"
import { useState } from "react"

export default function SearchSection() {
  const [query, setQuery] = useState("")
  
  return (
    <PropertySearch 
      searchQuery={query} 
      setSearchQuery={setQuery} 
    />
  )
}
\`\`\`

### Tests

- Renders search input with placeholder
- Displays current search query value
- Calls setSearchQuery when input changes
- Renders search icon

---

## PropertyFilters

**File**: `components/property-filters.tsx`

Advanced filtering interface for properties with type, status, price range, and bedroom filters.

### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| filters | FilterState | Yes | Current filter values |
| setFilters | (filters: FilterState) => void | Yes | Function to update filters |

### FilterState Type

\`\`\`typescript
interface FilterState {
  type: string          // "all" | "house" | "apartment"
  minPrice: number      // Minimum price
  maxPrice: number      // Maximum price
  bedrooms: string      // "all" | "1" | "2" | "3" | "4" | "5"
  status: string        // "all" | "sale" | "rent"
}
\`\`\`

### Features

- Property type filter (House/Apartment)
- Status filter (Sale/Rent)
- Bedroom count filter
- Price range slider with formatted display
- Responsive grid layout

### Usage

\`\`\`tsx
import PropertyFilters from "@/components/property-filters"
import { useState } from "react"

export default function FilterSection() {
  const [filters, setFilters] = useState({
    type: "all",
    minPrice: 0,
    maxPrice: 5000000,
    bedrooms: "all",
    status: "all",
  })
  
  return (
    <PropertyFilters 
      filters={filters} 
      setFilters={setFilters} 
    />
  )
}
\`\`\`

### Tests

- Renders filter heading and labels
- Displays current price range
- Renders all select inputs (type, status, bedrooms)
- Updates filters when selections change

---

## PropertyListings

**File**: `components/property-listings.tsx`

Main listings section that displays filtered and searchable property cards. Manages search, filtering, and loading states.

### Props

None (standalone component with internal state management)

### Features

- Property data fetching with loading state
- Real-time search filtering
- Multi-criteria filtering (type, status, price, bedrooms)
- Responsive grid layout
- Empty state handling
- Loading spinner

### Internal State

- `properties`: All available properties
- `filteredProperties`: Properties after applying filters
- `loading`: Loading state indicator
- `searchQuery`: Current search term
- `filters`: Active filter values

### Usage

\`\`\`tsx
import PropertyListings from "@/components/property-listings"

export default function HomePage() {
  return (
    <main>
      <PropertyListings />
    </main>
  )
}
\`\`\`

### Tests

- Renders section heading
- Shows loading spinner initially
- Renders property cards after loading
- Renders search and filter components
- Shows no results message when appropriate

---

## PropertyDetail

**File**: `components/property-detail.tsx`

Detailed view of a single property with comprehensive information and contact options.

### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| property | Property | Yes | Property data object |

### Features

- Large property image display
- Comprehensive property information
- Price and location details
- Property specifications (bedrooms, bathrooms, area, type)
- Contact buttons (Schedule Tour, Contact Agent)
- Back navigation

### Usage

\`\`\`tsx
import PropertyDetail from "@/components/property-detail"

export default function PropertyPage({ property }) {
  return <PropertyDetail property={property} />
}
\`\`\`

---

## About

**File**: `components/about.tsx`

Company information and mission statement section.

### Props

None (standalone component)

### Features

- Company overview
- Mission statement
- Statistics display
- Responsive layout with image

### Usage

\`\`\`tsx
import About from "@/components/about"

export default function HomePage() {
  return <About />
}
\`\`\`

---

## Contact

**File**: `components/contact.tsx`

Contact form section for user inquiries.

### Props

None (standalone component)

### Features

- Contact form with validation
- Name, email, and message fields
- Submit button
- Responsive layout

### Usage

\`\`\`tsx
import Contact from "@/components/contact"

export default function HomePage() {
  return <Contact />
}
\`\`\`

---

## Footer

**File**: `components/footer.tsx`

Site footer with links and information.

### Props

None (standalone component)

### Features

- Company branding
- Navigation links
- Social media links
- Copyright information

### Usage

\`\`\`tsx
import Footer from "@/components/footer"

export default function Layout() {
  return (
    <>
      {/* Page content */}
      <Footer />
    </>
  )
}
\`\`\`

---

## Testing

All components include comprehensive test coverage using Vitest and React Testing Library. Tests cover:

- Component rendering
- User interactions
- State management
- Prop handling
- Accessibility features

To run tests:

\`\`\`bash
pnpm test              # Run all tests
pnpm test:watch        # Run tests in watch mode
pnpm test:coverage     # Generate coverage report
\`\`\`

## Best Practices

1. **Props Validation**: All components use TypeScript for type safety
2. **Accessibility**: Components include proper ARIA labels and semantic HTML
3. **Responsive Design**: All components are mobile-first and fully responsive
4. **Performance**: Images use lazy loading and components are optimized
5. **Documentation**: JSDoc comments provide inline documentation
\`\`\`
