import React, { useContext } from "react";
import {
  ContentContext,
  ScreenSizeContext,
} from "../../../providers/ContextProvider";
import Button from "../../atoms/Button/Button";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Title from "../../atoms/Ttile/Title";
import { ImageHeader, Wrapper, ContentWrapper } from "./Main.styles";
import PhotoMobile from "../../../assets/images/image-web-3-mobile.jpg";
import PhotoDesktop from "../../../assets/images/image-web-3-desktop.jpg";

const Main = () => {
  const { titleContent, pContent, btnContent } = useContext(ContentContext);
  const { screenWidth } = useContext(ScreenSizeContext);
  return (
    <Wrapper>
      {screenWidth > 1024 ? (
        <ImageHeader
          src={PhotoDesktop}
          alt="Website background showing colorful blocks."
        />
      ) : (
        <ImageHeader
          src={PhotoMobile}
          alt="Website background showing colorful blocks."
        />
      )}
      <ContentWrapper>
        <Title content={titleContent} />
        <div>
          <Paragraph content={pContent} />
          <Button content={btnContent} />
        </div>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Main;
