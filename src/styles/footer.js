import styled from 'styled-components'


const Footer = styled.footer`
  width: 100%;
  height: auto; 
  #upper-pannel{
    padding: 1rem 3rem;
    display: flex;
    justify-content: space-between;
    font-family: Ubuntu, sans-serif;
    background-color: ${ props => props.darkTheme ? '#232323' : '#f9f9ff' };
  }
  box-shadow: 0 0 .1rem ${ props => props.darkTheme ? '#eee' : '#222' };
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
  #left-part, #repository{
    display: flex;
    align-items: center;
  }
  #networks-icons{
    margin-top: 1rem;
  }
  #whatsapp{
    color: #33cc77;
  }
  #instagram{
    color: #cccc33;
  }
  #pinterest{
    color: #ff3333;
  }
  #facebook{
    color: #3377ff;
  }
  #networks-icons a{   
    font-size: 2rem;
    padding: .5rem;
  }
  #repository{
    margin-top: 1rem; 
    margin-left: .3rem;
  }
  #repository a{
    color: ${ props => props.darkTheme ? '#eee' : '#222' };
    font-weight: 600;
    font-size: 1.3rem; 
    margin-right: .7rem;
  }
  #repository svg{
    margin-right: .4rem;
    font-size: 1.5rem;
    color: #3377ff;
  }
  #copyright{
    background-color: ${ props => props.darkTheme ? '#111' : '#eeeeff' };
    padding: 1rem;
    color: ${ props => props.darkTheme ? '#eee' : '#222' };
    text-align: center;
  }
  p{
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
    #networks{
      margin-right: 2vw;
      margin-top: .6rem;
      justify-content: center;
    }
    #networks-icons{
      margin-top: .5rem;
    }
    #networks-icons a{   
      font-size: 1.5rem;
    }
    #middle-part{
      margin-bottom: 1.5rem;
      justify-content: center;
    }
    #languages{
      margin-right: 2.9rem;
    }
    div#languages p{
      font-size: 1rem;
    }
    div#languages div{
      padding: .05rem .25rem;
      margin-right: .4rem; 
      margin-bottom: .75rem;
    }
  }
  @media only screen and (max-width: 600px){ 
    #upper-pannel{
      display: block;
    }
    #repository{
      margin-top: .5rem; 
      margin-left: .3rem;
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