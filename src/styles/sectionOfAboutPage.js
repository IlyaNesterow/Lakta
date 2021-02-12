import styled from 'styled-components'


const Section = styled.div`
  padding: 2rem 10%;
  top: 0; left: 0;
  width: 100%; height: 100%;
  position: absolute;
  background-color: ${ props => props.darkTheme ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.6)' };
  display: flex;
  justify-content: center;
  align-items: center;
  background-blend-mode: overlay;
  transition: background-color .5s;
  
  @media only screen and (min-width: 850px){
    p{
      font-size: 1.4rem;
      color: ${ props => props.darkTheme ? '#eee' : '#333' };
      transition: all .5s;
      width: 60%;
    }
    :hover{ 
      background-color: ${ props => props.darkTheme ? 'rgba(0,0,0,0.9)' : 'rgba(255,255,255,0.95)' };
    }
    :hover p{
      color: #888;
    }
  }
  @media only screen and (max-width: 850px){ 
    background-color: ${ props => props.darkTheme ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)' };
    display: flex;
    justify-content: center;
    align-items: center;
    
    p{
      width: 80%;  
      font-size: 1.2rem;
      color: ${ props => props.darkTheme ? '#eee' : '#333' };
    }
  }
`

export default Section