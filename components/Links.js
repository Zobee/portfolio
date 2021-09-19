import styles from '../styles/Navbar.module.css'
const Links = ({open, setOpen}) => {

  const handleClick = (e) => {
    e.preventDefault()
    const link = e.target.getAttribute('href')
    const offset = document.querySelector(link).offsetTop
    open && setOpen(false)
    window.scrollTo({
      top: offset - 64
    })
  }

  return (
    <ul className={open ? styles.active : ""}>
      <li onClick={handleClick} href='#home'>Home </li>
      <li onClick={handleClick} href='#projects'> Projects </li>
      <li onClick={handleClick} href='#articles'> Articles </li>
      <li onClick={handleClick} href='#resume'> Resume </li>
      <li onClick={handleClick} href='#contact'> Contact </li>
    </ul>
  )
}

export default Links
