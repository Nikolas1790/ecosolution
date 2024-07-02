import { createGlobalStyle, styled } from 'styled-components';
import color from './GlobalColors';


export const GlobalStyle = createGlobalStyle`

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
`;



export const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background: rgb(151, 210, 139);

`;