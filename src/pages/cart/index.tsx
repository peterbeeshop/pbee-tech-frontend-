import { Link } from 'react-router-dom'
import styles from './index.module.scss'
import phoneImage from '../../assets/dummy-pics/phoneImage.png'
import CartItem from './cart-item'
import { useAppSelector } from '../../store/hooks'
import { cartSelectors } from '../../store/cart'

const Cart = () => {
  const itemsInCart = useAppSelector(cartSelectors.itemsInCart)
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
          <div className={styles.shoppingCart}>
            <h5>Shopping Cart</h5>
            <CartItem cartItem={itemsInCart} />
          </div>
          <div className={styles.checkout}>
            <h6>Subtotal (2 items):</h6>
            <p>$300.45</p>
            <button>Proceed to checkout</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
