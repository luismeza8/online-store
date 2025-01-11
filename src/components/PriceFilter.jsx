import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useEffect, useState } from 'react';

export default function PriceFilter() {
  const minValue = 0;
  const maxValue = 100;

  const [firstValue, setFirstValue] = useState(minValue);
  const [secondValue, setSecondValue] = useState(maxValue);

  useEffect(() => {
    console.log("first value:", firstValue)
    console.log("second value:", secondValue)
  }, [firstValue, secondValue]);

  return (
    <>
      <h2>Filtrar por precio</h2>
      <Slider 
        range
        value={[firstValue, secondValue]}
        min={minValue}
        max={maxValue}
        defaultValue={[minValue, maxValue]}
        onChange={(values) => {
          setFirstValue(values[0])
          setSecondValue(values[1])
        }}
      />
      <div className="flex w-full justify-between">
        <p>Desde: ${ firstValue }</p>
        <p>Hasta: ${ secondValue }</p>
      </div>
      <button>Filtrar</button>
    </>
  )
}
