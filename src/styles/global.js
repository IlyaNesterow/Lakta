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
    position: relative;
    min-height: 100vh;
  }

  div#nav-link-area-tab {
    background-color: ${ props => props.darkTheme ? 'rgba(44, 44, 44, 0.1)' : 'rgba(230, 230, 250, 0.1)' };
    backdrop-filter: blur(7px);
    position: fixed;
    top: 3.8rem;
    width: 100vw;
    height: calc(100vh - 3.8rem);
    display: flex;
    flex-wrap: wrap;
  }

  #nav-link, #nav-link-tab{
    text-decoration: none;
    font-weight: 600;
    font-size: 1.5rem;
    color: ${ props => props.darkTheme ? '#fff' : '#111' };
  }

  #nav-link-tab{
    width: 50vw !important;
    padding: 1rem;
    display: flex;
    position: relative; 
    align-items: center;
    justify-content: center;
    background-image: url('https://lakta.s3.eu-north-1.amazonaws.com/balkoni/DSC00119.JPG');
    background-color: ${ props => props.darkTheme ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.6)' };
    background-blend-mode: ${ props => props.darkTheme ? 'darken' : 'lighten' };
    background-size: cover;
    transition: background-color .5s;
    z-index: 2;
  }

  #nav-link-tab:hover{
    background-color: ${ props => props.darkTheme ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.5)' };
    /*box-shadow: ${ props => props.darkTheme ? '0 0 1rem #333 inset' : '0 0 1rem #888 inset' };*/
  }

  /*#nav-link-tab::before {    
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: rgba(0,0,0,0.25);
    backdrop-filter: blur(10px);
    z-index: -1;  
    opacity: 0.1; 
  }

  #nav-link-tab:hover {
    box-shadow: -5rem -5rem -5rem -5rem #333;
  }*/

  @media only screen and (min-width: 800px){
    div#nav-link-area-tab{
      display: none;
    }
  }

  @media only screen and (max-width: 600px){ 
    #nav-link-tab{
      width: 100vw !important;
      padding: 1rem;
    }
  }
`

export default GlobalStyle