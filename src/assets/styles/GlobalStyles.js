import { createGlobalStyle } from "styled-components";
import mq from "./responsiveDesign";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Inter';
        src: url('../fonts/Inter-VariableFont_slnt,wght.ttf');
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%;
    }
  
    *, *::after, *::before {
        box-sizing: inherit;
    }
  
    body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100vh;
        font-family: 'Inter', sans-serif;
        background-color: ${({ theme }) => theme.colors.offWhite};
        overflow-x: hidden;
    }

    #root{
        width: 100%;
        ${'' /* height: 100%; */}
    }

    ${mq[2]}{
        #root{
            padding: 5em;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: 1fr 6fr 1.5fr;
        }
    }
`;
