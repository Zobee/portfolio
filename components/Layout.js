import styles from '../styles/Layout.module.css'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <div className={styles.container}>
      <Navbar/>
      {children}
    </div>
  )
}

export default Layout
