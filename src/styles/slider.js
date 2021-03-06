import styled from 'styled-components'


const Slider = styled.div`
  overflow: hidden;
  position: relative;
  width: 100vw;
  height: ${ props => props.height || '100vh' };
  -webkit-overflow-scrolling: touch;

  #bars{
    position: absolute;
    display: flex;
    justify-content: space-between;
    bottom: -.5rem;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
  .bar-container{
    width: 2rem; height: 1rem;
    padding: 1rem 0;
    display: flex;
    align-items: center;
  }  
  .bar{
    width: 100%; height: .1rem;
    background-color: ${ props => props.darkTheme ? '#333' : '#eee' };
    transition: background-color .5s;
    margin-top: .5rem;
    display: block;
  }
  span#current{ 
    background-color: #3355ff;
  } 
  .controls{
    position: absolute;
    top: 45%;
    color: ${ props => props.darkTheme ? '#333' : '#eee' };
    text-shadow: 0 0 .1rem ${ props => props.darkTheme ? '#333' : '#eee' };
    font-size: 2rem;
    z-index: 1;
  }
  #prev{
    left: 1rem;
    padding-right: 1rem; padding-left: .5rem;
    padding-top: 1rem; padding-bottom: 1rem;
    transition: padding .5s; 
  }
  #next{
    right: 1rem;
    padding-left: 1rem; padding-right: .5rem;
    padding-top: 1rem; padding-bottom: 1rem;
    transition: padding .5s;
  }
  @media only screen and (min-width: 850px){
    #prev:hover{
      padding-left: 0;
      padding-right: 1.5rem;
    }
    #next:hover{
      padding-right: 0;
      padding-left: 1.5rem;
    }
  }
  @media only screen and (max-width: 1120px){
    #bars{
      display: none; 
    }
  }
  @media only screen and (max-width: 850px){
    #prev{
      left: .5rem; 
    }
    #next{
      right: .5rem;
    }
  }
`

export default Slider