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

  a{
    text-decoration: none;
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
    background-color: ${ props => props.darkTheme ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)' };
    background-blend-mode: overlay;
    background-size: cover;
    transition: background-color .5s;
    z-index: 2;
  }

  #nav-link-tab:nth-child(1){
    background-image: url('https://upload.wikimedia.org/wikipedia/commons/1/1e/San_Francisco_from_the_Marin_Headlands_in_March_2019.jpg');
  }

  #nav-link-tab:hover{
    background-color: ${ props => props.darkTheme ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.3)' };
    /*box-shadow: ${ props => props.darkTheme ? '0 0 1rem #333 inset' : '0 0 1rem #888 inset' };*/
  }
  
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