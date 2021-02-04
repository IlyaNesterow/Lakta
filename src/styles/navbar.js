import styled from 'styled-components'


const NAV = styled.nav`
  padding: 1rem;
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100vw;
  transition: background-color .2s;
  background-color: ${ props => props.darkTheme ? '#111' : '#fff' };
  display: flex;
  justify-content: space-between;
  z-index: 2; 

  #nav-link-area{
    display: flex;
    justify-content: space-between;
  }

  #nav-link{
    padding: .1rem 2rem;
    font-size: 1.2rem;
    color: ${ props => props.darkTheme ? '#fff' : '#333' };
  }

  #Menu{
    display: none;
  }

  #Menu svg{
    margin-left: 1.5rem;
  }

  .normal{
    color: ${ props => props.darkTheme ? '#fff' : '#333' }
  }

  .active{
    color: #3355ff;
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 3.6rem;
    height: 1.8rem;
    outline: none;
  }

  .switch input {
    position: absolute;
    top: -99999px;
    left: -99999px;
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #333;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 1.8rem;
  }
  .slider:before {
    position: absolute;
    content: "";
    height: 1.44rem;
    width: 1.44rem;
    left: .15rem;
    bottom: .18rem;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }
  input:checked + .slider {
    background-color: #fff;
  }
  input:checked + .slider:before {
    background-color: #333;
  }
  input:checked + .slider:before {
    -webkit-transform: translateX(1.8rem);
        -ms-transform: translateX(1.8rem);
            transform: translateX(1.8rem);
  }

  @media only screen and (max-width: 800px){
    #nav-link-area{
      display: none;
    }
    #Menu{
      display: block;
    } 
  }
`

export default NAV