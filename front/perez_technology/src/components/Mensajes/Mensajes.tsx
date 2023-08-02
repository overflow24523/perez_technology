import './Mensajes.css'
import Mensaje from '../Mensaje/Mensaje';
import { useEffect, useState } from 'react';
import { getToken } from '../../helpers/HandlerToken';
import { mostrarAlerta } from '../../helpers/MostrarAlerta';
import { Ri24HoursLine } from 'react-icons/ri';

const Mensajes = ()=>{

    const [dataMesage , setDataMesage] = useState([])

    const loadMensajes = () => {
        const bag  = new FormData()
        bag.set('token', getToken())
        fetch('http://localhost:8081/getContactos', {
            method: 'POST', 
            body: bag
        })
        .then(res => res.json())
        .then(arg => {
            if(arg.status==200){
                setDataMesage(arg.bag)
            }
            mostrarAlerta(arg)
        })
        .catch(err=>{
            console.log(err)
            mostrarAlerta({status: 500, msg: 'No disponible'})
        })
    }

    const deleteMensaje = (target: number)=>{
        const bag = new FormData()
        bag.set('token', getToken())
        bag.set('target', String(target))

        fetch('http://localhost:8081/deleteContacto', {
            method: 'POST', 
            body: bag
        })
        .then(res => res.json())
        .then(arg => {
            if(arg.status==200){
                loadMensajes()
            }
            mostrarAlerta(arg)
        })
        .catch(err=>{
            console.log(err)
            mostrarAlerta({status: 500, msg: 'No disponible'})
        })

    }

    useEffect( ()=>{
        loadMensajes()
    } , [])

    return <div className='AdminMensajes'>


        <div className='ctProperties'>
            <div className='ctNumber'>
                {`${dataMesage.length} ${dataMesage.length==1?'Mensaje':'Mensajes'}`}
            </div>
            <div className='ctUpdate' onClick={loadMensajes}>
                <Ri24HoursLine />
                <div className='ctLabel'>
                    Actualizar
                </div>
            </div>
        </div>

        <div className='ctMensajes'>
            {
                dataMesage.map(item => {
                    const {id, nombre, telefono, mensaje} = item 
                    return <Mensaje body={mensaje} img={`./src/assets/icons/mensajes-google-removebg-preview.png`} name={nombre} uid={id} key={id} phone={telefono} deleteMensaje={deleteMensaje} />
                })
            }
                 
        </div>
    </div>
}


export default Mensajes