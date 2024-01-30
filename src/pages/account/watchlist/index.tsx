import { Link } from 'react-router-dom'
import ProductCard from '../../../components/product-card'
import styles from './index.module.scss'
import phoneImage from '../../../assets/dummy-pics/phoneImage.png'

const Watchlist = () => {
  const mywatchlist = [
    {
      name: 'iphone 6',
      price: 200,
      image: phoneImage,
      description:
        'this is a little description of the iphone 6this is a little description of the iphone 6this is a little description of the iphone 6this is a little description of the iphone 6',
      links: {
        firstLink: 'Add to cart',
        secondLink: 'Remove',
      },
    },
    {
      name: 'iphone 7 plus',
      price: 400,
      image: phoneImage,
      description: 'this is a little description of the 7 plus',
    },
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
          <ProductCard data={mywatchlist} />
        )}
      </div>
    </div>
  )
}

export default Watchlist
