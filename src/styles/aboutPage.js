import styled from 'styled-components'


const Page = styled.div`
  background-color: ${ props => props.darkTheme ? 'rgba(0,0,0,0.7)' : '' };
  background-blend-mode: overlay;
  transition: background-color .5s;
  h1{
    padding: 2rem;
    padding-bottom: 1.3rem;
  }

  div#introduction,
  div#about-products, 
  div#products{
    padding: 2rem 10%;
    height: 70vh;
    background-color: ${ props => props.darkTheme ? 'rgba(0,0,0,0.9)' : 'rgba(255,255,255,0.95)' };
    background-blend-mode: overlay;
    background-size: cover;
    transition: background-color .7s;
  }
  div#introduction{
    background-image: url(${ props => props.image1 });
  }
  div#about-products{
    background-image: url(${ props => props.image2 });
  }
  div#products{
    background-image: url(${ props => props.image3 });
  }
  @media only screen and (min-width: 850px){
    div#introduction p,
    div#about-products p, 
    div#products p{
      font-size: 1.4rem;
      color: #888;
      transition: all .8s ease-in;
      width: 60%;
    }
    div#introduction:hover,
    div#about-products:hover,
    div#products:hover{ 
      background-color: ${ props => props.darkTheme ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.6)' };
    }
    div#introduction:hover p{
      padding: 25vh 20%; 
      width: 100%;
      color: ${ props => props.darkTheme ? '#eee' : '#333' };
    }
    div#about-products:hover p{
      padding: 28vh 20%;
      width: 100%;
      color: ${ props => props.darkTheme ? '#eee' : '#333' };
    }
    div#products:hover p{
      padding: 20vh 20%;
      width: 100%;
      color: ${ props => props.darkTheme ? '#eee' : '#333' };
    }
  }
  @media only screen and (max-width: 850px){ 
    div#introduction,
    div#about-products,
    div#products{ 
      background-color: ${ props => props.darkTheme ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)' };
      display: flex;
      justify-content: center;
      align-items: center;
    }
    div p{
      width: 80%;  
      font-size: 1.2rem;
      color: ${ props => props.darkTheme ? '#eee' : '#333' };
    }
  }
`

export default Page