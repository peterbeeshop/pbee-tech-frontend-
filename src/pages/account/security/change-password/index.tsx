import { Link } from 'react-router-dom'
import styles from './index.module.scss'

const ChangePassword = () => {
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
            <p> Change your password</p>
          </div>
          <h5>Change your password</h5>
        </section>
        <div className={styles.content}>
          <p>Use the form below to change your password.</p>
          <div>
            <h6>Current Password</h6>
            <input type="text" placeholder="current password" />
          </div>
          <div>
            <h6>New Password</h6>
            <input type="text" placeholder="Your new password" />
          </div>
          <div>
            <h6>Confirm Password</h6>
            <input type="text" placeholder="confirm new password" />
          </div>
          <button>Save changes</button>
        </div>
      </div>
    </div>
  )
}

export default ChangePassword
