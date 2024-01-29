import { Link } from 'react-router-dom'
import styles from './index.module.scss'

const ChangeEmail = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <section className={styles.breadcrumb}>
          <div className={styles.subHeading}>
            <Link className={styles.linkTag} to={'/account'}>
              Your Account
            </Link>{' '}
            &gt;
            <Link className={styles.linkTag} to={'/account/security'}>
              Login & Security
            </Link>{' '}
            &gt;
            <p> Change your email</p>
          </div>
          <h5>Change your email</h5>
        </section>
      </div>
    </div>
  )
}

export default ChangeEmail
