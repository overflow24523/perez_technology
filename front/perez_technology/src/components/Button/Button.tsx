import { FC } from 'react';
import { Botton } from '../../Types/types';
import './Button.css'

const Button: FC<Botton> = ({ texto, clase, mPointH }) => {
    return (
        <button  className={clase} onClick={(arg)=>{
                arg.preventDefault()
                arg.stopPropagation()
                mPointH(1)
            }}>
            <a href="#">
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