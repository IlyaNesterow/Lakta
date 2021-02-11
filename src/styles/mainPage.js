import styled from 'styled-components'


const Page = styled.div`
  #author{
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    color: #fff;  
    font-size: 1.1rem; 
  } 
  p#summary{
    width: 80%;
    margin-left: 10%;
    margin-top: 3rem;
    margin-bottom: 4rem;
    font-size: 1.3rem;
    color: #888;
  }
  .container:hover{ 
    background-color: ${ props => props.darkTheme ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0)' };
  }
  @media only screen and (max-width: 850px){ 
    p#summary{
      width: 90%;
      margin-left: 5%;
      margin-top: 2.5rem;
      margin-bottom: 2rem;
      font-size: 1.1rem;
    }
  }
  @media only screen and (max-width: 500px){ 
    #author{
      font-size: 1rem;
    }
  }
`

export default Page