import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { editUserActions } from '../../../../store/account/security'
import { useAppDispatch } from '../../../../store/hooks'
import styles from './index.module.scss'

const ChangePassword = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')

  const handleChangePassword = () => {
    if (newPassword === confirmNewPassword) {
      dispatch(
        editUserActions.changeUserPassword({
          oldPassword,
          newPassword,
          onSuccess: () => navigate(-1),
        }),
      )
    } else {
      toast.error('Your new password and confirm new password did not match!')
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
            <p> Change your password</p>
          </div>
          <h5>Change your password</h5>
        </section>
        <div className={styles.content}>
          <p>Use the form below to change your password.</p>
          <div>
            <h6>Current Password</h6>
            <input
              type="text"
              onChange={(e) => setOldPassword(e.target.value)}
              value={oldPassword}
              placeholder="current password"
            />
          </div>
          <div>
            <h6>New Password</h6>
            <input
              type="text"
              onChange={(e) => setNewPassword(e.target.value)}
              value={newPassword}
              placeholder="Your new password"
            />
          </div>
          <div>
            <h6>Confirm Password</h6>
            <input
              type="text"
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              value={confirmNewPassword}
              placeholder="confirm new password"
            />
          </div>
          <button onClick={handleChangePassword}>Save changes</button>
        </div>
      </div>
    </div>
  )
}

export default ChangePassword
