import React from "react";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import PropTypes from "prop-types";
import { StyledH3 } from "./Article.styles";

const Article = ({ title, content }) => {
  return (
    <>
      <StyledH3>{title}</StyledH3>
      <Paragraph content={content} />
      <hr />
    </>
  );
};

Paragraph.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default Article;
