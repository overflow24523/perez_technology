import { RiDeleteBin5Fill as DeleteIcon , RiEyeFill as ViewEye} from 'react-icons/ri';
import './Atencion.css'
import { FC } from 'react';
import { tpAtencion } from '../../Types/types';
import { getToken } from '../../helpers/HandlerToken';
import { mostrarAlerta } from '../../helpers/MostrarAlerta';
import { P2PSystem } from '../../helpers/P2PSystem';

const Atencion:FC<tpAtencion> =({id , nombre,precio, createdAt , product_list, update}) =>{
    
    const DeleteAtencion =()=>{
        const bag = new FormData()
        bag.set('token', String(getToken()))
        bag.set('target' , String(id))

        fetch('http://localhost:8081/api/atencion/delete', {
            method: 'POST', 
            body: bag
        })
        .then(res => res.json())
        .then(arg =>{
            if(arg.status==200)update()
            mostrarAlerta(arg)
        })
        .catch(err=>{
            console.log(err)
            mostrarAlerta({status: 500, msg: 'No disponible'})
        })
    }

    const getHora  = (date: string)=>{
        const Time = new Date(date)        
        return `${Time.getUTCHours()}:${Time.getUTCMinutes()}:${Time.getUTCSeconds()}`
    }

    return <div className="Atencion"> 
        <div className='ctDate'>
            {
                getHora(createdAt)
            }
            <div className='lineDivider'> </div>
            {
                createdAt.split('T')[0]
            }
        </div>
        <div className='ctNombre' >
            {nombre}
        </div>
        <div className='ctProductos'>
                Productos: {product_list.length} 
        </div>
        <div className='ctPrecio'>
            $ {precio}
        </div>
        <div className='ctDeleteAndTools'>
            <div className='ctDelete' onClick={()=>{
                P2PSystem(`Desea eliminar la atención ${nombre}` , DeleteAtencion)
            }}>
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