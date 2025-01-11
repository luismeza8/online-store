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
      <div className="p-4">
        <h2 className="font-bold text-lg">Filter by price</h2>
        <Slider 
          range
          value={[firstValue, secondValue]}
          min={minValue}
          max={maxValue}
          defaultValue={[minValue, maxValue]}
          onChange={handleOnChangeSlider}
          className="mt-2"
        />
        <div className="text-sm mb-4 flex w-full justify-between">
          <p><b>From:</b> ${ firstValue }</p>
          <p><b>To:</b> ${ secondValue }</p>
        </div>
        <div className="flex w-full gap-2 justify-center">
          <button className="bg-gray-100 hover:bg-gray-200 w-[40%] py-1.5 rounded-3xl shadow-md" onClick={handleOnClickReset}>Reset</button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white w-[40%] py-1.5 rounded-3xl shadow-md" onClick={handleOnClickFilter}>Filter</button>
        </div>
      </div>
    </>
  )
}
