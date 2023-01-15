import React from 'react';
import { NavLink } from 'react-router-dom';

export const FeedToggle = () => {
  return (
    <div>
      <ul className='feed-nav'>
        <li className='feed-nav__item'><NavLink className='feed-nav__link' to='/home'>Global Feed</NavLink></li>
      </ul>
    </div>
  )
}
