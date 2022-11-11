import React from "react";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import { Wrapper, StyledH2, Subtitle, TextWrap } from "./Article.styles";

const Article = ({ url, id, title, content }) => {
  return (
    <Wrapper>
      <img src={url} alt={title} />
      <TextWrap>
        <StyledH2>{id}</StyledH2>
        <Subtitle>{title}</Subtitle>
        <Paragraph content={content} />
      </TextWrap>
    </Wrapper>
  );
};

export default Article;
