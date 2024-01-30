import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.scss'

type ProductCardType = {
  image: string
  name: string
  price: number
  description: string
  links?: {
    firstLink: string
    secondLink: string
  }
}

type MyComponentProps = {
  data: ProductCardType[]
}

const ProductCard = ({ data }: MyComponentProps) => {
  return (
    <>
      {data.map((product) => {
        const { image, description, name, price, links } = product
        return (
          <div className={styles.container}>
            <div className={styles.innerContainer}>
              <img src={image} alt="product-img" />
              <div className={styles.contentContainer}>
                <h5>{name}</h5>
                <h6>${price}</h6>
                <div className={styles.descripionAndLinkContainer}>
                  <p>{description}</p>
                  <div className={styles.linkContainer}>
                    <Link className={styles.link} to={'#'}>
                      Add to cart
                    </Link>
                    <p>|</p>
                    <Link className={styles.link} to={'#'}>
                      Remove
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ProductCard
