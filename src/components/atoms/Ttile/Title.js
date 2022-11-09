import React from "react";
import PropTypes from "prop-types";
import { StyledH2 } from "./Title.styles";

const Title = ({ content }) => {
  return <StyledH2>{content}</StyledH2>;
};

Title.propTypes = {
  content: PropTypes.string,
};

export default Title;
