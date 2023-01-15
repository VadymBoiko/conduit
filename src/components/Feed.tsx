import React from 'react'
import { Container } from "./Container";
import { FeedToggle } from "./FeedToggle";
import { TagList } from "./GlobalTagList";
import { ArticleList } from "./ArticleList";

import { useGetGlobalFeedQuery } from "../api/tepository";

export const Feed = () => {
    const { data, error, isLoading } = useGetGlobalFeedQuery("");
    if(isLoading){
        return (
            <Container>Feed loading...</Container>
        )
    }
    if(error){
        return (
            <Container>error</Container>
        )
    }
  return (
    <div>
      <Container>
        <FeedToggle />
        <div className="wrapper">
          <ArticleList list={data?.articles || []} />
          <TagList />
        </div>
      </Container>
    </div>
  )
}
