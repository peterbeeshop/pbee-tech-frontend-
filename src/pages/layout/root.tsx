import {useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import styles from './index.module.scss';
import { Outlet, Link } from 'react-router-dom'
import { sidenavLinks } from '../../constants'

const Root = () => {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);

  const handleOpensidenav = () => {
    setIsSidenavOpen(!isSidenavOpen)
  }

  return (
    <div className={styles.container}>
      <div className={`${styles.sidenav} ${isSidenavOpen ? styles.sidenavOpen : styles.sidenavClosed}`}>
        <div className={styles.innerContainer}>
          <p>Hello, Peter 👋</p>
          <CloseIcon onClick={handleOpensidenav} className={styles.closeIcon} />
        </div>

        <div className={styles.nameContainer}>
          {sidenavLinks.map((navLink) => (
            <section>
              <h4>{navLink.heading}</h4>
              {navLink.links.map((link) => <Link className={styles.linkTag} to={link.to}>{link.name}</Link>)}
            </section>
          ))}
        </div>

      </div>
      <div className={styles.navContainer}>
        <MenuIcon onClick={handleOpensidenav} className={styles.hamburgerIcon} />
        <div className={styles.search}>
            <input type="text" placeholder='Search for a product' />
            <SearchIcon className={styles.searchIcon} />
        </div>
        <div className={styles.cart}>
          <p>Sign in</p>
          <Link to={'/cart'}>
              <ShoppingCartIcon className={styles.shoppingCart} />
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Root