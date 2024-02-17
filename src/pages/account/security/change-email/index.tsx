import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { editUserActions } from '../../../../store/account/security'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { userSelectors } from '../../../../store/user'
import { AppUser } from '../../../../types/user'
import styles from './index.module.scss'

const ChangeEmail = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const user: Partial<AppUser> = useAppSelector(userSelectors.selectUser)

  const [email, setEmail] = useState(user.email!)

  const handleEdit = () => {
    if (user.email === email) {
      toast.error('Your new email cannot be the same as the old email.')
    } else {
      dispatch(
        editUserActions.changeUserEmail({
          email,
          onSuccess: () => navigate(-1),
        }),
      )
    }
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
            <Link className={styles.linkTag} to={'/account/security'}>
              Login & Security
            </Link>{' '}
            &gt;
            <p> Change your email</p>
          </div>
          <h5>Change your email</h5>
        </section>
        <div className={styles.content}>
          <p>
            If you want to change the current email address associated with this
            account, you <br />
            may do so below. Be sure to click the Save Changes button when you
            are done.
          </p>
          <div>
            <h6>New name</h6>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder={user.email ? user.email : 'Email address'}
            />
          </div>
          <button onClick={handleEdit}>Save changes</button>
        </div>
      </div>
    </div>
  )
}

export default ChangeEmail
