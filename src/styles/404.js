import styled from 'styled-components'

const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  p{
    font-size: 1.4rem;
    color: ${ props => props.darkTheme ? '#eee' : '#333' };
  }
  @media only screen and (max-width: 500px){ 
    p{
      font-size: 1.3rem;
    }
  }
  @media only screen and (max-width: 300px){ 
    p{
      font-size: 1.1rem;
    }
  }
`

export default Page