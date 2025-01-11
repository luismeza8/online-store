import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function PriceFilter() {
  return (
    <>
      <Slider 
        range
        min={0}
        max={100}
        defaultValue={[5, 20]}
      />
    </>
  )
}
