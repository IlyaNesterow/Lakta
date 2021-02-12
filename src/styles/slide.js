import styled from 'styled-components'


const Slide = styled.div`
  width: 100vw !important;
  height: 100%;
  position: relative;
  background-image: url(${ props => props.bgImage });
  background-size: cover;
  flex-shrink: 0;

  ::before {
    content: "";
    position: absolute;
    top: 0; left: 0;
    width: 100vw !important; height: 100% !important;
    background-image: url(${ props => props.bgImage });
    background-size: cover;
  }
`

export default Slide