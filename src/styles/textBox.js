import styled from 'styled-components'

const TextBox = styled.div`
  overflow: hidden;
  position: absolute;
  top: ${ props => props.top || '45%' };
  #text-box{
    overflow: hidden;
    padding: 1rem;
    position: relative;
    width: 100vw;
    height: 4rem;
  }
  h2{
    position: absolute; 
    font-family: 'Roboto', sans-serif;
    font-weight: 400; 
    left: ${ props => props.left || '50%' };
    transform: translate(-50%, -50%);
    transition: top .7s;
    white-space: nowrap;
    font-size: 3.5vw; 
  } 
  h2#prev{
    top: -4rem; 
  }
  h2#current{ 
    top: 50%;
  }
  h2#next{
    bottom: -8rem;
  }
  @media only screen and (max-width: 850px){ 
    h2{
      font-size: 1.5rem;
    } 
  }
`

export default TextBox