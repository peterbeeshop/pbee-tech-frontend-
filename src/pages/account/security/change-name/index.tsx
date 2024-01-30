import { Link } from 'react-router-dom'
import styles from './index.module.scss'

const ChangeName = () => {
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
            <p> Change your name</p>
          </div>
          <h5>Change your name</h5>
        </section>
        <div className={styles.content}>
          <p>
            If you want to change the current email address associated with this
            account, you may do so below. <br /> Be sure to click the Save
            Changes button when you are done.
          </p>
          <div>
            <h6>New name</h6>
            <input type="text" placeholder="full name" />
          </div>
          <button>Save changes</button>
        </div>
      </div>
    </div>
  )
}

export default ChangeName
