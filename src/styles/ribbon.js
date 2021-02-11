import styled from 'styled-components'


const Ribbon = styled.div`
  display: flex;
  height: 100%;
  transition: transform ${ props => props.transition || '.5' }s;
  transform: ${ props => props.transformX || 'translateX(0px)' };
`

export default Ribbon