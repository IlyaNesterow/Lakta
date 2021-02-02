import styled from 'styled-components'


const Page = styled.div`
  margin-top: 4rem;
  h1{
    margin-bottom: 2.5rem;
  }
  h3{
    color: ${ props => props.darkTheme ? '#eee' : '#333' };
    font-size: 1.5rem;
    margin: 1rem 0; 
    padding-bottom: .2rem; 
    padding-left: 1rem;
    border-bottom: solid 1px #888; 
  } 
  #scroller{
    position: fixed;
    background-color: #3377ff;
    right: 3rem;
    transition: bottom 1s ease-in; 
    color: ${ props => props.darkTheme ? '#eee' : '#333' };
    border-radius: 1.5rem;
    width: 3rem;
    height: 3rem;
    font-size: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 .2rem ${ props => props.darkTheme ? '#eee' : '#333' };
  }
  img{
    margin-bottom: 1rem;
    border-radius: .5rem;
    box-shadow: 0 0 .2rem ${ props => props.darkTheme ? '#fff' : '#111' };
  }
  .visible{
    bottom: 2rem;
  }
  .hidden{
    bottom: -5rem;
  }
  @media only screen and (max-width: 1000px){
    margin-top: 3rem;
    h3{
      margin: 1rem 5%;
      padding-left: 0;
    }
  }
  @media only screen and (max-width: 1000px){
    #scroller{
      display: none;
    }
  }
  @media only screen and (max-width: 600px){
    margin-top: 2.6rem;
    h1{
      margin-bottom: 1.9rem;
    }
  }
`

export default Page