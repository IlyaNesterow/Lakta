import styled from 'styled-components'


const Page = styled.div`
  padding: 2rem 10%;
  background-image: url(${ props => props.imageUrl });
  background-color: ${ props => props.darkTheme ? 'rgba(16,16,16,0.99)' : 'rgba(255,255,255,0.95)' };
  background-blend-mode: overlay;
  background-size: cover;
  transition: background-color .5s;
  
  h1{
    margin-top: 4rem;
    margin-bottom: 3rem;
  }

  :hover{
    background-color: ${ props => props.darkTheme ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.6)' };
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