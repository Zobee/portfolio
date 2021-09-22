import styles from "../../styles/Articles.module.css"
import {BsChevronDoubleRight} from 'react-icons/bs'
const Article = ({title, subtitle, blurb, link, published}) => {
  return (
    <a href={link} target='_blank' rel="noreferrer">
      <section className={styles.article}>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <p className={styles.blurb}>{blurb}</p>
        <p className={styles.articleCTA}>Click to read more <BsChevronDoubleRight className={styles.readMoreIcon}/></p>
        <p className={styles.pubdate}>{published}</p>
      </section>
    </a>
  )
}

export default Article
