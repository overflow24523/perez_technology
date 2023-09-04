import { Ri24HoursLine, RiAddLine } from 'react-icons/ri'
import './Atenciones.css'
import { useEffect, useState } from 'react'
import { getToken } from '../../helpers/HandlerToken'
import { mostrarAlerta } from '../../helpers/MostrarAlerta'
import Atencion from '../Atencion/Atencion';
import BoxDialog from '../BoxDialog/BoxDialog';
import ModalAtencionAgregar from '../modals/Atencion/ModalAtencionAgregar/ModalAtencionAgregar'

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

    const [rolebox, setRolebox]  = useState(false)

    useEffect( ()=>{
        getAtenciones()
    }, [])

    return <div className="Atenciones">
                <div className='ctEstadisticas'>
                    <div className='ctNumber'>
                        {atencionList.length}
                    </div>
                    <div className='ctAddAtenciones' onClick={()=>setRolebox(true)}>
                        <div>Agregar Atención</div> 
                        <RiAddLine/>
                    </div>
                    <div className='ctUpdate' onClick={getAtenciones}>
                        <Ri24HoursLine />
                        <div className='ctLabel'>
                            Actualizar
                        </div>
                    </div>
                </div>
                <div className='ctAtenciones'>
                    {
                        atencionList.map(item =>{ 
                            const { id , user ,createdAt,detalles:descripcion  ,servicio ,importe:precio, product_list} = item 
                            const {nombre} = servicio
                            const {nombre:UserNombre} = user
                            return <Atencion 
                                        owner= {UserNombre}
                                        nombre={nombre}
                                        precio={precio}
                                        id={id}
                                        createdAt={createdAt}
                                        product_list={JSON.parse(product_list)}
                                        update={getAtenciones}
                                        descripcion={descripcion}
                                        key={id}
                                        />
                        })
                    }
                </div> 
                <BoxDialog isOpen={rolebox} children={ <ModalAtencionAgregar onClose={()=>setRolebox(false)} update={getAtenciones} /> } onClose={()=>setRolebox(false)} />
            </div> 

}

export default Atenciones