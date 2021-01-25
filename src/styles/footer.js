import styled from 'styled-components'


const Footer = styled.footer`
  width: 100%;
  height: auto; 
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  font-family: Ubuntu, sans-serif;
  background-color: ${ props => props.darkTheme ? '#232323' : '#f9f9ff' };
  /*box-shadow: 0 0 .1rem ${ props => props.darkTheme ? '#eee' : '#222' };*/
  div#languages{
    display: flex;
    align-items: center; 
    font-size: 1.6rem;
    margin-top: .5rem;
  }
  div#languages p{
    font-size: 1.1rem;
  }
  div#languages div{
    padding: .5rem;
  }
  .current-lang{
    background-color: #3377ffaa;
    border-radius: 1rem;
    box-shadow: 0 0 .2rem #888;
  }
  #left-part, #middle-part{
    display: flex;
    align-items: center;
  }
  #middle-part a{
    color: ${ props => props.darkTheme ? '#eee' : '#222' };
    font-weight: 600;
    font-size: 1.3rem;
    margin-right: .7rem;
  }
  #middle-part svg{
    margin-right: .4rem;
    font-size: 1.5rem;
    color: #3377ff;
  }
  p{
    color: #888;
  }
  @media only screen and (max-width: 800px){ 
    padding: 0.5rem 1rem;
    flex-wrap: wrap;
    #middle-part, #left-part{
      width: 50%;
    } 
    #left-part{
      margin-bottom: 1.2rem;
    }
    #middle-part{
      margin-bottom: 1.5rem;
      justify-content: center;
    }
    div#languages p{
      font-size: 1rem;
    }
    div#languages div{
      padding: .05rem .25rem;
      margin-right: .4rem; 
    }
  }
  @media only screen and (max-width: 600px){ 
    display: block;
    #middle-part{
      margin-bottom: 1.5rem;
      justify-content: right;
    }
  }
`

export default Footer