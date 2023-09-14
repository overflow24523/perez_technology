import { RiDeleteBin5Fill, RiToolsFill  } from 'react-icons/ri';
import './Proveedor.css'
import {FC, useState}  from 'react'
import { tpProveedor } from '../../Types/types';
import ProveedorScreenEditar from '../modals/Proveedor/ProveedorScreenEditar/ProveedorScreenEditar';
import BoxDialog from '../BoxDialog/BoxDialog';
import { getToken } from '../../helpers/HandlerToken';
import { mostrarAlerta } from '../../helpers/MostrarAlerta';
import { P2PSystem } from '../../helpers/P2PSystem';
const Proveedor: FC<tpProveedor & {getProveedor: ()=>void}> = ({id, nombre, getProveedor})=>{
    const [roleBox, setRoleBox] = useState<boolean>(false)

    const DeleteProveedor = ()=>{
        const bag = new FormData()
        bag.set('token' , String(getToken()))
        bag.set('target', String(id))

        fetch('http://localhost:8081/api/proveedor/delete', {
            method: 'POST',
            body: bag
        })
        .then(res => res.json())
        .then(arg => {
            if(arg.status==200){
                getProveedor()
            }
            mostrarAlerta(arg)
        })
        .catch(err =>{
            console.log(err)
            mostrarAlerta({status: 500, msg: 'No disponible'})
        })

    }

    return <div className="Proveedor">
        <div  className="ctName">
            {nombre}
        </div>
        <div className="ctOptions">
            <div className="ctDelete" onClick={()=>{P2PSystem(`Desea eliminar el proveedor ${nombre}` , DeleteProveedor)}}>
                 <RiDeleteBin5Fill  />
            </div>
            <div className='lineDivider'></div>
            <div className="ctTools" onClick={()=>{setRoleBox(true)}}> 
                <RiToolsFill   />
            </div>
        </div>

        <BoxDialog isOpen={roleBox} onClose={()=>{setRoleBox(false)}}  children={<ProveedorScreenEditar label={nombre} onClose={()=>{setRoleBox(false)}} getProveedores={getProveedor} uid={id} endpoint='update' />} />
        
    </div>
}


export default Proveedor