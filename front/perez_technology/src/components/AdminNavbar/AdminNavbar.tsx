import './AdminNavbar.css'
import {FC} from 'react'
const AdminNavbar: FC<{jostick: (arg:number)=>void}> = ({jostick})=>{

    return <div className='AdminNavbar'>
        <div className='AdminNavbarBrand'>
            Deivis
        </div>
        <div className='AdminNavbarNavbar'>
            <div className='AdminNavbarNavbarItem' onClick={()=>{jostick(1)}}>
                Ir al sitio    
            </div>
            <div className='AdminNavbarNavbarItem' onClick={()=>{jostick(2)}}>
                Usuarios
            </div>
            <div className='AdminNavbarNavbarItem' onClick={()=>{jostick(3)}}>
                Mensajes
            </div>
            <div className='AdminNavbarNavbarItem' onClick={()=>{jostick(4)}}>
                Almacen
            </div>
        </div>
    </div>
}


export default AdminNavbar