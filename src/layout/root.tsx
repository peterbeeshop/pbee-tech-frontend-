import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import CloseIcon from '@mui/icons-material/Close'
import styles from './index.module.scss'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import { sidenavLinks } from '../constants'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { userActions, userSelectors } from '../store/user'
import { toast } from 'react-toastify'

const Root = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const userToken = useAppSelector(userSelectors.selectToken)

  const [isSidenavOpen, setIsSidenavOpen] = useState(false)

  const handleOpensidenav = () => {
    setIsSidenavOpen(!isSidenavOpen)
  }

  const onSuccess = () => navigate('/login')

  const handleLogout = () => {
    if (userToken) {
      dispatch(userActions.logoutUser({ onSuccess }))
    } else {
      toast.error('An unexpected error occured. Try again later...')
    }
  }

  return (
    <div className={styles.container}>
      <div
        className={`${styles.sidenav} ${isSidenavOpen ? styles.sidenavOpen : styles.sidenavClosed}`}
      >
        <div className={styles.innerContainer}>
          <p>Hello, Peter 👋</p>
          <CloseIcon onClick={handleOpensidenav} className={styles.closeIcon} />
        </div>

        <div className={styles.nameContainer}>
          {sidenavLinks.map((navLink) => (
            <section>
              <h4>{navLink.heading}</h4>
              {navLink.links.map((link) => (
                <>
                  {link.name !== 'Sign out' ? (
                    <Link className={styles.linkTag} to={link.to}>
                      {link.name}
                    </Link>
                  ) : (
                    <p className={styles.linkTag} onClick={handleLogout}>
                      {link.name}
                    </p>
                  )}
                </>
              ))}
            </section>
          ))}
        </div>
      </div>
      <div className={styles.navContainer}>
        <MenuIcon
          onClick={handleOpensidenav}
          className={styles.hamburgerIcon}
        />
        <div className={styles.search}>
          <input type="text" placeholder="Search for a product" />
          <SearchIcon className={styles.searchIcon} />
        </div>
        <div className={styles.cart}>
          <Link className={styles.link} to={'/login'}>
            Sign in
          </Link>

          <Link to={'/cart'}>
            <ShoppingCartIcon className={styles.shoppingCart} />
          </Link>
        </div>
      </div>
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  )
}

export default Root
