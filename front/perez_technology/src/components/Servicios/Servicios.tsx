import { useEffect, useState } from 'react';
import './Servicios.css'
import { Ri24HoursLine, RiAddLine } from 'react-icons/ri';
import { getToken } from '../../helpers/HandlerToken';
import { mostrarAlerta } from '../../helpers/MostrarAlerta';
import Servicio from '../Servicio/Servicio';
const Servicios = ()=>{
    
    const [ServiceList, setServiceList] = useState<[]>([])

    const getServices = ()=>{
        const bag = new FormData()
        bag.set('token', String(getToken()))

        fetch('http://localhost:8081/api/servicio/read'  , {
            method: 'POST', 
            body: bag
        })
        .then(res => res.json())
        .then(arg => {
            if(arg.status==200){
                setServiceList(arg.bag)
            }
            mostrarAlerta(arg)
        })
        .catch(err=>{
            console.log(err)
            mostrarAlerta({status: 500, msg: 'No Disponible'})
        })
    }

    useEffect(()=>{
        getServices()
    },[])

    return <div className="Servicios">
                <div className="ctOptions">
                    <div className='ctNumber'>
                        {ServiceList.length}
                    </div>
                    
                    <div className='ctAgregar' >
                        <div>
                            Agregar Servicio
                        </div>
                        <RiAddLine />
                    </div>

                    <div className='ctUpdate' >
                        <Ri24HoursLine />
                        <div className='ctLabel'>
                            Actializar
                        </div>
                    </div>
                </div>
                <div className="ctServicios">
                    {ServiceList.map(item=>{
                        const {nombre} = item 
                        return <Servicio />
                    })}
                    
                </div>
    
        </div>
}


export default Servicios    

