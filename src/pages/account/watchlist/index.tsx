import { Link } from 'react-router-dom'
import styles from './index.module.scss'

const Watchlist = () => {
  const mywatchlist = [
    // { price: '$200', nameOfProduct: 'iphone 6', imagesOfProduct: '' },
    // { price: '$300', nameOfProduct: 'iphone 7 plus', imagesOfProduct: '' },
  ]

  return (
    <div className={styles.container}>
      <section className={styles.breadcrumb}>
        <div className={styles.subHeading}>
          <Link className={styles.linkTag} to={'/account'}>
            Your Account
          </Link>{' '}
          &gt;
          <p>Your Watchlist</p>
        </div>
        <h5>Your Watchlist</h5>
      </section>
      <div className={styles.content}>
        {mywatchlist.length === 0 ? (
          <div className={styles.emptyWatchlist}>
            <p>
              oooooopps looks like you don't have anything in your watchlist.
            </p>
            <Link className={styles.link} to={'/home'}>
              Browse Products
            </Link>
          </div>
        ) : (
          'some staff to show'
        )}
      </div>
    </div>
  )
}

export default Watchlist
