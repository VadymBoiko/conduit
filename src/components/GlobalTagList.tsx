import React from 'react';
import { Link } from "react-router-dom";
export const TagList = () => {
  return (
    <div className="sidebar">
            <div className="tag-list">
              <p>Popular Tags</p>
              <Link to="//" className="tag-list__elem">
                implementatos
              </Link>
              <Link to="//" className="tag-list__elem">
                welcome
              </Link>
              <Link to="//" className="tag-list__elem">
                introductions
              </Link>
              <Link to="//" className="tag-list__elem">
                codebaseShow
              </Link>
              <Link to="//" className="tag-list__elem">
                ipsum
              </Link>
              <Link to="//" className="tag-list__elem">
                qui
              </Link>
              <Link to="//" className="tag-list__elem">
                et
              </Link>
              <Link to="//" className="tag-list__elem">
                cupiditate
              </Link>
              <Link to="//" className="tag-list__elem">
                daserunt
              </Link>
            </div>
          </div>
  )
}
