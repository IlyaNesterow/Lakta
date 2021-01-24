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

  div#nav-link-tab{
    background-color: ${ props => props.darkTheme ? 'rgba(44, 44, 44, 0.1)' : 'rgba(230, 230, 250, 0.1)' };
    backdrop-filter: blur(7px);
    position: fixed;
    top: 3.8rem;
    width: 100vw;
    height: calc(100vh - 3.8rem);
    display: flex;
    justify-content: space-between;
  }

  #nav-link{
    text-decoration: none;
    font-weight: 600;
    font-size: 1.5rem;
    color: ${ props => props.darkTheme ? '#fff' : '#111' };
  }

  @media only screen and (min-width: 800px){
    div#nav-link-tab{
      display: none;
    }
  }

  @media only screen and (max-width: 600px){
    div#nav-link-tab{
      display: flex;
      flex-wrap: wrap;
      width: 100%;
    }
    #nav-link{
      width: 100vw !important;
      padding: 1rem;
    }
  }
`

export default GlobalStyle