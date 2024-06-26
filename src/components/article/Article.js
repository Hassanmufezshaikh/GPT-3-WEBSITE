import React from "react";
import "./article.css";
const Article = ({ imgUrl, date, title }) => {
  return (
    <div className="gpt3__article-container section__padding">
      <div className="gpt3__article-container_article-image">
        <img src={imgUrl} alt="blog_image" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
          <p> Read Full Article</p>

        </div>
      </div>


    </div>
  );
};

export default Article;
