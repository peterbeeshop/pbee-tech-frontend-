import { Link, useNavigate, redirect } from 'react-router-dom'
import styles from './index.module.scss'

const CreateAddress = () => {
  const navigate = useNavigate()
  const handleSubmit = () => {
    return navigate('/account/address')
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <section className={styles.breadcrumb}>
          <div className={styles.subHeading}>
            <Link className={styles.linkTag} to={'/account'}>
              Your Account
            </Link>{' '}
            &gt;
            <Link className={styles.linkTag} to={'/account/address'}>
              Your Address
            </Link>{' '}
            &gt;
            <p>New Address</p>
          </div>
          <h5>Add a new Address</h5>
        </section>
        <div>
          <div>
            <h6>Full name (first & last name)</h6>
            <input type="text" />
          </div>
          <div>
            <h6>Street address</h6>
            <input type="text" />
          </div>
          <div>
            <h6>City</h6>
            <input type="text" />
          </div>
          <div>
            <h6>Province</h6>
            <input type="text" />
          </div>
          <div>
            <h6>Phone number</h6>
            <input type="text" />
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button onClick={handleSubmit}>Add address</button>
        </div>
      </div>
    </div>
  )
}

export default CreateAddress
