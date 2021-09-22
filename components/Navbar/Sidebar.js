import styles from '../../styles/Navbar.module.css'
import { useState } from 'react'
import Links from './Links'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'

const Sidebar = () => {
  const [open, setOpen] = useState(false)
  const expandBtn = 
  <GiHamburgerMenu className={styles.navToggle} size={"1.5rem"} onClick={() => setOpen(prev => !prev)} />
  const closeBtn = 
  <AiOutlineClose className={styles.navToggle} size={"1.5rem"} onClick={() => setOpen(prev => !prev)} />
  return (
    <nav className={styles.mobileNavContainer}>
      {open ? closeBtn : expandBtn}
      <Links open={open} setOpen={setOpen} />
    </nav>
  )
}

export default Sidebar
