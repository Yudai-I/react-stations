import React, { useState,useEffect } from 'react';


export const BreedsSelect = props => {
const [images, setImages] = useState([]);

const OptionItems = Object.keys(props.breeds).map(breed => (
  <option key={breed} value={breed}>{breed}</option>
))

const handleChange = e => {
  props.setSelectedBreed(e.target.value);
};

  useEffect(() => {
    if (props.selectedBreed) {
      fetch(`https://dog.ceo/api/breed/${props.selectedBreed}/images`)
        .then(response => response.json())
        .then(data => {
          setImages(data.message);
        })
        .catch(error => console.error(error));
    }
  }, [props.selectedBreed]);

  const clicks = () => { 
    images.map((image, index) => (
      <img key={index} src={image} alt={`Dog ${index}`} />
    ))
  };

  return (
    <>
  <select onChange={handleChange} value={props.selectedBreed}>
    {OptionItems}
  </select>
  <button onClick={clicks}>表示</button>
  </>
   )
   }

export default BreedsSelect
