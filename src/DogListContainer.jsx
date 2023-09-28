// @ts-check
import { useEffect } from 'react'
import { useState } from 'react'
import { BreedsSelect } from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setbreeds] = useState([])
  const [selectBreed, setSelectedBreed] = useState();
 
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => {
        const list = data.message
        setbreeds(Object.keys(list))
      })
  }, []);
    
  return(
    <>
    <BreedsSelect breeds={breeds} setSelectedBreed={setSelectedBreed} selectBreed={selectBreed} />
    </>
  )
}

export default DogListContainer
