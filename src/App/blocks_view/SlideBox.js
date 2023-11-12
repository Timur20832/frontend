import '../../static/Styles/blocks_view_css/SlideBox.css'
import { useState } from 'react';
import { Slide } from '../types/types';

export default function SlideBox() {
  const [slideData, setSlideData] = useState();
  return (
    <>
      <div style={{ backgroundColor: `#${Slide.backgroundColor}` }}>
      <h1>Slide ID: {Slide.id}</h1>
      <p>Number of Slide: {Slide.numberOfSlide}</p>
      <p>Background Color: #{Slide.backgroundColor}</p>
      {Slide.elements.map((element, index) => (
      <div key={index}>{element}</div>
      ))}
      </div>
    </>
  );
}