import Steak from '../Steak/Steak';
import './BodyHeader.css'
import CarouselType1 from '../CarouselType1/CarouselType1';
import  Slider from '../../db/Slider.json' 

const BodyHeader = () => {
  
  return (
    <div className="BodyHeader">
      <Steak />
      <CarouselType1 items={ Slider} />
    </div>
  );
}

export default BodyHeader;