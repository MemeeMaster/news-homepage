import React, { useContext } from "react";
import { ContentContext } from "../../../views/Root/Root";
import Button from "../../atoms/Button/Button";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Title from "../../atoms/Ttile/Title";
import { ImageHeader, Wrapper } from "./Main.styles";

const Main = () => {
  const { titleContent, pContent, btnContent } = useContext(ContentContext);

  return (
    <Wrapper>
      <ImageHeader
        src={require("../../../assets/images/image-web-3-mobile.jpg")}
        alt="Website background showing colorful blocks."
      />
      <Title content={titleContent} />
      <Paragraph content={pContent} />
      <Button content={btnContent} />
    </Wrapper>
  );
};

export default Main;
