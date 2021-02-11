import styled from 'styled-components'


const Theme = styled.div`
  font-size: 1.8rem;
  svg{
    transition: color .5s;
    color: ${ props => props.darkTheme ? '#ccc' : '#555' };
    margin-left: 1rem;
  }
`

export default Theme
