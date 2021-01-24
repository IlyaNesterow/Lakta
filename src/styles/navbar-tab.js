import styled from 'styled-components'

const Tab = styled.div`
  #nav-link-tab{
    display: none;
  }
  @media only screen and (max-width: 800px){
    #nav-link-tab{
      display: block;
      position: fixed;
      z-index: 3;
      width: 100%;
      height: 40vh;
      background-color: #3355ff;
      top: 5rem;
    }
  }
`

export default Tab