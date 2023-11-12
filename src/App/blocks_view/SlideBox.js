import '../../static/Styles/blocks_view_css/SlideBox.css'
import { useState } from 'react';
import { ConstSlide } from '../const_blocks/blocks.ts';
import { Slide } from '../types/types.ts';

export default function SlideBox(props: Slide) {
    const [slideData, setSlideData] = useState(initialSlideData);

    const handleUpdateSlide = () => {
        const updatedData = updateSlideData();
        setSlideData(updatedData);
    };

    return (
        <div style={{
            backgroundColor: ${slideData.backgroundColor}
        }}>
      <>
      <h1>Slide ID: {slideData.id}</h1><p>Number of Slide: {slideData.numberOfSlide}</p><p>Background Color: #{slideData.backgroundColor}</p>
      </>
      {slide.elements.map((element, index) => (
        <div key={index}>{element}</div>
      ))}
      <button onClick={updateSlide}>Update Slide</button>
    </div>
    );
}