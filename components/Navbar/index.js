import styles from '../../styles/Navbar.module.css'
import NavItems from './NavItems'
import Sidebar from './Sidebar'
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <img onClick={() => window.scrollTo({top: 0})} className={styles.navLogo} src={"logo.png"} alt="Zoheb Boga" />
      <NavItems />
      <Sidebar />
    </div>
  )
}

export default Navbar
