import styled from 'styled-components'


const Images = styled.div`
  width: 90%;
  margin-top: 2rem;
  margin-left: 5%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;

  #image-section{
    padding: .5rem;
    width: ${ props => 100 / props.cols }%;
  }
  
  #image-section img{
    width: 100%; 
    display: block;
    margin-bottom: 1rem;
    border-radius: 1rem;
    box-shadow: 0 0 .2rem #888;
  }
  @media only screen and (max-width: 1000px){
    margin-top: 1rem;
    #image-section{
      width: 50%;
    }
  }
  @media only screen and (max-width: 600px){
    display: block;
    #image-section{
      width: 100%;
      padding: 0;
    }
    img{
      margin-bottom: 1rem;
      border-radius: .7rem;
      border: solid 1px #888;
    }
  }
`

export default Images