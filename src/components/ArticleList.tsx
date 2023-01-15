import React, { FC } from 'react'
import { FeedArticle } from '../dto/globalfeed'
import { Article } from './Article'

interface ArticleListProps{
  list: FeedArticle[]
}

export const ArticleList:FC<ArticleListProps> = ({list}) => {

  

  return (
    <div className='article__wrapper'>
      {list.map((article) =>(
        <Article key={article.slug}{...article}/>
      ))}
    </div>
  )
}
