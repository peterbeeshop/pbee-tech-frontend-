import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { editUserActions } from '../../../../store/account/security'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { userSelectors } from '../../../../store/user'
import styles from './index.module.scss'

const ChangeName = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const user = useAppSelector(userSelectors.selectUser)
  const [firstName, setFirstName] = useState(user.firstName!)
  const [lastName, setLastName] = useState(user.lastName!)

  const onSuccess = () => navigate(-1)
  const handleEdit = () => {
    dispatch(
      editUserActions.changeUserNames({ firstName, lastName, onSuccess }),
    )
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
            <h6>First name</h6>
            <input
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              placeholder={user.firstName ? user.firstName : 'First name'}
            />
          </div>
          <div>
            <h6>Last name</h6>
            <input
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              placeholder={user.lastName ? user.lastName : 'Last name'}
            />
          </div>
          <button onClick={handleEdit}>Save changes</button>
        </div>
      </div>
    </div>
  )
}

export default ChangeName
