import { createGlobalStyle } from 'styled-components';
import color from './GlobalColors';

import FiraSansWoff from '../fonts/FiraSans.woff';
import FiraSansWoff2 from '../fonts/FiraSans.woff2';
import OswaldBoldRegularWoff from '../fonts/Oswald-Regular.woff';
import OswaldBoldRegularWoff2 from '../fonts/Oswald-Regular.woff2';
import OswaldBoldBoldWoff from '../fonts/Oswald-Bold.woff';
import OswaldBoldBoldWoff2 from '../fonts/Oswald-Bold.woff2';

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'FiraSans';
  font-style: normal;
  font-weight: 400; 
  src: url(${FiraSansWoff2}) format('woff2'), url(${FiraSansWoff}) format('woff');
}
@font-face {
  font-family: 'Oswald-Bold';
  font-style: normal;
  font-weight: 400; 
  src: url(${OswaldBoldRegularWoff2}) format('woff2'), url(${OswaldBoldRegularWoff}) format('woff');
}
@font-face {
  font-family: 'Oswald-Bold';
  font-style: normal;
  font-weight: 700; 
  src: url(${OswaldBoldBoldWoff2}) format('woff2'), url(${OswaldBoldBoldWoff}) format('woff');
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
  /* background-color: ${color.mainBackground}; */
  width: 100%;
  height: 100vh;
  margin: 0;  
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  font-family: 'Oswald', sans-serif;
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
`;
