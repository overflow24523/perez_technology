import { Ri24HoursLine, RiAddLine } from 'react-icons/ri'
import './Atenciones.css'
import { useEffect, useState } from 'react'
import { getToken } from '../../helpers/HandlerToken'
import { mostrarAlerta } from '../../helpers/MostrarAlerta'
import Atencion from '../Atencion/Atencion';

const Atenciones = () => {

    const [atencionList , setAtencionList] = useState([])

    const getAtenciones = ()=>{
        const bag = new FormData()
        bag.set('token', String(getToken()))

        fetch('http://localhost:8081/api/atencion/read', {
            method: 'POST',
             body: bag
        })
        .then(res => res.json())
        .then(arg => {
            if(arg.status==200){
                setAtencionList(arg.bag)
            }
            mostrarAlerta(arg)
        })
        .catch( err => {
            console.log(err)
            mostrarAlerta({status: 500, msg: 'No disponible'})            
        })
    }

    useEffect( ()=>{
        getAtenciones()
    } , [])

    


    return <div className="Atenciones">
                <div className='ctEstadisticas'>
                    <div className='ctNumber'>
                        {atencionList.length}
                    </div>
                    <div className='ctAddAtenciones'>
                        <div>Agregar Atención</div> 
                        <RiAddLine/>
                    </div>
                    <div className='ctUpdate'>
                        <Ri24HoursLine />
                        <div className='ctLabel'>
                            Actializar
                        </div>
                    </div>
                </div>
                <div className='ctAtenciones'>
                    <Atencion />
                </div> 
            </div> 

}

export default Atenciones