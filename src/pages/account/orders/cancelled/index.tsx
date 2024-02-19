import React from 'react'

import ProductCard from '../../../../components/product-card'
import { ProductType } from '../../../../types/product'
import styles from '../my-orders/index.module.scss'

type MyOrdersType = {
  myOrders: ProductType[]
}

const Cancelled = ({ myOrders }: MyOrdersType) => {
  return (
    <div className={styles.container}>
      {myOrders.length === 0 ? (
        <p className={styles.noOrderText}>
          All is well. No cancelled orders from your end!
        </p>
      ) : (
        <ProductCard data={myOrders} showQuantity />
      )}
    </div>
  )
}

export default Cancelled
