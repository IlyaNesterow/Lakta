import styled from 'styled-components'


const Slider = styled.div`
  overflow: hidden;
  position: relative;
  height: ${ props => props.height || '100vh' };
`

export default Slider