import styles from './index.module.scss'
import { accountLinks } from '../../constants'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'

const Account = () => {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <>
      {location.pathname === '/account' ? (
        <>
          <h5>Your Account</h5>
          <div className={styles.container}>
            {accountLinks.map((item) => (
              <div
                onClick={() => navigate(item.link)}
                className={styles.flexContainer}
              >
                <img src={item.image} alt="img" />
                <div className={styles.innerContainer}>
                  <h6>{item.heading}</h6>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <Outlet />
      )}
    </>
  )
}

export default Account
