import styled from 'styled-components'


const MenuTab = styled.div`
  position: fixed;
  top: 4.7rem;
  height: calc(100vh - 3.8rem);
  width: 100vw;
  z-index: 3;  

  #right-tab{
    position: absolute;
    text-align: right;
    padding: 0.5rem;
    right: 0; top: 0;
    width: 20rem;
    max-width: 60%;
    height: calc(100vh - 3.8rem);
    background-color: ${ props => props.darkTheme ? '#111' : '#fff' };
  }

  #menu-links{
    width: 90%;
    margin-left: 5%;
  }
  #langs-theme{
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
  }
  #menu-link{
    width: 100%;
    padding: .7rem .5rem; 
    border-bottom: solid 1px ${ props => props.darkTheme ? 'rgba(222,222,222,0.25)' : 'rgba(0,0,0,0.25)' };
  }
  #menu-link a{
    color: ${ props => props.darkTheme ? '#ddd' : '#444' };
    transition: color .5s;
  }
  #menu-link:hover  a{
    color: #888;
  }
` 

export default MenuTab