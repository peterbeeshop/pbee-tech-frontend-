import { Link } from 'react-router-dom'
import styles from './index.module.scss'

const Cart = () => {
  const itemsInCart = []
  return (
    <div className={styles.container}>
      {itemsInCart.length === 0 ? (
        <div className={styles.emptyCart}>
          <h5>Your Shopping Cart is Empty</h5>
          <p>
            Your Shopping Cart lives to serve. Give it purpose by adding
            different products such as laptops, phones and other types of
            electronics to it. Or visit the{' '}
            <Link className={styles.link} to={'/'}>
              homepage
            </Link>{' '}
            for all deals
          </p>
        </div>
      ) : (
        <div className={styles.cart}>
          <h6>some items in cart</h6>
        </div>
      )}
    </div>
  )
}

export default Cart
