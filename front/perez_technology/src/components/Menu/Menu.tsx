import * as React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import './Menu.css'
import { useState } from 'react';

const Menu: React.FC<{open: boolean , closeHandler:  (arg: boolean) => void}> = ({open , closeHandler})=>{

    const [itemActive, setItemActive] = useState([1,0,0,0,0])

    const action = (arg: number)=>{
        const aux = [...itemActive]
        for(let i =0;i<aux.length;i++){
            if(i==arg){
                aux[i]= 1
            }else{
                aux[i]= 0 
            }
        }
        setItemActive(aux)

    }
    return (
        <div className={`Menu ${open?'trs300left':''}`}>
            <div className='TitleYClose'>
                <div className='Title'>
                    Menu
                </div>
                <div className='Close' onClick={()=>{closeHandler(true)}}>
                    X
                </div>
            </div>
            <MenuItem texto = {"Inicio"} target="#inicio"   accion={action}   pointer={0}  clase={`${itemActive[0]?'active':''}`}/>
            <MenuItem texto = {"Nosotros"} target="#nosotros"   accion={action}   pointer={1}  clase={`${itemActive[1]?'active':''}`} />
            <MenuItem texto = {"Talleres"} target="#talleres" accion={action} pointer={2}  clase={`${itemActive[2]?'active':''}`} />
            <MenuItem texto = {"Promociones"} target="#promociones"   accion={action}   pointer={3}  clase={`${itemActive[3]?'active':''}`} />
            <MenuItem texto = {"Contacto"} target="#contacto"    accion={action}    pointer={4}  clase={`${itemActive[4]?'active':''}`}/>
        </div>
        
    )
}

export default Menu