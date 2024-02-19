//type for a single product
export type ProductCardType = {
  _id: string
  image: string
  name: string
  price: number
  description?: string
  quantity?: number
  links?: {
    firstLink: string
    secondLink: string
  }
}
