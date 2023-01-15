import React, { FC } from "react";
import {Heart} from '@swiftcarrot/react-ionicons';

interface FavouriteButtonProps{
  count: number
}

export const FavouriteButton:FC<FavouriteButtonProps> = ({count}) => {
  return (
    <button className="article__likes">
      <i className="ion-heart"></i>
      <span className="article__likes_count">{count}</span>
    </button>
  );
};
