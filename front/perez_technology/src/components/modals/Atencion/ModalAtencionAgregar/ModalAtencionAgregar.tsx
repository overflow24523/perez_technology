import { FC, useEffect, useState } from 'react'
import './ModalAtencionAgregar.css'
import { tpAtencionAddModal } from '../../../../Types/types'
import WindowBorderTop from '../../../WindowBorderTop/WindowBorderTop';

import 'survey-core/defaultV2.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { getToken, saveToken } from '../../../../helpers/HandlerToken';
import { JsonToFormData } from '../../../../helpers/JsonToFormData';
import { mostrarAlerta } from '../../../../helpers/MostrarAlerta';


const ModalAtencionAgregar: FC<tpAtencionAddModal> =({onClose, update})=>{

    const [serviceList, setServiceList]  = useState([])
    const [productList , setProductList] = useState([])

    const getServices = ()=>{
        const bag = new FormData()
        bag.set('token', String(getToken()))

        fetch('http://localhost:8081/api/servicio/read'  , {
            method: 'POST', 
            body: bag
        })
        .then(res => res.json())
        .then(async arg => {
            if(arg.status==200){
                setServiceList(await arg.bag.map((item: { nombre: string, id:number }) => {
                    const {id , nombre} = item
                    return {value: id, text: nombre}
                }))
            }
            // mostrarAlerta(arg)
        })
        .catch(err=>{
            console.log(err)
            // mostrarAlerta({status: 500, msg: 'No Disponible'})
        })
    }

    const getProductos = ()=>{
        const bag = new FormData()
        bag.set('token', String(getToken()))
        
        fetch('http://localhost:8081/api/producto/read', {
            method: 'POST',
            body: bag
        })
        .then(res => res.json())
        .then(async arg => {
            if(arg.status == 200){
                setProductList(await arg.bag.map((item: { id: number,  nombre: string })  =>{
                    const {id:value, nombre:text}  = item 
                    return {value , text}
                }))
            }
            // mostrarAlerta(arg)
        })
        .catch(err =>{
            console.log(err)
            // mostrarAlerta({status: 500, msg: 'Algo salio mal'})
        })

    }

    const crearAtencion  = (survey: { data: object, clear:()=>void})=> {
        const {data} = survey
        const bag = JsonToFormData(data)
        bag.set('token' , String(getToken()))

        fetch('http://localhost:8081/api/atencion/create', {
            method: 'POST', 
            body: bag
        })
        .then(res => res.json())
        .then(arg => {
            if(arg.status==200)update()
            mostrarAlerta(arg)
        })
        .catch(err => {
            console.log(err)
            mostrarAlerta({status: 500, msg: 'No disponible'})
        })


        survey.clear()
    }
    

    useEffect(()=>{
        getServices()
        getProductos()
    }, [])
    
    const surveyJson = {
        elements: [
            {
                name: "id_service",
                title: "Servicio dado:",
                type: "dropdown",
                isRequired: true,
                choices:serviceList,
                requiredErrorText: "Este campo es obligatorio",
            },{
                name: "product_list",
                title: "Productos Utilizados",
                type: "checkbox",
                isRequired: true,
                choices:productList,
                requiredErrorText: "Este campo es obligatorio",

            },{
                name: "importe",
                title: 'Total cobrado $', 
                type: 'text',
                inputType: "number", 
                isRequired: true, 
                requiredErrorText: "Este campo es obligatorio",
            },{
                name: "detalles",
                title: 'Detalles', 
                type: 'comment',
                isRequired: true, 
                requiredErrorText: "Este campo es obligatorio",
            },
            
        ],
        showCompletedPage: false,
        clearInvisibleValues: "onComplete",        
        completeText: "Crear"
      };


      const survey = new Model(surveyJson);

      
    return <div className='ModalAtencionAgregar'>
        <WindowBorderTop onBack={onClose} onClose={onClose}  title='Agregar atención'/>
        {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore */}
        <div className='ctScroller'>
            <Survey model={survey} onComplete={crearAtencion} />   
        </div>
    </div>
}


 export default ModalAtencionAgregar

