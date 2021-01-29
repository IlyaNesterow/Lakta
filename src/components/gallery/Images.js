import React from 'react'


const Images = ({ pics, imgOnClick }) => {
  const images = pics.map((img, i) => {
    const subtractFive = (num) => 
      num > 4
        ? subtractFive(num - 5)
        : num

    let index = subtractFive(i)
 
    const props = {
      src: img,
      key: img + i,
      onClick: () => {
        imgOnClick(i)
      },
      alt: 'Gallery item'
    }

    return index > 2 
      ? <img 
          { ...props }
          className={`two-images ${ index === 3 ? 'right-most-image' : 'left-most-image' }`}
        />
      : <img
          { ...props }
          className="three-images"
        />
  })
  
  return(
    <div id="images">
      { images }
    </div>
  )
}

export default Images