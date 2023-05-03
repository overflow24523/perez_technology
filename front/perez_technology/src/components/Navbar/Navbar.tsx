import Brand from '../Brand/Brand';
import Menu from '../Menu/Menu';
import { FC, useState } from 'react';

import './Navbar.css'; 
import Button from '../Button/Button';


const Navbar: FC<{upOrDown: boolean}> =({upOrDown})=>{

    const IsOpen = true
    const [ isOpen, setOpen ] = useState(IsOpen)
    

    const triggerMenu  = (arg: boolean) =>{
        setOpen(arg)    
    }

    return (
        <div className={`Nabvar ${upOrDown?'active':''}`} >
            <Brand/>
            <div className='TriggerMenu' onClick={()=>{triggerMenu(false)}}>
                <img src="./src/assets/icons/btnMenu.png" alt=""  width={32} height={32}/>
            </div>
            <Menu open={isOpen} closeHandler = {triggerMenu} />
            <div className='CtRecervar'>
                <Button texto={"ENTRAR"}  clase={"btnRecervar"} />
            </div>  
        </div>
    )
}


export default Navbar