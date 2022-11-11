import React from "react";
import Article from "../../molecules/Article/Article";
import { data } from "../../../data/data";
import { Wrapper } from "./ArticlesSection.styles";

const ArticlesSection = () => {
  const articles = data.articles;

  return (
    <Wrapper>
      {articles.map((el) => (
        <Article
          key={el.id}
          url={el.url}
          id={el.id}
          title={el.title}
          content={el.content}
        />
      ))}
    </Wrapper>
  );
};

export default ArticlesSection;
