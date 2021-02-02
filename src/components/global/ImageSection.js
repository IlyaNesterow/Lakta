import React, { useState, useEffect, useRef } from 'react'

import Container from '../../styles/images'


const Images = ({ pics, imgOnClick, colNum = 3 }) => {
  const [ cols, setCols ] = useState(parseInt(colNum))
  const mounted = useRef(false)

  useEffect(() => {
    if(pics.length < cols){
      pics.length < 9
        ? setCols(pics.length)
        : setCols(4)
    }
  }, [ cols, pics.length ])

  const generateSections = () => {
    const output = []
    const _pics = pics.map((pic, index) => {
      return { pic, index }
    })
    let picsPerSection = Math.ceil(_pics.length / cols)
    let _cols = cols

    for(let i = 1; i <= cols; i++){   
      const section = (
        <div 
          key={ i } 
          id="image-section"
        >
          {   
            _pics.slice(0, picsPerSection).map((pic) => 
              <img 
                key={ pic.pic + pic.index }
                src={ pic.pic }
                alt="Gallery item"
                onClick={() => {
                  if(mounted.current){
                    imgOnClick(pic.index)
                  }
                }}
              />
            ) 
          }
        </div>
      )
      _pics.splice(0, picsPerSection)
      output.push(section)
      _cols -= 1
      picsPerSection = Math.floor(_pics.length / _cols)
    }
    mounted.current = true

    return output
  }
  
  return(
    <Container
      cols={ cols } 
    >
      { generateSections() }
    </Container>
  )
}

export default Images

/*const images = pics.map((img, i) => {
    const subtractFive = (num) => 
      num > 4
        ? subtractFive(num - 5)
        : num

    let index = subtractFive(i)
 
    const props = {
      src: img,
      key: img + i,
      onClick: () => {
        imgOnClick(i + startingPoint)
      }
    }

    return index > 2 
      ? <img 
          { ...props }
          alt="Gallery item"
          className={`two-images ${ index === 3 ? 'right-most-image' : 'left-most-image' }`}
        />
      : <img
          { ...props }
          alt="Gallery item"
          className="three-images"
        />
  })*/