import './CarouselType1.css'
import { SplideSlide, Splide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'
import TrainStars from '../TrainStars/TrainStars';
import { FC } from 'react'
import { Carousel1 } from '../../Types/types';



const CarouselType1: FC<Carousel1> = ({ items }) => {
    return (
        <div className='CarouselType1' >
            <Splide aria-label="My Favorite Images" options={{ type: 'loop', pagination: false , autoplay: true}}>
                {items.map((arg, index)  => {
                    return (
                        <SplideSlide key={index}>
                            <div className='detailSplide'>
                                <div className='SteakFooter'>
                                    <div className='NameYPrice'>
                                        <div className='Name'>
                                            {arg.name}
                                        </div>
                                        <div className="Price">
                                            ${`${arg.price}`}
                                        </div>
                                    </div>
                                    <div className='CyStar'>
                                        <div className='Cy'>
                                            {arg.ratio}
                                        </div>
                                        <TrainStars stars={arg.stars as number[]} size={30} />
                                    </div>
                                </div>
                            </div>
                            <img src={`${arg.photo}`} alt="Image 2" />
                        </SplideSlide>
                    )
                })}
            </Splide>
        </div>
    )
}

export default CarouselType1