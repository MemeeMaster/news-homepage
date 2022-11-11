import React from "react";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import PropTypes from "prop-types";
import { StyledH3 } from "./New.styles";

const New = ({ title, content }) => {
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

export default New;
