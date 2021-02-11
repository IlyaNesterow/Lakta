import styled from 'styled-components'


const Ribbon = styled.div`
  display: flex;
  height: 100%;
  transition: transform .5s;
  transform: ${ props => props.transformX || 'translateX(0)' };
`

export default Ribbon