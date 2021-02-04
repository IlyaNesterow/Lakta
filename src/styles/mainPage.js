import styled from 'styled-components'


const Page = styled.div`
  .container{
    width: 100vw;
    height: calc(100vh - 4rem);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${ props => props.darkTheme ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)' };
    background-blend-mode: ${ props => props.darkTheme ? 'darken' : 'lighten' };
  }
  .container::before {
    content: "";
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-image: url(${ props => props.currentImg });
    background-size: cover;
    filter: grayscale(100%);
  }
  #text-box{
    overflow: hidden;
    padding: 1rem;
    position: relative;
    width: 100vw;
  }
  #author{
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    color: #fff;  
    font-size: 1.1rem; 
  } 
  #text-box h2{
    position: absolute;
    color: #eac700;
    font-family: 'Roboto', sans-serif;
    font-weight: 400; 
    left: 50%;
    transform: translate(-50%, -50%);
    transition: top .7s;
    white-space: nowrap;
  } 
  h2#prev{
    top: -50%; 
  }
  h2#current{ 
    top: 50%;
  }
  h2#next{
    bottom: -150%;
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
    #text-box h2{
      font-size: 1.5rem;
    } 
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