import stockPic from './iphone-x.jpeg'
import styles from './index.module.scss'
import { ProductCardType } from '../../../types/product'
import { useAppDispatch } from '../../../store/hooks'
import { cartActions } from '../../../store/cart'

type ProductCardProps = {
  product: ProductCardType
}
const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useAppDispatch()
  const handleAddToCart = () => {
    dispatch(cartActions.addProductToCart({ product }))
  }
  const { name, image, price } = product
  return (
    <div className={styles.container}>
      {image === '' ? (
        <img src={stockPic} alt="pic" />
      ) : (
        <img src={image} alt="pic" />
      )}
      <div className={styles.details}>
        <h5>{name}</h5>
        <section>
          <span>64GB</span>
          <span>k{price}</span>
        </section>
        <button onClick={handleAddToCart}>Add to cart</button>
      </div>
    </div>
  )
}

export default ProductCard
