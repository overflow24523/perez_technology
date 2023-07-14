import Mensajes from '../Mensajes/Mensajes'
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
            children = <div> 4 </div>
            break;
        default:
            children = <div> Welcome </div>
            break; 
    }
    return <div className='AdminLayout'  >
        {children}
    </div>
}


export default AdminLayout