import React, { FC } from "react";

interface ArticleTagListProps{
    list: string[]
}

export const ArticleTagList:FC<ArticleTagListProps> = ({list}) => {
  return (
    <ul className="article__tag-list">
        {list.map((tag)=>(
            <li key={tag} className="article__tag">{tag}</li>
        ))}
      
     
    </ul>
  );
};
