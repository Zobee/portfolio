import Article from "./Article"
import { articles } from './articles'
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
