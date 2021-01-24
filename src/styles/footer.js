import styled from 'styled-components'

const Footer = styled.footer`
  margin-top: 4rem;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto; 
  padding: 1rem;
  font-family: Ubuntu, sans-serif;
  background-color: ${ props => props.theme ? '#f9f9ff' : '#232333' };
  box-shadow: 0 0 .1rem ${ props => props.theme ? '#222' : '#eee' };
`

export default Footer