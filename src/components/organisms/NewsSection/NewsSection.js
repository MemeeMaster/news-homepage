import React from "react";
import { Wrapper, StyledTitle } from "./NewsSection.styles";
import { data } from "../../../data/data";
import New from "../../molecules/New/New";

const NewsSection = () => {
  const articles = data.articles;
  return (
    <Wrapper>
      <StyledTitle>New</StyledTitle>
      {articles.map((el) => (
        <New key={el.id} title={el.title} content={el.content} />
      ))}
    </Wrapper>
  );
};

export default NewsSection;
