import { useState } from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { Link } from 'react-router-dom'
import styles from './index.module.scss'
import MyOrders from './my-orders'
import { ProductCardType } from '../../../types'
import phoneImage from '../../../assets/dummy-pics/phoneImage.png'
import NotShipped from './not-shipped'
import Shipped from './shipped'

const Orders = () => {
  const [value, setValue] = useState('1')
  const [orders, setOrders] = useState<ProductCardType[]>([
    // {
    //   name: 'iphone 6',
    //   price: 200,
    //   image: phoneImage,
    //   quantity: 1,
    // },
    // {
    //   name: 'iphone 7 plus',
    //   price: 400,
    //   image: phoneImage,
    //   description: 'this is a little description of the 7 plus',
    //   quantity: 3,
    // },
  ])

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }
  return (
    <div className={styles.container}>
      <section className={styles.breadcrumb}>
        <div className={styles.subHeading}>
          <Link className={styles.linkTag} to={'/account'}>
            Your Account
          </Link>{' '}
          &gt;
          <p> Your Orders</p>
        </div>
        <h5>Your Orders</h5>
      </section>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box>
            <TabList
              className={styles.tabList}
              onChange={handleChange}
              aria-label="lab API tabs example"
            >
              <Tab className={styles.tab} label="Orders" value="1" />
              <Tab className={styles.tab} label="Not Yet Shipped" value="2" />
              <Tab
                className={styles.tab}
                label="Shipped & Received"
                value="3"
              />
              <Tab className={styles.tab} label="Cancelled Orders" value="4" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <MyOrders myOrders={orders} />
          </TabPanel>
          <TabPanel value="2">
            <NotShipped myOrders={orders} />
          </TabPanel>
          <TabPanel value="3">
            <Shipped myOrders={orders} />
          </TabPanel>
          <TabPanel value="4">4</TabPanel>
        </TabContext>
      </Box>
    </div>
  )
}

export default Orders
