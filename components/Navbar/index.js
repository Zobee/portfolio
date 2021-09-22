import styles from '../../styles/Navbar.module.css'
import Image from 'next/image'
import NavItems from './NavItems'
import Sidebar from './Sidebar'
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Image 
        onClick={() => window.scrollTo({top: 0})} 
        className={styles.navLogo}
        src={"/logo.png"} alt="Zoheb Boga"
        height='64px' width='64px' />
      <NavItems />
      <Sidebar />
    </div>
  )
}

export default Navbar
