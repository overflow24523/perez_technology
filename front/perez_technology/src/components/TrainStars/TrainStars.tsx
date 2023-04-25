import * as React from 'react';
import { FC } from 'react'
import { StarsTrain } from '../../Types/types';
import './TrainStars.css'

const TrainStars: FC<StarsTrain> = ({ stars  , size}) => {
    return (
        <div className='TrainStars'>
            {stars.map((item, index) => {
                switch (item) {
                    case  0:
                        return ( 
                            <img key={index} src="./src/assets/icons/starEmpty.png" alt="" width={`${size}`} height={`${size}`} />
                        )
                    case 1:
                        return ( 
                            <img key={index} src="./src/assets/icons/starMiddle.png" alt="" width={`${size}`} height={`${size}`} />
                        )
                    case 2:
                        return ( 
                            <img key={index} src="./src/assets/icons/starFull.png" alt="" width={`${size}`} height={`${size}`} />
                        )
                        
                }
            })}
        </div>
    )
}

export default TrainStars