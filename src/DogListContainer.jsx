// @ts-check
import React from 'react';
import { useEffect } from 'react'
import { useState } from 'react'
import { BreedsSelect } from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setbreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState('');
  const handleChange = e => {
    setSelectedBreed(e.target.value);
  };
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(data => setbreeds(data.message))
  }, []);
    
  return(
    <BreedsSelect breeds={breeds} handleChange={handleChange} selectedBreeds={selectedBreed} />
  )
}

export default DogListContainer
