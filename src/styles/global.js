import { createGlobalStyle }  from 'styled-components' 


const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar { 
    display: none; 
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
    user-select: none; 
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  body {
    transition: background-color .2s;
    background-color: ${ props => props.darkTheme ? '#111' : '#fefefe' };
    position: relative;
    min-height: 100vh;
  }
  a{
    text-decoration: none;
  }
  h1{
    color: #eac700;
    text-align: center;
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 100;
  }
  div#page-section{
    padding-top: 4rem;
    min-height: calc(100vh - 7.4rem);
    padding-bottom: 4rem;
  } 
  div#initial-scene, div#pic-modal{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh; 
    display: flex;
    align-items: center;
    justify-content: center;
  }
  div#initial-scene{
    background-color: ${ props => props.darkTheme ? '#111' : '#fefefe' }; 
    z-index: 5;
    transition: opacity .5s;
  } 
  .visible{
    opacity: 1
  }
  .hidden{
    opacity: 0;
  }
  #menu-container{
    position: fixed;
    backdrop-filter: blur(7px);
    top: 3.8rem;
    height: calc(100vh - 3.8rem);
    width: 100vw;
  }
  div#nav-link-area-tab {
    background-color: ${ props => props.darkTheme ? 'rgba(44, 44, 44, 0.1)' : 'rgba(230, 230, 250, 0.1)' };
    display: flex;
    flex-wrap: wrap;
    height: 100% !important;
    width: 100% !important;
  }
  #sub-navbar{
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin-left: 20%; 
    padding: 1rem;
    margin-bottom: 1rem;
  }
  #sub-navbar a{
    font-family: Ubuntu, sans-serif;
    font-size: 1rem;
    color: ${ props => props.darkTheme ? '#eee' : '#222' };
  } 
  div#pic-modal{
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
    background-color: ${ props => props.darkTheme ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)' };
    background-blend-mode: overlay;
    background-size: cover;
    transition: background-color .5s;
    z-index: 2;
  }
  #nav-link-tab:nth-child(1){
    background-image: url('${ props => props.image1 }');
  }
  #nav-link-tab:nth-child(2){
    background-image: url('${ props => props.image2 }');
  }
  #nav-link-tab:nth-child(3){
    background-image: url('${ props => props.image3 }');
  }
  #nav-link-tab:nth-child(4){
    background-image: url('${ props => props.image4 }');
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
  @media only screen and (max-width: 850px){
    #left-arrow, #right-arrow{
      display: none;
    }
    #close-modal{
      padding: .5rem;
    }
    .modal-control{
      font-size: 1.4rem;
    }
    #sub-navbar{
      width: 90%;
      margin-left: 5%; 
    }
  } 
  @media only screen and (min-width: 850px){
    div#nav-link-area-tab{
      display: none;
    }
  }
  @media only screen and (max-width: 600px){ 
    #nav-link-tab{
      width: 100vw !important;
      padding: 1rem;
    }
    #nav-link-area-tab{
      max-height: calc(90vh - 3.8rem) !important;
    }
    #zoom-bar{
      bottom: 2.5rem;
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