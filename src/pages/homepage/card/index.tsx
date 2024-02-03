import Button from '../../../components/button'
import stockPic from './iphone-x.jpeg'
import styles from './index.module.scss'

const ProductCard = () => {
  return (
    <div className={styles.container}>
      <img src={stockPic} alt="pic" />
      <h5>iphone X</h5>
      <section>
        <span>64GB</span>
        <span>k3800</span>
      </section>
      <button>Add to cart</button>
    </div>
  )
}

export default ProductCard
