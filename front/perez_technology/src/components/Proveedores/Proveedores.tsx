import './Proveedores.css'
import Proveedor from '../Proveedor/Proveedor';
import { useEffect, useState } from 'react';
import { getToken } from '../../helpers/HandlerToken';
import { mostrarAlerta } from '../../helpers/MostrarAlerta';
import { RiAddLine } from 'react-icons/ri';
import BoxDialog from '../BoxDialog/BoxDialog';
import ProveedorScreenEditar from '../modals/Proveedor/ProveedorScreenEditar/ProveedorScreenEditar';
const Proveedores  = ()=>{

    const [proveedorList , setProveedorList] = useState<[]>([])
    const [proveedorNumber, setProveedorNumber] = useState<number>(0)

    const [rolebox , setRolebox] = useState<boolean>(false)
    
    const getProveedores  = ()=> {
        const bag  = new FormData()
        bag.set('token', getToken())

        fetch('http://localhost:8081/api/proveedor/read' , {
            method: 'POST',
            body: bag
        })
        .then( res => res.json())
        .then(arg => {
            if(arg.status == 200){
                setProveedorList(arg.bag)
                setProveedorNumber(arg.bag.length)
            }
            mostrarAlerta(arg)
        })
        .catch(err => {
            console.log(err)
            mostrarAlerta({status: 500, msg: 'No dispnible'})
        })
    }

    useEffect(()=>{
        getProveedores()
    } , [])


    return <div className="Proveedores">
        {/* <div className="ctOptions">
            <div className='ctCantidad'>
                {proveedorNumber==1?`${proveedorNumber} Proveedor`:`${proveedorNumber} Proveedores` }
            </div>
            <div className='ctAgregar' onClick={()=>{setRolebox(true)}}>
                <div>
                    Agregar Proveedor
                </div>
                <RiAddLine />
            </div>
        </div> */}
        <div className='ctProveedores'>
            {
                proveedorList.map(item =>{
                    const {id , nombre} = item
                    return <Proveedor id={id} key={id} nombre={nombre} getProveedor={getProveedores} />
                })
            }
            
        </div>
        <BoxDialog isOpen={rolebox} onClose={()=>{setRolebox(false)}}  children={<ProveedorScreenEditar label={''} onClose={()=>{setRolebox(false)}} getProveedores={getProveedores} uid={0} endpoint='create' />}/> 
    </div>
}


export default Proveedores