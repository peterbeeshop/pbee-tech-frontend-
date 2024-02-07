import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.scss'
import logo from '../../assets/logo.png'
import googleLogo from '../../assets/google.png'
import banner from './assets/saly.svg'

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.blueContainer}>
        <Link to="/">
          <img src={logo} alt="logo" className={styles.logo} />
        </Link>
        <div className={styles.innerContainer}>
          <section>
            <h3>Sign in to</h3>
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
                No Account ? <br />{' '}
                <span>
                  <Link to="/signup" className={styles.link}>
                    Sign up
                  </Link>
                </span>
              </p>
            </div>
            <h3>Sign in</h3>
            <div className={styles.googleSignIn}>
              <img
                src={googleLogo}
                alt="googleLogo"
                className={styles.googleLogo}
              />
              <span>Sign in with Google</span>
            </div>
            <div className={styles.email}>
              <p className={styles.text}>Enter your email address</p>
              <input type="text" placeholder="Email address" />
            </div>
            <div className={styles.password}>
              <p className={styles.text}>Enter your password</p>
              <input type="password" placeholder="Password" />
              <span>forgot password</span>
            </div>
            <button>Sign in</button>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Login
