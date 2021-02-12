import styled from 'styled-components'


const NAV = styled.nav`
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100vw;
  transition: background-color .2s;
  background-color: ${ props => props.darkTheme ? '#111' : '#fff' };
  display: flex;
  justify-content: space-between;
  z-index: 5; 

  #nav-link-area{
    margin-left: 7rem;
    padding-top: 1.5rem;
    display: flex;
    justify-content: space-between;
  }

  #nav-link{
    padding: .4rem .2rem;
    margin: 0 1.8rem;
    font-size: .9rem;
    color: ${ props => props.darkTheme ? '#fff' : '#111' };
  }

  #languages-and-theme{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 2rem;
  }

  #Menu{
    display: none;
  }

  #Menu svg{
    margin-left: 1.5rem;
  }

  #logo-section{
    margin-left: 2rem;
    display: flex;
    align-items: center;
  }

  #logo-section p{
    margin-left: 1rem;
    color: ${ props => props.darkTheme ? '#fff' : '#333' };
  }

  #company-name{
    color: #888;
    font-weight: 500;
    font-family: 'IBM Plex Sans', sans-serif;
  }
  .normal{
    color: ${ props => props.darkTheme ? '#fff' : '#333' }
  }
  .active{
    color: #3355ff;
  }
  #Menu{
    width: 1.3rem;
    margin-top: 1.8rem;
    margin-right: 2rem;
    display: none;
  } 
  #Menu div{
    width: 100%;
    height: 2px;
    background-color: ${ props => props.darkTheme ? '#fff' : '#333' }; 
  }
  #top, #middle, #bottom{
    position: absolute;
    transition: all .3s; 
  }
  #top{
    left: 0; top: 0;
  }
  #middle{
    left: 0; top: .5rem;
  }
  #bottom{
    left: 0; top: 1rem;
  }
  @media only screen and (max-width: 1120px){
    #nav-link-area{
      display: none;
    }
    #languages-and-theme{
      display: none;
    }
    #Menu{
      display: block;
      position: relative;
      align-items: center;
      margin-right: 2rem;
    } 
    .opened > #middle{
      opacity: 1; 
      width: 100%;
      margin-left: 0;
    } 
    .closed > #middle{
      opacity: 0;
      width: 0;
      margin-left: 50%;
    }
    .closed > #top{
      transform: rotate(45deg);
      top: .5rem;
    }
    .closed > #bottom{
      transform: rotate(-45deg);
      top: .5rem;
    }
  }
  @media only screen and (max-width: 850px){ 
    #logo-section{
      margin-left: 1rem;
    }
    #logo-section p{
      margin-left: .2rem;
    }
  }
  @media only screen and (max-width: 550px){ 
    #ceo-name{
      display: none;
    }
  }
`

export default NAV