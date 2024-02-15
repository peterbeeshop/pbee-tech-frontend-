import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useState } from 'react'
import { useAppSelector } from '../../store/hooks'
import { userSelectors } from '../../store/user'
import styles from './index.module.scss'

const Navbar = () => {
  const isUserLoggedIn = useAppSelector(userSelectors.selectIsUserLoggedIn)
  const user = useAppSelector(userSelectors.selectUser)

  console.log('logger', isUserLoggedIn)
  console.log('logger-user', user)
  const [open, setOpen] = useState(false)

  const handleOpenMenu = () => {
    setOpen(!open)
  }
  return (
    <div className={styles.container}>
      <MenuIcon onClick={handleOpenMenu} className={styles.hamburgerIcon} />
      <div className={styles.search}>
        <input type="text" placeholder="Search for a product" />
        <SearchIcon className={styles.searchIcon} />
      </div>
      <div className={styles.cart}>
        {/* {isUserLoggedIn ? <p>Sign out</p> : <p>Sign in</p>} */}

        <ShoppingCartIcon className={styles.shoppingCart} />
      </div>
    </div>
  )
}

export default Navbar
