import { useEffect } from 'react'
import ReactDOM from 'react-dom'


const Portal = (props) => {
  const parent = document.getElementById(props.parent)
  let element = document.createElement('div')
  
  useEffect(() => {
    parent.appendChild(element)
    document.body.style.overflowY = 'hidden'
    return () => {
      parent.removeChild(element)
      document.body.style.overflowY = 'auto'
    }
  })
  
  return ReactDOM.createPortal(
    props.children,
    element
  )
}

export default Portal