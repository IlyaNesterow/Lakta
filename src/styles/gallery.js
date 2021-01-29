import styled from 'styled-components'


const Page = styled.div`
  margin-top: 4rem;
  h1{
    margin-bottom: 3rem;
  }
  #images{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  #images img{
    margin-bottom: 1rem;
    border-radius: 1rem;
    border: solid 1px #888;
  }
  .three-images{
    width: calc(33.33vw - 1rem);
    margin: 0 .5rem;
    height: auto;
  }
  .two-images{
    width: calc(40vw - .5rem);
    height: auto;
  }
  .right-most-image{
    margin-left: 10vw;
    margin-right: .5rem;
  }
  .left-most-image{
    margin-right: 10vw;
    margin-left: .5rem;
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
  .vissible{
    bottom: 12vh;
  }
  .hidden{
    bottom: -5rem;
  }
  @media only screen and (max-width: 1000px){
    margin-top: 3rem;
    .two-images, .three-images{
      margin: .5rem; 
      width: calc(50vw - 1rem);
    }
  }
  @media only screen and (max-width: 1000px){
    #scroller{
      display: none;
    }
  }
  @media only screen and (max-width: 600px){
    margin-top: 2rem;
    h1{
      margin-bottom: 1.5rem;
    }
    #images{
      display: block;
    }
    #images img{
      margin-bottom: 1rem;
      border-radius: .7rem;
      border: solid 1px #888;
    }
    .two-images, .three-images{
      width: 90vw;
      margin: .5rem 5vw;
    }
  }
`

export default Page