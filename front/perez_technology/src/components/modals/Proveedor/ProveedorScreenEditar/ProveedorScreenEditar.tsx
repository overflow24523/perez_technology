import WindowBorderTop from '../../../WindowBorderTop/WindowBorderTop';
import {FC, useState} from 'react'
import './ProveedorScreenEditar.css'
import { getToken } from '../../../../helpers/HandlerToken';
import { mostrarAlerta } from '../../../../helpers/MostrarAlerta';
const ProveedorScreenEditar: FC<{onClose: ()=>void, uid:number, getProveedores: ()=>void, label:string, endpoint: string}> = ({onClose, uid, getProveedores, label, endpoint}) => {

    const [ipEditar , setIpEditar ] = useState<string>(label)

    const sendEditar = ()=>{
        if(!ipEditar){
            mostrarAlerta({status: 200, msg: 'El nombre del proveedor es obligatorio'})
            return 
        }
        
        const bag = new FormData()
        bag.set('token', getToken())
        bag.set('target', String(uid))
        bag.set('nombre', ipEditar)

        fetch(`http://localhost:8081/api/proveedor/${endpoint}`, {
            method: 'POST',
            body: bag
        })
        .then(res => res.json())
        .then(arg => {
            if(arg.status ==200){
                getProveedores()
            }
            mostrarAlerta(arg)
        })
        .catch(err => {
            console.log(err)
            mostrarAlerta({status: 500, msg: 'No disponible'})
        })
        
        
    }

    return <div className="ProveedorScreenEditar">
        <WindowBorderTop onBack={onClose} title={endpoint=='update'?'Editar Proveedor':'Nuevo Proveedor'} onClose={onClose} />
        <form action="#" onSubmit={(arg)=>{arg.preventDefault(); sendEditar()}} className='formEditProveedor'> 
            <div className='frow'>
                <div className='fcolumn'>
                    Nombre: 
                </div>
                <div className='fcolumn'>
                    <input type="text" placeholder='Proveedor' value={ipEditar} onChange={(arg)=>{setIpEditar(arg.target.value)}}  />
                </div>
                <div className='fcolumn ctBtEditar'>
                    <div className='btEditar' onClick={sendEditar}>
                        {endpoint=='update'?"Editar":'Crear'}
                    </div>
                </div>
            </div>
        </form>
    </div>
}

export default ProveedorScreenEditar