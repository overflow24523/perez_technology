import Brand from '../Brand/Brand';
import Menu from '../Menu/Menu';
import { useState } from 'react';

import './Navbar.css'; 
import Button from '../Button/Button';


const Navbar =()=>{

    const IsOpen = true
    const [ isOpen, setOpen ] = useState(IsOpen)
    const accion =(arg: string )=>{
        alert(arg)
    }

    const triggerMenu  = (arg: boolean) =>{
        setOpen(arg)    
    }

    return (
        <div className='Nabvar'>
            <Brand/>
            <div className='TriggerMenu' onClick={()=>{triggerMenu(false)}}>
                <img src="./src/assets/icons/btnMenu.png" alt=""  width={32} height={32}/>
            </div>
            <Menu open={isOpen} closeHandler = {triggerMenu} />
            <div className='CtRecervar'>
                <Button texto={"Reservation"} accion ={accion} clase={"btnRecervar"} />
            </div>
        </div>
    )
}


export default Navbar