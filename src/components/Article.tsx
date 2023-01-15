import React, { FC } from "react";
import { Link } from "react-router-dom";
import { FeedArticle } from "../dto/globalfeed";
import { ArticleTagList } from "./ArticleTagList";
import { FavouriteButton } from "./FavouriteButton";
import {DateTime} from 'luxon'

interface ArticleProps extends FeedArticle {}

export const Article: FC<ArticleProps> = ({
  author,
  createdAt,
  favoritesCount,
  title,
  description,
  tagList,
}) => {
  return (
    <article>
      <div className="article">
        <div className="article__top">
          <Link className="author-link" to={`/@${author.username}`}>
            <div className="d-flex">
              <div className="article__image">
                <img src={author.image} alt={`${author.username} avatar`} />
              </div>
              <div className="article__info">
                <h3 className="article__name">{author.username}</h3>
                <p className="article__date">{DateTime.fromISO(createdAt).toLocaleString(DateTime.DATE_FULL)}</p>
              </div>
            </div>
          </Link>
          <FavouriteButton count={favoritesCount} />
        </div>
        <div className="article__general">
          <h2 className="article__title">{title}</h2>
          <p className="article__description">{description}</p>
        </div>
        <div className="article__bottom">
          <p className="article__read-more">Read more...</p>
          <ArticleTagList list={tagList} />
        </div>
      </div>
    </article>
  );
};
