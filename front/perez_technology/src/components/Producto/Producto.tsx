import { RiDeleteBin5Fill as DeleteIcon ,RiToolsFill as ToolsIcon} from 'react-icons/ri';
import './Producto.css'
import { tpCategoria, tpProducto, tpProveedor } from '../../Types/types';
import {FC, useEffect, useState} from 'react'
import BoxDialog from '../BoxDialog/BoxDialog';
import ProductSreenTools from '../modals/Producto/ProductScreenTools/ProductScreenTools';
import ProductEditScreen from '../modals/Producto/ProductEditScreen/ProductEditScreen';
import ProductViewMoreScreen from '../modals/Producto/ProductViewMoreScreen/ProductViewMoreScreen';
import { getToken } from '../../helpers/HandlerToken';
import { mostrarAlerta } from '../../helpers/MostrarAlerta';



const Producto: FC<tpProducto & {getProducto: ()=>void, categoryList:[] , proveedorList:[]} & {dataCategory: tpCategoria, dataProveedor: tpProveedor}> = ({uid,nombre, categoria , precio, cantidad, descripcion, codigo,proveedor, getProducto, categoryList, proveedorList, dataProveedor, dataCategory})=>{
    const [handlerScreen, setHanlderScreen] = useState<number>(0)

    const [rolebox, setRolebox] = useState(false)

    const cerrarDesdeModal = ()=>{
        setRolebox(false)
        setHanlderScreen(0);
    }

    const [screenTools, setScreenTools] = useState<React.ReactNode>(<ProductSreenTools  handlerClick={setHanlderScreen} onClose={cerrarDesdeModal}/>)

    const changeScreen = (arg: number)=>{
        switch(arg){
            case 0:
                setScreenTools(<ProductSreenTools  handlerClick={setHanlderScreen} onClose={cerrarDesdeModal}/>)
                break ;
            case 1:
                setScreenTools(<ProductEditScreen key={uid} getProductos={getProducto} handlerClick={setHanlderScreen} onClose={cerrarDesdeModal} categoryList={categoryList} poveedorList={proveedorList} cantidad={cantidad}  codigo={codigo} descripcion={descripcion} nombre={nombre} precio={precio}  uid={uid} dataCategoria={dataCategory} dataPoveedor={dataProveedor} categoria={categoria} proveedor={proveedor} />)                
                break ; 
            case 2:
                setScreenTools(<ProductViewMoreScreen handlerClick={setHanlderScreen} nombre={nombre} categoria={categoria} precio={precio} cantidad={cantidad} uid={uid}  codigo={codigo} descripcion={descripcion} proveedor={proveedor} onClose={cerrarDesdeModal} />)
                break ; 
        }
    }

    

    useEffect( ()=>{

        changeScreen(handlerScreen)

    }, [handlerScreen])
    

    

    const mostrarToolBox = ()=>{
        setRolebox(true)    
    }


    const deleteProducto = (target: number)=>{
        const bag  = new FormData()
        bag.set('token' , getToken())
        bag.set('target', String(target))

        fetch('http://localhost:8081/api/producto/delete', {
            method: 'POST',
            body: bag
        })
        .then(res => res.json())
        .then(arg => {
            if(arg.status ==200){
                getProducto()
            }
            mostrarAlerta(arg)
        })
        .catch(err => {
            console.log(err)
            mostrarAlerta({status: 500, msg: 'No disponible'})
        })



    }

    return <div className="Producto">
                <div className='ctCB'>
                    <img src="./src/assets/background/codigoBarras.png" alt="" />
                </div>
                <div className='ctNameAndCat'>
                    <div className='ctName'>
                        {nombre}
                    </div>
                    <div className='ctCat'>
                        {categoria}
                    </div>
                </div>
                <div className='ctPrecioAndAlmacen'> 
                    <div className='ctPrecio'>
                        {`$${precio}`}
                    </div>
                    <div className='ctAlmacen'>
                        { `${cantidad} en stock`}
                    </div>
                </div>
                <div className='ctDeleteAndTools'>
                    <div className='ctDelete' onClick={()=>{deleteProducto(uid)}}>
                        <DeleteIcon  />
                    </div>
                    <div className='lineDivider'> </div>
                    <div className='ctTools' onClick={()=>{mostrarToolBox()}}>
                        <ToolsIcon  />
                    </div>
                </div>

                <BoxDialog isOpen ={ rolebox} onClose={()=>{setRolebox(false)}}  children={screenTools}/>

            </div>
}

export default Producto


