import styled from 'styled-components'


const Page = styled.div`
  background-color: ${ props => props.darkTheme ? 'rgba(0,0,0,0.7)' : '' };
  background-blend-mode: overlay;
  transition: background-color .5s;
  h1{
    padding: 2rem;
    padding-bottom: 1.3rem;
  }
`

export default Page