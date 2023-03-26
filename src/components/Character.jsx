import React from 'react'
import { useParams } from 'react-router-dom'


const Character = () => {
  const params = useParams()
  
    return (
    <div>You are looking at the page for {params.id}</div>
  )
}

export default Character