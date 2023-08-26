import { FC, useState } from 'react'
import './ServicioScreenOneInput.css'
import WindowBorderTop from '../../../WindowBorderTop/WindowBorderTop';
import { getToken } from '../../../../helpers/HandlerToken';
import { mostrarAlerta } from '../../../../helpers/MostrarAlerta';


const ServicioScreenOneInput: FC<{id: number, label: string, onClose: ()=>void , update: ()=>void}> = ({label , onClose , id, update})=>{    

    const [labelPropert , setLabelProperty] = useState<string>(label)

    const action = ()=>{
        const bag = new FormData()        
        bag.set('token' , String(getToken()))
        bag.set('target', String(id))
        bag.set('nombre', String(labelPropert) )

        fetch(`http://localhost:8081/api/servicio/${id?'update':'create'}`, {
            method: 'POST',
            body: bag
        })
        .then(res => res.json())
        .then(arg => {
            setLabelProperty('')
            if(arg.status==200){
                update()
            }
            mostrarAlerta(arg)
        })
        .catch(err=>{
            console.log(err)
            mostrarAlerta({status: 500, msg: 'No disponible'})
        })

    }

    return <div className='ServicioScreenOneInput'>
        <WindowBorderTop title={`${label?'Editar Servicio':'Nuevo Servicio'}`} onBack={()=>onClose()} onClose={()=>onClose()}/>

        <form action="#" onSubmit={(arg)=>{arg.preventDefault(); action()}} className='formServicio'> 
            <div className='frow'>
                <div className='fcolumn'>
                    Nombre: 
                </div>
                <div className='fcolumn'>
                    <input type="text" placeholder={label} value={labelPropert} onChange={(arg)=>setLabelProperty(arg.target.value)}/>
                </div>
                <div className='fcolumn ctBtEditar'>
                    <div className='btEditar' onClick={()=>action()}>
                        {label?"Editar":'Crear'}
                    </div>
                </div>
            </div>
        </form>
    

    </div>
}


export default ServicioScreenOneInput