import './Productos.css'
import Producto from '../Producto/Producto';
import {  useEffect, useState } from 'react';
import { getToken } from '../../helpers/HandlerToken';
import { mostrarAlerta } from '../../helpers/MostrarAlerta';
import { RiAddLine } from 'react-icons/ri'
import BoxDialog from '../BoxDialog/BoxDialog';
import ProductAddScreen from '../modals/Producto/ProductAddScreen/ProductAddScreen';

const Productos = ()=>{
    const [productoList , setProductList] = useState<[]>([])
    const [productNumber , setProductNumber] = useState<number>(0)
    const [rolebox, setRoleBox] = useState<boolean>(false)
    const [categoryList , setCategoryList] = useState<[]>([])
    const [proveedorList, setProveedorList] = useState<[]>([])

    const getProductos = ()=>{
        const bag = new FormData()
        bag.set('token', getToken())
        
        fetch('http://localhost:8081/api/producto/read', {
            method: 'POST',
            body: bag
        })
        .then(res => res.json())
        .then(arg => {
            if(arg.status == 200){
                setProductList(arg.bag)
                setProductNumber(arg.bag.length)
            }
            mostrarAlerta(arg)
        })
        .catch(err =>{
            console.log(err)
            mostrarAlerta({status: 500, msg: 'Algo salio mal'})
        })

    }

    const getCategorias =()=>{
        const bag = new FormData()
        bag.set( 'token',getToken())
        fetch('http://localhost:8081/api/categoria/read',{
            method: 'POST',
            body: bag
        })
        .then(res => res.json())
        .then(arg => {
            if(arg.status==200){
                setCategoryList(arg.bag)
            }
            mostrarAlerta(arg)
        })
        .catch(err => {
            console.log(err)
            mostrarAlerta({status: 500, msg: 'No dosponible'})
        })
    }

    const getProveedores = () =>{
        const bag  = new FormData()
        bag.set('token' , getToken())
        fetch('http://localhost:8081/api/proveedor/read', {
            method: 'POST',
            body: bag
        })
        .then(res => res.json())
        .then(arg =>{
            if(arg.status==200){
                setProveedorList(arg.bag)
            }
            mostrarAlerta(arg)
        })
        .catch(err=>{
            console.log(err)
            mostrarAlerta({status: 500, msg: 'No disponible'})
        })
    }


    useEffect(()=>{
        getProductos(),
        getCategorias(),
        getProveedores()
    },[])

    return <div className="Productos">
        <div className='ctEstadisticas'>
            <div className='ctCantidad'>
                Cantidad: {`${productNumber} producto${productNumber == 1?'':'s' }`}            
            </div>
            <div className='ctAddProduct' onClick={()=>{setRoleBox(true)}}>
                  <div>Agregar Producto</div> <RiAddLine/>
            </div>
        </div>

        <div className='ctProductos'>
            {
                productoList.map(item =>{
                    const {id, nombre, categoria , precio, cantidad, descripcion , codigo, proveedor} = item
                    const {label: nombreCategoria} = categoria
                    const {nombre: nombreProveedor} = proveedor
                    
                    return <Producto 
                                key={id}
                                uid={id} 
                                nombre={nombre} 
                                categoria={nombreCategoria}
                                precio ={precio}
                                cantidad={cantidad}
                                descripcion={descripcion}
                                codigo={codigo}
                                proveedor={nombreProveedor}
                                getProducto={getProductos}
                                categoryList={categoryList}
                                proveedorList={proveedorList}
                                dataCategory={categoria}
                                dataProveedor={proveedor}
                            />
                            
                })
            }
        </div>

        <BoxDialog isOpen={rolebox} onClose={()=>{setRoleBox(false)}} children={<ProductAddScreen categoryList={categoryList} proveedorList={proveedorList} onCreateNew={getProductos} onClose={()=>{setRoleBox(false)}} />}  />
    </div> 
}


export default Productos