import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../login/index.module.scss'
import logo from '../../assets/logo.png'
import googleLogo from '../../assets/google.png'
import banner from '../login/assets/saly.svg'
import { signup } from '../../services/auth.services'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const SignUp = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('s')

  const handleSubmit = async () => {
    try {
      const user = await signup(email, password)
      toast.success(user.data)
      navigate('/login')
    } catch (error: any) {
      if (error.response) {
        const { status, data } = error.response

        // Set the message based on the status code
        if (status === 409) {
          setMessage(data) // Message for conflict (user already exists)
          toast.error(data)
        } else {
          toast.error('An unexpected error occurred. Please try again!') // Default message for other errors
        }
      } else if (error.request) {
        // The request was made but no response was received
        toast.error('No response from the server.')
      } else {
        // Something happened in setting up the request that triggered an error
        toast.error('An unexpected error occurred. Please try again!')
      }
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.blueContainer}>
        <Link to="/">
          <img src={logo} alt="logo" className={styles.logo} />
        </Link>
        <div className={styles.innerContainer}>
          <section>
            <h3>Sign Up to</h3>
            {message}
            <h6>Pbee Tech</h6>
            <p>
              Pbee Tech is an online and physical store that sells <br />{' '}
              electronic gadgets such as mobile phones, computer <br />{' '}
              accessories, laptops, and consoles. We are located in <br />
              Kitwe, Zambia.
            </p>
          </section>
          <img src={banner} alt="banner" className={styles.banner} />

          {/* card */}
          <section className={styles.card}>
            <div className={styles.greeting}>
              <p>
                Welcome to <strong>Pbee Tech</strong>
              </p>
              <p>
                Have an Account ? <br />{' '}
                <span>
                  <Link to="/login" className={styles.link}>
                    Sign in
                  </Link>
                </span>
              </p>
            </div>
            <h3>Sign up</h3>

            <div className={styles.email}>
              <p className={styles.text}>Enter your email address</p>
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Email address"
              />
            </div>

            <div className={styles.password}>
              <p className={styles.text}>Enter your password</p>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <button onClick={handleSubmit}>Sign up</button>
            <span className={styles.or}>OR</span>
            <div className={styles.googleSignIn}>
              <img
                src={googleLogo}
                alt="googleLogo"
                className={styles.googleLogo}
              />
              <span>Sign up with Google</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default SignUp
