import * as React from 'react';
import {MenuElement} from '../../Types/types';
import './MenuItem.css'

const MenuItem: React.FC<MenuElement>  = ({texto , accion , clase = "" , target="", pointer , dtmAnimationType})=>{
    return (
        <a  className={`MenuItem ${clase}  ${dtmAnimationType}`}   href={`${target?target:""}`} onClick={()=>{  accion(pointer) }}>
            {texto}
        </a>
    )
}

export default MenuItem