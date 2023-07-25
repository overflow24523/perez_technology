import { RiDeleteBin5Fill as DeleteIcon ,RiToolsFill as ToolsIcon} from 'react-icons/ri';
import './Producto.css'

const Producto = ()=>{
    return <div className="Producto">
        <div className='ctCB'>
            <img src="./src/assets/background/codigoBarras.png" alt="" />
        </div>
        <div className='ctNameAndCat'>
            <div className='ctName'>
                Nombre
            </div>
            <div className='ctCat'>
                Categoria
            </div>
        </div>
        <div className='ctPrecioAndAlmacen'> 
            <div className='ctPrecio'>
                Precio
            </div>
            <div className='ctAlmacen'>
                Almacen
            </div>
        </div>
        <div className='ctDeleteAndTools'>
            <div className='ctDelete'>
                <DeleteIcon />
            </div>
            <div className='ctTools'>
                <ToolsIcon />
            </div>
        </div>
    </div>
}

export default Producto


