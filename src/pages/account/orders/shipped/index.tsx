import ProductCard from '../../../../components/product-card'
import { ProductCardType } from '../../../../types'
import styles from '../my-orders/index.module.scss'

type MyOrdersType = {
  myOrders: ProductCardType[]
}

const Shipped = ({ myOrders }: MyOrdersType) => {
  return (
    <div className={styles.container}>
      {myOrders.length === 0 ? (
        <p className={styles.noOrderText}>
          Looks like you haven't placed any order yet.
        </p>
      ) : (
        <ProductCard data={myOrders} showQuantity />
      )}
    </div>
  )
}

export default Shipped