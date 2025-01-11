import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useState } from 'react';

export default function PriceFilter() {
  const minValue = 0;
  const maxValue = 100;

  const [firstValue, setFirstValue] = useState(minValue);
  const [secondValue, setSecondValue] = useState(maxValue);

  const handleOnChangeSlider = (values) => {
    setFirstValue(values[0]);
    setSecondValue(values[1]);
  }

  const handleOnClickReset = () => {
    setFirstValue(minValue);
    setSecondValue(maxValue);
  }

  return (
    <>
      <h2>Filter by price</h2>
      <Slider 
        range
        value={[firstValue, secondValue]}
        min={minValue}
        max={maxValue}
        defaultValue={[minValue, maxValue]}
        onChange={handleOnChangeSlider}
      />
      <div className="flex w-full justify-between">
        <p>From: ${ firstValue }</p>
        <p>To: ${ secondValue }</p>
      </div>
      <div className="flex w-full">
        <button onClick={handleOnClickReset} className="bg-gray-200 w-full">Reset</button>
        <button className="bg-gray-400 w-full">Filter</button>
      </div>
    </>
  )
}
