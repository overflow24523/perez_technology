import { FC } from 'react';
import { Botton } from '../../Types/types';
import './Button.css'

const Button: FC<Botton> = ({ texto, clase }) => {
    return (
        <button  className={clase}>
            <a href="/login">
                <div className='ctText'>
                    {texto}
                </div>
                <div id="clip">
                    <div id="leftTop" className="corner"></div>
                    <div id="rightBottom" className="corner"></div>
                    <div id="rightTop" className="corner"></div>
                    <div id="leftBottom" className="corner"></div>
                </div>
                <span id="rightArrow" className="arrow"></span>
                <span id="leftArrow" className="arrow"></span>
            </a>
        </button>
    )

}

export default Button