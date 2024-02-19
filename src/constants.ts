import ordersImage from './assets/account/orders.svg'
import securityImage from './assets/account/security.svg'
import addressImage from './assets/account/address.svg'
import watchlistImage from './assets/account/watchlist.svg'

export const sidenavLinks = [
  {
    id: 1,
    heading: 'Electronics',
    links: [
      {
        name: 'Phones',
        to: '#',
      },
      {
        name: 'Computers',
        to: '#',
      },
      {
        name: 'Smart Watch',
        to: '#',
      },
    ],
  },
  {
    id: 2,
    heading: 'Entertainment',
    links: [
      {
        name: 'Video games & consoles',
        to: '#',
      },
    ],
  },
  {
    id: 3,
    heading: 'Help & Settings',
    links: [
      {
        name: 'Your Account',
        to: '/account',
      },
      {
        name: 'Customer Service',
        to: '#',
      },
      {
        name: 'Sign out',
        to: '/login',
      },
    ],
  },
]

export const accountLinks = [
  {
    image: ordersImage,
    heading: 'Your Orders',
    text: 'Track, return, cancel an order or buy again',
    link: '/account/orders',
  },
  {
    image: securityImage,
    heading: 'Login & Security',
    text: 'Edit login, name, and mobile number',
    link: '/account/security',
  },
  {
    image: addressImage,
    heading: 'Your Addresses',
    text: 'Edit, remove or set default address',
    link: '/account/address',
  },
  {
    image: watchlistImage,
    heading: 'Your Watchlist',
    text: 'View the products you have saved for later',
    link: '/account/watchlist',
  },
]
