import styles from '../styles/Navbar.module.css'
import NavItems from './NavItems'
import Sidebar from './Sidebar'
import Links from './Links'
import { useState } from 'react'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1>Nav Logo</h1>
      <NavItems />
      <Sidebar />
    </div>
  )
}

export default Navbar
