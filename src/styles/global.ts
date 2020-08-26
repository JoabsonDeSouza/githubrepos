import { createGlobalStyle, css } from 'styled-components';

import githubBackgroundLight from '../assets/imageBackgroundWhite.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background}
        url(${githubBackgroundLight}) no-repeat 80% top;
    -webkit-font-smoothing: antialiased
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`;
