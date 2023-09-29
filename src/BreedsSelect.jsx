import React from 'react';

export const BreedsSelect = (props) => {
const OptionItems = Object.keys(props.breeds).map((breed) => (
  <option key={breed} value={breed}>{breed}</option>
))
  return (
  <select onChange={props.handleChange} value={props.selectedBreeds}>
    {OptionItems}
  </select>
   )
   }

export default BreedsSelect
