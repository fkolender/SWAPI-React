import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { everyChar } from '../functions/functions'


const Home = () => {

    const[characters, setCharacters] = useState(null)

    useEffect(() => {everyChar(setCharacters)}, [])



  return (
    <>

     {characters != null ? (characters.map(character => 
        (<div key={character.name}>
            <a href={`/person/${characters.indexOf(character)}`}>{character.name}</a>
            <p>{character.birth_year}</p>
            
        </div>))) : (false)} 
    
    
    </>
  )
}

export default Home