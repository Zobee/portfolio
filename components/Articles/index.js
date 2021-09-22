import styles from '../../styles/Articles.module.css'
import Article from "./Article"
import { articles } from './articles'
//TODO: Use proper date objects to allow for "__ days ago" formatting
//TODO: Move overlapping styles for articles/projects into a shared stylesheet
const Articles = () => {
  return (
    <div className='section'>
      <h1 className="title">ARTICLES</h1>
      <div className="section-container">
        {articles.map(article => <Article key={article.id} {...article}/>)}
      </div>
    </div>
  )
}

export default Articles
