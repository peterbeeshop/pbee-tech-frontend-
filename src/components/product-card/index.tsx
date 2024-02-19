import { Link } from 'react-router-dom'
import { ProductCardType } from '../../types/product'
import styles from './index.module.scss'

type MyComponentProps = {
  data: ProductCardType[]
  showQuantity: boolean //a boolean to whether show the quantity or the description
}

const ProductCard = ({ data, showQuantity }: MyComponentProps) => {
  return (
    <>
      {data.map((product) => {
        const { image, description, name, price, links, quantity } = product
        return (
          <div className={styles.container}>
            <div className={styles.innerContainer}>
              <img src={image} alt="product-img" />
              <div className={styles.contentContainer}>
                <h5>{name}</h5>
                <h6>${price}</h6>
                <div className={styles.descripionAndLinkContainer}>
                  {showQuantity ? (
                    <h6>
                      Quantity: <strong>{quantity}</strong>
                    </h6>
                  ) : (
                    <p>{description}</p>
                  )}

                  {links === undefined ? (
                    ''
                  ) : (
                    <div className={styles.linkContainer}>
                      <Link className={styles.link} to={'#'}>
                        Add to cart
                      </Link>
                      <p>|</p>
                      <Link className={styles.link} to={'#'}>
                        Remove
                      </Link>
                    </div>
                  )}
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
