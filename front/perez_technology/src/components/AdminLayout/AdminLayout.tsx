import Categorias from '../Categorias/Categorias'
import Mensajes from '../Mensajes/Mensajes'
import Productos from '../Productos/Productos'
import Proveedores from '../Proveedores/Proveedores'
import Servicios from '../Servicios/Servicios'
import Usuarios from '../Usuarios/Usuarios'
import './AdminLayout.css'
import { FC } from 'react'

const AdminLayout: FC<{ layout: number }> = ({ layout }) => {
    let children = <div></div>
    switch (layout) {
        case 2:
            children = <Usuarios />
            break;
        case 3:
            children = <Mensajes />
            break;
        case 4:
            children = <Categorias />
            break;
        case 5:
            children = <Proveedores />
        break;
        case 6:
            children = <Productos/>
            break;
        case 7: 
            children = <Servicios />
            break ; 
        default:
            children = <div> Welcome </div>
            break; 
    }
    return <div className='AdminLayout'  >
        {children}
    </div>
}


export default AdminLayout