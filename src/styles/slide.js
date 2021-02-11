import styled from 'styled-components'


const Slide = styled.div`
  width: ${ props => props.width || '100vw' };
  height: 100%;
  position: relative;

  ::before {
    content: "";
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-image: url(${ props => props.bgImage });
    background-size: cover;
    filter: grayscale(100%);
  }
`

export default Slide