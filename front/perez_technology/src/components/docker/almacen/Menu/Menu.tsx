import * as React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import './Menu.css'
import { useState } from 'react';

const Menu: React.FC<{open: boolean , closeHandler:  (arg: boolean) => void , jostick: (arg: number) => void} > = ({open , closeHandler, jostick})=>{

    const [itemActive, setItemActive] = useState([0,1,0])

    const action = (arg: number , target: string)=>{
        
        const aux = [...itemActive]
        for(let i =0;i<aux.length;i++){
            if(i==arg){
                aux[i]= 1
            }else{
                aux[i]= 0 
            }
        }
        setItemActive(aux)
        jostick(Number(target))

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

            <MenuItem texto = {"Ir al sitio"}        target="1"     accion={action}    pointer={0}  clase={`${itemActive[0]?'active':''} ` } dtmAnimationType='T1'/>
            <MenuItem texto = {"Productos"}          target="2"     accion={action}    pointer={3}  clase={`${itemActive[1]?'active':''} ` } dtmAnimationType='T1'/>
            <MenuItem texto = {"Atenciones"}         target="3"     accion={action}    pointer={4}  clase={`${itemActive[2]?'active':''} ` } dtmAnimationType='T1'/>
            
    </div>)
    
}

export default Menu