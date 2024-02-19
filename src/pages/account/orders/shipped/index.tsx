import ProductCard from '../../../../components/product-card'
import { ProductCardType } from '../../../../types/product'
import styles from '../my-orders/index.module.scss'

type MyOrdersType = {
  myOrders: ProductCardType[]
}

const Shipped = ({ myOrders }: MyOrdersType) => {
  return (
    <div className={styles.container}>
      {myOrders.length === 0 ? (
        <p className={styles.noOrderText}>
          Either all your orders have been shipped & received or are in the{' '}
          <br /> process of being shipped if any.
        </p>
      ) : (
        <ProductCard data={myOrders} showQuantity />
      )}
    </div>
  )
}

export default Shipped
