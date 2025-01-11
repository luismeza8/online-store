import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useState } from 'react';

export default function PriceFilter({ getPriceFiltered }) {
  const minValue = 0;
  const maxValue = 1000;

  const [firstValue, setFirstValue] = useState(minValue);
  const [secondValue, setSecondValue] = useState(maxValue);

  const handleOnChangeSlider = (values) => {
    setFirstValue(values[0]);
    setSecondValue(values[1]);
  }

  const handleOnClickReset = () => {
    setFirstValue(minValue);
    setSecondValue(maxValue);
    getPriceFiltered([minValue, maxValue]);
  }

  const handleOnClickFilter = () => {
    getPriceFiltered([firstValue, secondValue]);
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
        <button onClick={handleOnClickFilter} className="bg-gray-400 w-full">Filter</button>
      </div>
    </>
  )
}
