import ProductCard from '../../../../components/product-card'
import { ProductType } from '../../../../types/product'
import styles from './index.module.scss'

type MyOrdersType = {
  myOrders: ProductType[]
}

const MyOrders = ({ myOrders }: MyOrdersType) => {
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

export default MyOrders
