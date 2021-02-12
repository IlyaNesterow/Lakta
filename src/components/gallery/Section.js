import React from 'react'

import ImageSection from '../global/ImageSection'
import useModal from '../../hooks/useModal'


const Section = ({ data, lang }) => {
  const [ imgClickHandler, component ] = useModal(data.pictures)

  return(
    <>
      <h3>{ data.title[ lang ].toUpperCase() }</h3>
      <p>{ data.about[ lang ] }</p>
      <ImageSection
        pics={ data.pictures } 
        imgOnClick={ imgClickHandler } 
      />
      { component }
    </>
  )
} 

export default Section
