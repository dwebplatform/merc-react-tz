import React from 'react'
import classNames from "classnames";
import "./blog-card.css";
export const BlogCard = ({ className = "", src, title, description }) => {
  return (
    <div className={classNames("blog-card", className)}>
      <div className="blog-card-left">
        <div className="blog-card-item__image">
          <img alt="blog-card" className="blog-card__image-el" src={src} />
        </div>
      </div>
      <div className="blog-card-right">
        <h3 className="blog-card-right__title">{title}</h3>
        <p className="blog-card-right__description">{description}</p>
      </div>
    </div>
  );
};
