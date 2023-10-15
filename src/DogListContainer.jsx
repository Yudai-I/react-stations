// @ts-check
import React from 'react';
import { useState, useEffect } from 'react'
import { BreedsSelect } from './BreedsSelect'
import { DogImage } from './DogImage';

export const DogListContainer = () => {
  const [breeds, setbreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState('');
  const [images, setImages] = useState([]);
  
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(data => setbreeds(data.message))
  }, []);
    
  return(
    <>
    <BreedsSelect breeds={breeds} selectedBreeds={selectedBreed} setSelectedBreed={setSelectedBreed} />
    <DogImage image={images} selectedBreeds={selectedBreed} />
    </>
  )
}

export default DogListContainer
