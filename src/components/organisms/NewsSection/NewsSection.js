import React from "react";
import { Wrapper, StyledTitle } from "./NewsSection.styles";
import Article from "../../molecules/Article/Article";
import { data } from "../../../data/data";

const NewsSection = () => {
  const articles = data.articles;
  return (
    <Wrapper>
      <StyledTitle>New</StyledTitle>
      {articles.map((el) => (
        <Article key={el.id} title={el.title} content={el.content} />
      ))}
    </Wrapper>
  );
};

export default NewsSection;
