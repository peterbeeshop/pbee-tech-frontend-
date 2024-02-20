import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AddressType } from '../../../../types/address'
import styles from './index.module.scss'

const CreateAddress = () => {
  const [addressDetails, setAddressDetails] = useState<AddressType>({
    fullName: '',
    street: '',
    city: '',
    province: '',
    phoneNumber: '',
  })

  const navigate = useNavigate()
  const handleSubmit = () => {
    console.log(addressDetails)
    // return navigate('/account/address')
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
            <input
              type="text"
              onChange={(e) =>
                setAddressDetails({
                  ...addressDetails,
                  fullName: e.target.value,
                })
              }
            />
          </div>
          <div>
            <h6>Street address</h6>
            <input
              type="text"
              onChange={(e) =>
                setAddressDetails({
                  ...addressDetails,
                  street: e.target.value,
                })
              }
            />
          </div>
          <div>
            <h6>City</h6>
            <input
              type="text"
              onChange={(e) =>
                setAddressDetails({
                  ...addressDetails,
                  city: e.target.value,
                })
              }
            />
          </div>
          <div>
            <h6>Province</h6>
            <input
              type="text"
              onChange={(e) =>
                setAddressDetails({
                  ...addressDetails,
                  province: e.target.value,
                })
              }
            />
          </div>
          <div>
            <h6>Phone number</h6>
            <input
              type="text"
              onChange={(e) =>
                setAddressDetails({
                  ...addressDetails,
                  phoneNumber: e.target.value,
                })
              }
            />
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
