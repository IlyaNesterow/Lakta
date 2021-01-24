import styled from 'styled-components'

const Footer = styled.footer`
  margin-top: 4rem;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto; 
  padding: 1rem;
  font-family: Ubuntu, sans-serif;
  background-color: ${ props => props.darkTheme ? '#232333' : '#f9f9ff' };
  box-shadow: 0 0 .1rem ${ props => props.darkTheme ? '#eee' : '#222' };
  div#languages{
    display: flex;
    justify-content: space-between;
  }
`

export default Footer