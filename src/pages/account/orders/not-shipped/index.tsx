import ProductCard from '../../../../components/product-card'
import { ProductCardType } from '../../../../types'
import styles from '../my-orders/index.module.scss'

type MyOrdersType = {
  myOrders: ProductCardType[]
}

const NotShipped = ({ myOrders }: MyOrdersType) => {
  return (
    <div className={styles.container}>
      {myOrders.length === 0 ? (
        <p className={styles.noOrderText}>
          Either all your orders have been shipped or there is nothing to ship.
        </p>
      ) : (
        <ProductCard data={myOrders} showQuantity />
      )}
    </div>
  )
}

export default NotShipped
