import './Productos.css'
import Producto from '../Producto/Producto';
const Productos = ()=>{
    return <div className="Productos">
        <div className='ctEstadisticas'>
            Aqui las estadisticas 
        </div>
        <div className='ctProductos'>
            <Producto /> 
        </div>
    </div>
}


export default Productos