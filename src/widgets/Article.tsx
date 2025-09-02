import type { TArticle } from '@/shared/types'
import type { FC } from 'react'

type TProps = {
  item: TArticle
}

export const Article: FC<TProps> = ({ item }) => {
  return (
    <div className="article-item">
      <h2>{item.title}</h2>
      <div>
        <a href={item.url}>{item.author_name}</a>
      </div>
      <div>{item.description}</div>
    </div>
  )
}
