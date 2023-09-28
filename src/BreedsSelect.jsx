// @ts-check
import React from 'react';

export const BreedsSelect = (props) => {
  function handleChange(event) {
    props.setSelectedBreed(event.target.value);
  };

  const optionItem = props.breeds.map((breed) =>
    <option key={breed} value={breed}>{breed}</option>
  );
  return (
    <>
  <select name="breed" onChange={handleChange} value={props.selectedBreed}>
    {optionItem}
  </select>
  </>
   )
   }

export default BreedsSelect
