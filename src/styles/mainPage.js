import styled from 'styled-components'


const Page = styled.div`
  #author{
    position: absolute;
    bottom: 1rem;
    right: 1rem; 
    font-size: 1.1rem; 
  } 
  #author a{
    color: #3355ff;  
  }
  p#summary{
    width: 100%;
    padding-left: 10%;
    margin-top: 3rem;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    font-size: 1.3rem;
    color: ${ props => props.darkTheme ? '#ccc' : '#333' }; 
    border-bottom: solid 1px ${ props => props.darkTheme ? 'rgba(222,222,222,0.25)' : 'rgba(0,0,0,0.25)' }; 
  } 
  .container:hover{ 
    background-color: ${ props => props.darkTheme ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0)' };
  }
  h2{
    color: ${ props => props.darkTheme ? '#eee' : '#111' };
  }
  @media only screen and (max-width: 850px){ 
    p#summary{
      padding-left: 5%;
      margin-top: 2.5rem;
      padding-bottom: 1rem;
      margin-bottom: 1.5rem;
      font-size: 1.1rem;
    }
    .left, .right{
      display: none;
    }
  }
  @media only screen and (max-width: 500px){ 
    #author{
      font-size: 1rem;
    }
  }
`

export default Page