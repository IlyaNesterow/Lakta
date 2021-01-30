import styled from 'styled-components'

const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  p{
    font-size: 1.4rem;
    color: ${ props => props.darkTheme ? '#eee' : '#333' };
  }
`

export default Page