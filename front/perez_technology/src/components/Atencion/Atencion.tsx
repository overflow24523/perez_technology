import { RiDeleteBin5Fill as DeleteIcon , RiEyeFill as ViewEye} from 'react-icons/ri';
import './Atencion.css'
import { FC, useState } from 'react';
import { tpAtencion } from '../../Types/types';
import { getToken } from '../../helpers/HandlerToken';
import { mostrarAlerta } from '../../helpers/MostrarAlerta';
import { P2PSystem } from '../../helpers/P2PSystem';
import BoxDialog from '../BoxDialog/BoxDialog';
import ModalAtencionView from '../modals/Atencion/ModalAtencionView/ModalAtencionView';

const Atencion:FC<tpAtencion> =({id, nombre, precio,descripcion , createdAt , product_list, update, owner}) =>{

    const [rolebox , setRoleBox] = useState(false)
    
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
            <div className='ctTools' onClick={()=>setRoleBox(true)}>
                <ViewEye />
            </div>
        </div>

        <BoxDialog isOpen={rolebox}
        onClose={()=>setRoleBox(false)}
        children={<ModalAtencionView 
                        onClose={()=>setRoleBox(false)}
                        date={createdAt.split('T')[0]}
                        almacenero={owner}
                        descripcion={descripcion}
                        importe={precio}
                        product_list={product_list}
                        servicio={nombre}
                        
                        />} 
        />



    </div>
}


export default Atencion