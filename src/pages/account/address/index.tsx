import AddIcon from '@mui/icons-material/Add'
import { Link, useNavigate } from 'react-router-dom'
import styles from './index.module.scss'

const Address = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <section className={styles.breadcrumb}>
        <div className={styles.subHeading}>
          <Link className={styles.linkTag} to={'/account'}>
            Your Account
          </Link>{' '}
          &gt;
          <p> Your Address</p>
        </div>
        <h5>Your Addresses</h5>
      </section>

      <div
        onClick={() => navigate('/account/address/create-address')}
        className={styles.innerContainer}
      >
        <AddIcon className={styles.addIcon} />
        <h4>Add Address</h4>
      </div>
    </div>
  )
}

export default Address
