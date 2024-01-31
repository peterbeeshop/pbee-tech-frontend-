

export type ProductCardType = {
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