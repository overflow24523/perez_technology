import './ProductAddScreen.css'
import WindowBorderTop from '../../../WindowBorderTop/WindowBorderTop';
import React, { FC, useState } from 'react';
import { tpProductAddScreen } from '../../../../Types/types';
import { getToken } from '../../../../helpers/HandlerToken';
import { mostrarAlerta } from '../../../../helpers/MostrarAlerta';

const ProductAddScreen:FC<tpProductAddScreen> = ({categoryList ,proveedorList, onCreateNew , onClose})=>{
    
    const [formData, setFormData] = useState({
        nombre: "",
        descripcion: "",
        codigo: "",
        id_categoria: 0,
        precio: 0, 
        cantidad: 0, 
        id_proveedor: 0
    })

    const handlerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>)=>{
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value
        })
    }

    const handlerSumit = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        e.stopPropagation()
        const bag = new FormData()
        bag.set('token', String(getToken()))

        const claves = Object.keys(formData)
        await claves.forEach(item =>{
            bag.set(item, Object(formData)[item])
        })
        
        formReset()

        fetch('http://localhost:8081/api/producto/create',{
            method: 'POST', 
            body: bag
        })
        .then(res => res.json())
        .then(arg => {
            if(arg.status ==200){
                onCreateNew()
            }
            mostrarAlerta(arg)
        })
        .catch(err =>{
            console.log(err)
            mostrarAlerta({status: 200, msg: 'No disponible'})
        })



    }

    const formReset = ()=>{
        setFormData({
            cantidad: 0 , 
            codigo: '' ,
            id_categoria: 0, 
            descripcion: '', 
            id_proveedor: 0,
            nombre: '', 
            precio: 0
        })
    }
    

    return <div className='ProductAddScreen'>
        <WindowBorderTop onBack={onClose} title='Agregar Producto ' onClose={onClose}/ >
            <form action="#" onSubmit={handlerSumit}  className='formAddProduct'>
                <div className='frow'>           
                    <div className='fcolumn'>
                        Código:
                    </div>
                    <div className='fcolumn'>
                        <input type="text"  required name='codigo' value={formData.codigo} placeholder='760CDE88' onChange={handlerChange} />
                    </div>
                </div>

                <div className='frow'>           
                    <div className='fcolumn'>
                        Nombre:
                    </div>
                    <div className='fcolumn'>
                        <input type="text" required name='nombre' value={formData.nombre} onChange={handlerChange}  placeholder='Pantalla TCL' />
                    </div>
                </div>

                <div className='frow'>           
                    <div className='fcolumn'>
                        Precio:
                    </div>
                    <div className='fcolumn'>
                        <input type="number" required name='precio' value={formData.precio} onChange={handlerChange} placeholder='50' />
                    </div>
                </div>

                <div className='frow'>           
                    <div className='fcolumn'>
                        Cantidad:
                    </div>
                    <div className='fcolumn'>
                        <input type="number" required name='cantidad' value={formData.cantidad}  onChange={handlerChange} placeholder='15' /> 
                    </div>
                </div>

                <div className='frow'>           
                    <div className='fcolumn'>
                        Categoría:
                    </div>
                    <div className='fcolumn'>
                        <select required name="id_categoria" value={formData.id_categoria} onChange={handlerChange}>
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
                        <select required name="id_proveedor" value={formData.id_proveedor} onChange={handlerChange}>
                            <option value="0">Seleccione</option>
                            {proveedorList.map(item => {
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
                        <textarea required name="descripcion" value={formData.descripcion} onChange={handlerChange}  ></textarea>
                    </div>
                </div>

                <div className='rowEcual'>
                    <button type={'reset'} onClick={()=>{formReset()}}  className='btCancel'>
                        Cancelar
                    </button>
                    <button type={'submit'} className='btCreate'>
                        Crear
                    </button>
                </div>
                
            </form>

    </div>
}


export default ProductAddScreen