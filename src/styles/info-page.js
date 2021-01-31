import styled from 'styled-components'


const Page = styled.div`
  padding: 2rem 10%;
  background-image: url(${ props => props.imageUrl });
  background-color: ${ props => props.darkTheme ? 'rgba(0,0,0,0.95)' : 'rgba(255,255,255,0.95)' };
  background-blend-mode: overlay;
  background-size: cover;
  transition: background-color .5s;
  
  h1{
    margin-top: 2rem;
  }

  :hover{
    background-color: ${ props => props.darkTheme ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.6)' };
  }

  #sub-title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1.3rem auto;
  }
  #sub-title svg{
    font-size: 1.7rem;
    color: ${ props => props.darkTheme ? '#ddddff' : '#335' };
  }
  #sub-title h3{
    font-size: 1.4rem;
    color: ${ props => props.darkTheme ? '#dddddd' : '#333' };
  }
  #sub-section{
    display: flex;
    align-items: center;
    margin: .8rem auto;
  }
  #sub-section svg{
    font-size: 1.2rem;
    margin-right: .5rem;
    width: 3rem;
    color: #997711; 
  }
  #sub-section p{
    font-size: 1.2rem;
    color: ${ props => props.darkTheme ? '#eef' : '#222' };
    font-weight: 300; 
  }
  #sub-section-key{
    font-weight: 800;
    color: ${ props => props.darkTheme ? '#aaa' : '#666' };
  }
  @media only screen and (max-width: 800px){
    #sub-title{
      display: flex;
      justify-content: left;
    }
    #sub-title svg{
      width: 25px;
      margin-right: 0.8rem;
    }
    #sub-title h3{
      font-size: 1.2rem;
    }
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