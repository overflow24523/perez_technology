import * as React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import './Menu.css'

const Menu: React.FC<{open: boolean , closeHandler:  (arg: boolean) => void}> = ({open , closeHandler})=>{
    const action = (arg: string)=>{
        // alert(arg)
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
            <MenuItem texto = {"Home"} target="#Home" accion={action} clase={"active"}/>
            <MenuItem texto = {"Menu"} target="#Menu" accion={action} />
            <MenuItem texto = {"Story"} target="#Story" accion={action} />
            <MenuItem texto = {"News"} target="#News" accion={action} />
            <MenuItem texto = {"Contact"} target="#" accion={action} />
        </div>
        
    )
}

export default Menu