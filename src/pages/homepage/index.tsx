import React from 'react'
import { Link } from "react-router-dom";
import Navbar from '../../components/Navbar';

const Homepage = () => {
  return (
    <>
        <Navbar />
        <h3>Homepage</h3>
        <Link to='/login'>sign in</Link>
    </>
  )
}

export default Homepage