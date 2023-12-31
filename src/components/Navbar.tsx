
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from './index.module.scss';

const Navbar = () => {
  return (
    <div className={styles.container}>
       <MenuIcon className={styles.hamburgerIcon} />
       <div className={styles.search}>
           <input type="text" placeholder='Search for a product' />
            <SearchIcon className={styles.searchIcon} />
       </div>
      <div className={styles.cart}>
        <p>Sign in</p>
        <ShoppingCartIcon className={styles.shoppingCart} />
      </div>
    </div>
  )
}

export default Navbar