import styles from '../styles/Navbar.module.css'
import { useState } from 'react'
import Links from './Links'

const Sidebar = () => {
  const [open, setOpen] = useState(false)
  return (
    <nav className={styles.mobileNavContainer}>
      <button className={styles.navToggle} onClick={() => setOpen(prev => !prev)}>X</button>
      <Links open={open} setOpen={setOpen} />
    </nav>
  )
}

export default Sidebar
