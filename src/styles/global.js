import { createGlobalStyle }  from 'styled-components' 


const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar { 
    display: none; 
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Ubuntu, sans-serif;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
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

  h1{
    color: ${ props => props.darkTheme ? '#eee' : '#222' };
    text-align: center;
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
  }

  div#page-section{
    min-height: calc(100vh - 11.4rem);
    padding-bottom: 4rem;
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

  div#pic-modal{
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${ props => props.darkTheme ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.9)' };
    backdrop-filter: blur(15px); 
    overflow: hidden;
    z-index: 3;
  }

  .modal-control{
    color: ${ props => props.darkTheme ? '#eee' : '#333' }; 
    font-size: 2rem;
    position: absolute;
  }

  #left-arrow{
    left: 1rem;
    padding-right: 1rem;
    padding-left: .5rem;
    transition: padding .5s;
  }

  #right-arrow{
    right: 1rem;
    padding-left: 1rem;
    padding-right: .5rem;
    transition: padding .5s;
  }

  #close-modal{
    top: .1rem;
    right: .5rem;
    transition: transform .5s;
    padding: 1rem;
  }

  #left-arrow:hover{
    padding-left: 0;
    padding-right: 1.5rem;
  }

  #right-arrow:hover{
    padding-right: 0;
    padding-left: 1.5rem;
  }

  #close-modal:hover{
    transform: rotate(90deg);
  }

  .current-image {  
    max-height: 100vh;
    max-width: 90vw;
    overflow: hidden;  
    box-shadow: 0 0 .2rem ${ props => props.darkTheme ? '#eee' : '#333' };
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
  }
  #zoom-bar{
    position: absolute;
    bottom: 1rem;
    z-index: 3; 
    padding: .5rem;
    display: flex;
    justify-content: space-between;
  }
  .zoom-bar-item{
    font-size: 1.4rem;
    margin: 0 1rem;
  }
  .enabled{
    color: ${ props => props.darkTheme ? '#eee' : '#333' }
  }
  .disabled{
    color: #888;
  }
  @media only screen and (max-width: 900px){
    #left-arrow, #right-arrow{
      display: none;
    }
    #close-modal{
      padding: .5rem;
    }
    .modal-control{
      font-size: 1.4rem;
    }
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

  @media only screen and (max-width: 500px){ 
    h1{
      font-size: 1.7rem;
      margin-bottom: .8rem;
    }
    .current-image{
      max-width: 100vw;
    }
  }
  @media only screen and (max-height: 500px){
    #zoom-bar{
      display: none;
    }
  }
`

export default GlobalStyle