import styled from 'styled-components'


const Page = styled.div`
  padding: 2rem 10%;
  background-color: ${ props => props.darkTheme ? 'rgba(16,16,16,0.7)' : 'rgba(255,255,255,0.9)' };
  background-blend-mode: overlay;
  transition: background-color .5s;
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;

  h1{
    margin-top: 7rem;
    margin-bottom: 3rem;
    font-weight: 800;
  }

  :hover{
    background-color: ${ props => props.darkTheme ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.7)' };
  }

  #sub-section{
    display: flex;
    align-items: center;
    margin: 1rem auto;
  }
  #sub-section p{
    font-size: 1.2rem;
    color: ${ props => props.darkTheme ? '#eef' : '#222' };
  }
  #sub-section-key, h3{
    font-weight: 800;
    color: ${ props => props.darkTheme ? '#aaa' : '#666' };
  }
  @media only screen and (max-width: 800px){
    #sub-section{
      margin: .7rem auto;
    }
    #sub-section svg{
      font-size: 1.1rem;
      margin-right: .4rem;
      width: 2.4rem;
    }
    #sub-section p{
      font-size: 1rem;
    }
  }
  @media only screen and (max-width: 500px){
    background-color: ${ props => props.darkTheme ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.6)' };
    padding: 1.6rem 5%;
  }
`

export default Page