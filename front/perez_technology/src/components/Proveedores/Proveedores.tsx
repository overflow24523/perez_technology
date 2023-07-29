import './Proveedores.css'
import Proveedor from '../Proveedor/Proveedor';
const Proveedores  = ()=>{
    return <div className="Proveedores">
        <div className='ctOptions'>
            Opciones
        </div>
        <div className='ctProveedores'>
            <Proveedor />
        </div>
    </div>
}


export default Proveedores