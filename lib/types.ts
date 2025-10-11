export interface Property {
  id: string
  title: string
  price: number
  location: string
  bedrooms: number
  bathrooms: number
  area: number
  image: string
  type: "apartment" | "house"
  status: "sale" | "rent"
}
