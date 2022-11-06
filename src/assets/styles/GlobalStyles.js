import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Inter';
        src: url('../fonts/Inter-VariableFont_slnt,wght.ttf');
    }

    html {
        box-sizing: border-box;
    }
  
    *, *::after, *::before {
        box-sizing: inherit;
    }
  
    body {
        font-family: 'Inter', sans-serif;
        margin: 0;
        padding: 0;
        overflow-y: hidden;
    }
`;
