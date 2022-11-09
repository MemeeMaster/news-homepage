import React from "react";
import PropTypes from "prop-types";
import { StyledP } from "./Paragraph.styles";

const Paragraph = ({ content }) => {
  return <StyledP>{content}</StyledP>;
};

Paragraph.propTypes = {
  content: PropTypes.string,
};

export default Paragraph;
