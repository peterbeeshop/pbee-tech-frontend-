import { useEffect, useState } from 'react'
import styles from './index.module.scss'
import ProductCard from './card'
import Carousel from '../../components/carousel'
import bannerImage1 from '../../assets/banner/banner-1.png'
import bannerImage2 from '../../assets/banner/banner-2.png'
import bannerImage3 from '../../assets/banner/banner-3.png'
import { getAllProducts } from '../../services/product.services'
import { ProductCardType } from '../../types/product'

const Homepage = () => {
  const [allProducts, setAllProducts] = useState<ProductCardType[]>([])
  const carouselArray = [bannerImage1, bannerImage2, bannerImage3]

  useEffect(() => {
    const fetchData = async () => {
      const products = await getAllProducts()
      setAllProducts(products)
    }
    fetchData()
  }, [])

  console.log('pro', allProducts)

  return (
    <>
      <div className={styles.container}>
        {/* banner */}
        <Carousel arr={carouselArray} />
        <h3>All products</h3>
        <div className={styles.productContainer}>
          {allProducts.length === 0 ? (
            <p>No products to show</p>
          ) : (
            allProducts.map((pro) => (
              <ProductCard key={pro._id} product={pro} />
            ))
          )}
        </div>
      </div>
    </>
  )
}

export default Homepage
