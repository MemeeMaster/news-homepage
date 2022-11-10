import React from "react";
import Article from "../../molecules/Article/Article";
import { data } from "../../../data/data";

const ArticlesSection = () => {
  const articles = data.articles;

  return (
    <div>
      {articles.map((el) => (
        <Article
          key={el.id}
          url={el.url}
          id={el.id}
          title={el.title}
          content={el.content}
        />
      ))}
    </div>
  );
};

export default ArticlesSection;
