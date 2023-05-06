import * as React from 'react';
import {MenuElement} from '../../Types/types';
import './MenuItem.css'

const MenuItem: React.FC<MenuElement>  = ({texto , accion , clase = "" , target="", pointer})=>{
    return (
        <a className={`MenuItem ${clase}`}  href={`${target?target:""}`} onClick={()=>{ accion(pointer) }}>
            {texto}
        </a>
    )
}

export default MenuItem