import styled from 'styled-components'


const Slider = styled.div`
  overflow: hidden;
  position: relative;
  width: 100vw;
  height: ${ props => props.height || '100vh' };
  -webkit-overflow-scrolling: touch;
`

export default Slider