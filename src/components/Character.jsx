import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { singleChar } from '../functions/functions'

const Character = () => {
  
    const params = useParams()
    useEffect(() => {
        singleChar(params.id+1)
    })
  
    return (
    <div>You are looking at the page for {params.id}</div>
  )
}

export default Character