import React from 'react'

import ImageSection from '../global/ImageSection'
import useModal from '../../hooks/useModal'


const Section = ({ data, lang }) => {
  const [ imgClickHandler, component ] = useModal(data.pictures)

  return(
    <>
      <h3>{ data.title[ lang ][0].toUpperCase() + data.title[ lang ].substring(1) }</h3>
      <ImageSection
        pics={ data.pictures }
        imgOnClick={ imgClickHandler }
      />
      { component }
    </>
  )
} 

export default Section
