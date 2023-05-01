import * as React from 'react';
import {MenuElement} from '../../Types/types';
import './MenuItem.css'

const MenuItem: React.FC<MenuElement>  = ({texto , accion , clase = "" , target=""})=>{
    return (
        <div className={`MenuItem ${clase}`}  onClick={()=>{ accion(texto) }}>
            <a href={`${target?target:""}`}>{texto}</a>
        </div>
    )
}

export default MenuItem