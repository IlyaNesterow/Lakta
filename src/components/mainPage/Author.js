import React from 'react'
import { useSelector } from 'react-redux'


const Author = ({ author }) => {
  const lang = useSelector(state => state.lang)

  return(
    <div id="author">
      <p>
        <span>{ `${ author.word[ lang ] }: ` }</span>
        <span>{ author.name[ lang ] }</span> 
      </p>
    </div>
  )
}

export default Author