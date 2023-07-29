import './ProductEditScreen.css'
import WindowBorderTop from '../../../WindowBorderTop/WindowBorderTop';
import React, { FC,  useState } from 'react';
import { tpCategoria, tpProductModal, tpProducto, tpProveedor } from '../../../../Types/types';
import { getToken } from '../../../../helpers/HandlerToken';
import { mostrarAlerta } from '../../../../helpers/MostrarAlerta';

const ProductEditScreen: FC<tpProductModal & {categoryList:[], poveedorList:[]} & tpProducto & {dataPoveedor: tpProveedor , dataCategoria: tpCategoria , getProductos: ()=> void} > = ({uid, handlerClick, onClose, categoryList, poveedorList , cantidad,codigo, precio, descripcion, nombre, dataCategoria, dataPoveedor, getProductos })=> {

    const [formData, setFormData] = useState({
        cantidad: cantidad , 
        codigo: codigo ,
        id_categoria: dataCategoria.id, 
        descripcion: descripcion, 
        id_proveedor: dataPoveedor.id,
        nombre: nombre, 
        precio: precio
    })

    const [defaultData ,setDefaultData] = useState(formData) 

    const formReset = ()=>{
        setFormData({
            nombre: "",
            descripcion: "",
            codigo: "",
            id_categoria: 0,
            precio: 0, 
            cantidad: 0, 
            id_proveedor: 0
        })
    }

    const handlerSumit =  async (e: React.ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault()
        e.stopPropagation()
        console.log(formData , defaultData)
        const bag = new FormData()
        bag.set('token' , getToken())
        bag.set('target', String(uid))
        const claves = Object.keys(formData)
        await claves.forEach(item =>{
            if(Object(formData)[item]!=Object(defaultData)[item]){
                bag.set(item, Object(formData)[item])
            }
        })

        fetch('http://localhost:8081/api/producto/update', {
            method: 'POST',
            body: bag
        })
        .then(res => res.json())
        .then(arg => {

            if(arg.status == 200){
                getProductos()
                setDefaultData(formData)
            }

            mostrarAlerta(arg)
        })
        .catch(err => {
            console.log(err)
            mostrarAlerta({status: 500, msg: 'No disponible'})
        })

    }

    const handlerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>)=>{
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value
        })
    }

    

    return <div className='ProductEditScreen'>
        <WindowBorderTop onBack={()=>{handlerClick(0)}} title={`Editar Producto`} onClose={onClose} />
        <form action="#" onSubmit={handlerSumit}  className='formEditProduct'>
                <div className='frow'>           
                    <div className='fcolumn'>
                        Código:
                    </div>
                    <div className='fcolumn'>
                        <input type="text"   name='codigo' value={formData.codigo} placeholder='760CDE88' onChange={handlerChange} />
                    </div>
                </div>

                <div className='frow'>           
                    <div className='fcolumn'>
                        Nombre:
                    </div>
                    <div className='fcolumn'>
                        <input type="text"  name='nombre' value={formData.nombre} onChange={handlerChange}  placeholder='Pantalla TCL' />
                    </div>
                </div>

                <div className='frow'>           
                    <div className='fcolumn'>
                        Precio:
                    </div>
                    <div className='fcolumn'>
                        <input type="number"  name='precio' value={formData.precio} onChange={handlerChange} placeholder='50' />
                    </div>
                </div>

                <div className='frow'>           
                    <div className='fcolumn'>
                        Cantidad:
                    </div>
                    <div className='fcolumn'>
                        <input type="number"  name='cantidad' value={formData.cantidad}  onChange={handlerChange} placeholder='15' /> 
                    </div>
                </div>

                <div className='frow'>           
                    <div className='fcolumn'>
                        Categoría:
                    </div>
                    <div className='fcolumn'>
                        <select  name="id_categoria" value={formData.id_categoria} onChange={handlerChange}>
                            <option value="0">Seleccione</option>
                            {categoryList.map(item =>{
                                const {id , label } = item 
                                return <option key={id} value={id}>{label}</option>
                            })}
                        </select>
                    </div>
                </div>

                <div className='frow'>           
                    <div className='fcolumn'>
                        Proveedor:
                    </div>
                    <div className='fcolumn'>
                        <select  name="id_proveedor" value={formData.id_proveedor} onChange={handlerChange}>
                            <option value="0">Seleccione</option>
                            {poveedorList.map(item => {
                                const {id , nombre:name} = item 
                                return <option key={id} value={id}>{name}</option>
                            })}
                        </select>
                    </div>
                </div>

                <div className='frow'>           
                    <div className='fcolumn'>
                        Descripción:
                    </div>
                    <div className='fcolumn'>
                        <textarea  name="descripcion" value={formData.descripcion} onChange={handlerChange}  ></textarea>
                    </div>
                </div>

                <div className='rowEcual'>
                    <button type={'reset'} onClick={()=>{formReset()}}  className='btCancel'>
                        Cancelar
                    </button>
                    <button type={'submit'} className='btCreate'>
                        Editar
                    </button>
                </div>
                
            </form>

    </div>


}


export default ProductEditScreen