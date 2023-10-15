// @ts-check
import { useState } from "react";
import { DogImage } from './DogImage'

export const Description = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg');

  const click = () => { 
    fetch('https://dog.ceo/api/breeds/image/random')
     .then(response => response.json())
     .then(data => {
       setDogUrl(data.message);
     });
  };

  return (
    <>
      <p>犬の画像を表示するサイトです。</p>
      <DogImage imageUrl={dogUrl} />
      <button type="button" onClick={click}>ボタン</button>
      </>
  )
}

