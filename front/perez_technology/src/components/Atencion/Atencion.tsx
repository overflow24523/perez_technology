import { RiDeleteBin5Fill as DeleteIcon , RiEyeFill as ViewEye} from 'react-icons/ri';
import './Atencion.css'
const Atencion =() =>{
    return <div className="Atencion"> 
        <div className='ctDate'>
            10:35
            <div className='lineDivider'> </div>
            25/8/31
        </div>
        <div className='ctNombre' >
            Reparación
        </div>
        <div className='ctProductos'>
                5 Productos
        </div>
        <div className='ctPrecio'>
            $ 150
        </div>
        <div className='ctDeleteAndTools'>
                    <div className='ctDelete'>
                        <DeleteIcon  />
                    </div>
                    <div className='lineDivider'> </div>
                    <div className='ctTools' >
                        <ViewEye />
                    </div>
                </div>

    </div>
}


export default Atencion