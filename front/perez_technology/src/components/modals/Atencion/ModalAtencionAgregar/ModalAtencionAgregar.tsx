import { FC, useEffect, useState } from 'react'
import './ModalAtencionAgregar.css'
import { tpAtencionAddModal } from '../../../../Types/types'
import WindowBorderTop from '../../../WindowBorderTop/WindowBorderTop';

import 'survey-core/defaultV2.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { getToken } from '../../../../helpers/HandlerToken';


const ModalAtencionAgregar: FC<tpAtencionAddModal> =({onClose})=>{

    const [serviceList, setServiceList] = useState([])

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

    useEffect(()=>{
        getServices()
    }, [])
    
    const surveyJson = {
        elements: [ 
          {
            name: "Servicio",
            title: "Seleccione un servicio:",
            type: "dropdown",
            isRequired: true,
            choices:serviceList
        },
        {
            type: 'html',
            name: 'buttonContainer',
            html: `
              <div style="display: flex; justify-content: space-between;">
                    <button type="button" class="survey-cancel-button ">Cancelar</button>
                    <button type="button" class="survey-complete-button">Crear</button>
              </div>
            `,
          }
        ],
        showCompleteButton: false
      };

      const survey = new Model(surveyJson);

      
    return <div className='ModalAtencionAgregar'>
        <WindowBorderTop onBack={onClose} onClose={onClose}  title='Agregar atención'/>
        {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore */}
        <Survey model={survey} />   
    </div>
}


 export default ModalAtencionAgregar


