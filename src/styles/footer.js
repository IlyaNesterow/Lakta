import styled from 'styled-components'


const Footer = styled.footer`
  width: 100%;
  height: auto; 
  #upper-pannel{
    padding: 1rem 3rem;
    display: flex;
    justify-content: space-between;
    font-family: Ubuntu, sans-serif;
    background-color: ${ props => props.darkTheme ? '#111' : '#f9f9ff' };
  }
  box-shadow: 0 0 .1rem ${ props => props.darkTheme ? '#eee' : '#222' };
  
  .current-lang{
    background-color: #3377ffaa;
    border-radius: 1rem;
    box-shadow: 0 0 .2rem #888;
  }
  #left-part, #repository{
    display: flex;
    align-items: center;
  }
  #networks{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #networks svg{
    font-size: 2.7rem;
    padding: .5rem;
    color: ${ props => props.darkTheme ? '#eee' : '#222' }; 
  }
  #copyright{
    background-color: ${ props => props.darkTheme ? '#12121f' : '#eeeeff' };
    padding: 1rem;
    color: ${ props => props.darkTheme ? '#eee' : '#222' };
    text-align: center;
  }
  #copyright p{
    font-family: Montserrat, sans-serif;
    padding: .2rem 0; 
  }
  #author{
    font-weight: 500;
    font-family: 'IBM Plex Sans', sans-serif; 
  }
  p{
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 300;
    color: #888;
  }
  @media only screen and (max-width: 850px){ 
    #upper-pannel{
      padding: 0.5rem 1rem;
      flex-wrap: wrap;
    }
    #middle-part, #left-part{
      width: 50%;
    } 
    #left-part, #networks{
      margin-bottom: 1.2rem;
    }
    #middle-part{
      margin-bottom: 1.5rem;
      justify-content: center;
    }
  }
  @media only screen and (max-width: 600px){ 
    #upper-pannel{
      display: block;
    }
    #languages{
      margin-left: .1rem;
    }
    #middle-part{
      margin-bottom: 1.5rem;
      justify-content: right;
    }
    #copyright{
      text-align: left;
    }
  }
`

export default Footer