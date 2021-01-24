import { createGlobalStyle }  from 'styled-components' 


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Ubuntu, sans-serif;
  }
  body {
    transition: background-color .2s;
    background-color: ${ props => props.darkTheme ? '#333' : '#fefefe' };
  }
`

export default GlobalStyle