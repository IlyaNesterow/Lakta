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
    left: 0;
    position: fixed;
    width: 100vw;
    height: 100vh; 
    display: flex;
    align-items: center;
    justify-content: center;
  }
  div#initial-scene{
    background-color: ${ props => props.darkTheme ? '#111' : '#fefefe' }; 
    z-index: 6;
    transition: all .5s;
  } 
  .menu-hidden{
    transition: right .5s;
    right: -100vw;
  }
  .menu-opened{ 
    transition: right .5s;
    right: 0;
  }
  .visible{
    top: 0;
  }
  .hidden{
    top: -100vh;
  }
  #sub-navbar{
    display: flex;
    flex-wrap: wrap;
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
    top: 0;
    background-color: ${ props => props.darkTheme ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.9)' };
    backdrop-filter: blur(15px); 
    overflow: hidden;
    z-index: 5;
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
  #nav-link{
    font-weight: 600;
    font-size: 1.5rem;
    color: ${ props => props.darkTheme ? '#fff' : '#111' };
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
      max-width: 90%;
      margin-left: 5%; 
    }
  } 
  @media only screen and (max-width: 600px){ 
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