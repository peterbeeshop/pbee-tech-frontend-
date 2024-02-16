import { Link, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../../store/hooks'
import { userSelectors } from '../../../store/user'
import styles from './index.module.scss'

const Security = () => {
  const user = useAppSelector(userSelectors.selectUser)
  const navigate = useNavigate()
  const constantContent = [
    {
      heading: 'Names',
      text: user.firstName ? `${user.firstName} ${user.lastName}` : '--------',
      link: 'change-name',
    },
    {
      heading: 'Email',
      text: user.email,
      link: 'change-email',
    },
    {
      heading: 'Primary mobile number',
      text: '+26-XXXXXXXXXX',
      link: '#',
    },
    {
      heading: 'Password',
      text: '**************',
      link: 'change-password',
    },
  ]
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <section className={styles.breadcrumb}>
          <div className={styles.subHeading}>
            <Link className={styles.linkTag} to={'/account'}>
              Your Account
            </Link>{' '}
            &gt;
            <p> Login & Security</p>
          </div>
          <h5>Login & Security</h5>
        </section>
        <div className={styles.content}>
          {constantContent.map((item) => (
            <div className={styles.innerContent}>
              <section>
                <h6>{item.heading}</h6>
                <p>{item.text}</p>
              </section>
              <button onClick={() => navigate(item.link)}>Edit</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Security
