import React from 'react'
import { Link } from 'react-router-dom'
import { ProductCardType } from '../../../types/product'
import styles from './index.module.scss'

type CartItemType = {
  cartItem: ProductCardType[]
}

const CartItem = ({ cartItem }: CartItemType) => {
  return (
    <>
      {cartItem.map((item) => {
        const { image, name, price, links } = item
        return (
          <div className={styles.container}>
            <img src={image} alt="cart-item-img" />
            <div>
              <h5>{name}</h5>
              <h6>$ {price}</h6>
              <section>
                <select name="cart-values" id="cart-values">
                  <option value="0">0 (Delete)</option>
                  <option value="1" selected>
                    Quantity: 1
                  </option>
                  <option value="2">Quantity: 2</option>
                  <option value="3">Quantity: 3</option>
                  <option value="4">Quantity: 4</option>
                  <option value="5">Quantity: 5</option>
                </select>
                <div className={styles.linkContainer}>
                  <Link className={styles.link} to={'#'}>
                    Delete
                  </Link>
                  <p>|</p>
                  <Link className={styles.link} to={'#'}>
                    Add to Watchlist
                  </Link>
                </div>
              </section>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default CartItem
