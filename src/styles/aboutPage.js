import styled from 'styled-components'


const Page = styled.div`
  background-color: ${ props => props.darkTheme ? 'rgba(0,0,0,0.7)' : '' };
  background-blend-mode: overlay;
  transition: background-color .5s;
  h1{
    padding: 2rem;
    padding-bottom: 1.3rem;
  }
  #sub-navbar{
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin-left: 20%; 
    padding: 1rem;
    margin-bottom: 1rem;
  }
  #sub-navbar a{
    font-family: Ubuntu, sans-serif;
    font-size: 1rem;
    color: ${ props => props.darkTheme ? '#eee' : '#222' };
  } 
  @media only screen and (max-width: 850px){ 
    #sub-navbar{
      width: 90%;
      margin-left: 5%; 
    }
  }
`

export default Page