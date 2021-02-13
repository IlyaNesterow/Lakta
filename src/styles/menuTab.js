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
    position: fixed;
    top: 4.7rem;
    height: calc(100vh - 3.8rem);
    z-index: 3;  
    padding: 0.5rem;
    width: 20rem;
    transition: right .3s;
    max-width: 60%;
    background-color: ${ props => props.darkTheme ? '#111' : '#fff' };
  }
  #background{
    position: fixed;
    top: 4.7rem;
    height: calc(100vh - 3.8rem);
    width: 100vw;
    z-index: 2;
    transition: left .3s;  
    background-color: ${ props => props.darkTheme ? 'rgba(16, 16, 16, 0.7)' : 'rgba(240, 240, 240, 0.7)' };
  }
  .opened-background{
    left: 0;
  }
  .closed-background{
    left: -100vw;
  }
  .menu-opened{
    right: 0;
  }
  .menu-closed{
    right: -25rem;
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