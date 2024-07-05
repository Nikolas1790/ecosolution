import { createGlobalStyle, styled } from 'styled-components';
import color from './GlobalColors';


export const GlobalStyle = createGlobalStyle`
/* @import "~slick-carousel/slick/slick.css";
@import "~slick-carousel/slick/slick-theme.css"; */

@font-face {
    font-family: 'All Round Gothic Thick';
    src: url('/path/to/fonts/FONTSPRING_DEMO-AllRoundGothicThick.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'CA Saygon Text';
    src: url('/path/to/fonts/CA_Saygon_Text-Regular.ttf') format('truetype'); /* замените путь на актуальный путь к файлу шрифта */
    font-weight: 400;
    font-style: normal;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Fira Sans", "Oswald", -apple-system, BlinkMacSystemFont, 
			"Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
			"Helvetica Neue", sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: -0.64px;
  color: ${color.greenPrimary};
  width: 100%;
  height: 100vh;
  margin: 0;  
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Oswald', sans-serif;
  margin: 0;
}

p {
  font-family: 'Fira Sans', sans-serif;
  margin: 0;
}
a {
  text-decoration: none;
  color: currentColor;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
button {
  /* color: ${color.whitePrimary}; */
  cursor: pointer;
  padding: 0;
  border: 0;
  outline: 0;
  font-family: inherit;
  background: transparent;
  &:hover,
  &:focus {
    outline: none;
  }
}
html {
  scroll-behavior: smooth;
}
.no-scroll {
  overflow: hidden;
}

textarea {
  resize: none; 
} 
`;



export const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background: ${color.greenLight};

`;

export const TitleSection = styled.h2`
  font-size: 28px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0px;
  text-transform: uppercase;
  width: ${({ width }) => width || 'auto'};
`;

export const ConnectionBlock = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  fill: transparent; 
  stroke: ${color.greenPrimary};

  transition: all 0.3s linear;
  &:hover {
      stroke: ${color.greenLight};
    }
`;



export const ConnectionBlockLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  fill: transparent; 
  stroke: ${color.greenPrimary};

  transition: all 0.3s linear;
  &:hover {
      stroke: ${color.greenLight};
    }
`;