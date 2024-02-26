import AddIcon from '@mui/icons-material/Add'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { addressActions, addressSelector } from '../../../store/account/address'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import styles from './index.module.scss'

const Address = () => {
  const dispatch = useAppDispatch()
  const usersAddress = useAppSelector(addressSelector.getAllAddress)
  const navigate = useNavigate()

  const deleteAddress = (_id?: string) => {
    if (_id) {
      dispatch(addressActions.deleteAddress({ _id }))
    } else {
      toast.error('An error occured removing item. Try again!')
    }
  }

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

      <div className={styles.address}>
        <div
          onClick={() => navigate('/account/address/create-address')}
          className={styles.innerContainer}
        >
          <AddIcon className={styles.addIcon} />
          <h4>Add Address</h4>
        </div>
        {usersAddress.map((address) => (
          <div className={styles.addressContainer}>
            <p className={styles.fullName}>{address.fullName}</p>
            <p>{address.street}</p>
            <p>
              {address.city} {address.province}
            </p>
            <p>Phone number: {address.phoneNumber}</p>
            <div className={styles.btnContainer}>
              <p onClick={() => deleteAddress(address?._id)}>Delete Address</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Address
