import * as React from 'react';
import {FC} from 'react' ; 
import { Botton } from '../../Types/types';
import './Button.css'

const Button: FC<Botton>   = ({texto , accion, clase})=>{
    return (
        <div className={`${clase}`}  onClick={()=>{accion(texto)}}>
            {texto}
        </div>
    )
    
}

export default Button