import React from 'react'

import ImageSection from '../global/ImageSection'
import useModal from '../../hooks/useModal'


const Images = ({ pics }) => {
  const [ imgClickHandler, component ] = useModal(pics)

  return(
    <>
      <ImageSection  
        imgOnClick={ imgClickHandler }
        pics={ pics }
        colNum="4"
      />
      { component }
    </>
  )
}

export default React.memo(Images)