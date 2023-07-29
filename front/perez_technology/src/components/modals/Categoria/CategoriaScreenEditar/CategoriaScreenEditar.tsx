import WindowBorderTop from '../../../WindowBorderTop/WindowBorderTop';
import {FC, useState} from 'react'
import './CategoriaScreenEditar.css'
import { getToken } from '../../../../helpers/HandlerToken';
import { mostrarAlerta } from '../../../../helpers/MostrarAlerta';
const CategoriaScreenEditar: FC<{onClose: ()=>void, uid:number, getCategorias: ()=>void, label:string, endpoint: string}> = ({onClose, uid, getCategorias, label, endpoint}) => {

    const [ipEditar , setIpEditar ] = useState<string>(label)

    const sendEditar = ()=>{
        if(!ipEditar){
            mostrarAlerta({status: 200, msg: 'El nombre de la categoria es obligatorio'})
            return 
        }
        
        const bag = new FormData()
        bag.set('token', getToken())
        bag.set('target', String(uid))
        bag.set('label', ipEditar)

        fetch(`http://localhost:8081/api/categoria/${endpoint}`, {
            method: 'POST',
            body: bag
        })
        .then(res => res.json())
        .then(arg => {
            if(arg.status ==200){
                getCategorias()
            }
            mostrarAlerta(arg)
        })
        .catch(err => {
            console.log(err)
            mostrarAlerta({status: 500, msg: 'No disponible'})
        })
        
        
    }

    return <div className="CategoriaScreenEditar">
        <WindowBorderTop onBack={onClose} title={endpoint=='update'?'Editar Categoría':'Nueva Categoría'} onClose={onClose} />
        <form action="#" onSubmit={(arg)=>{arg.preventDefault(); sendEditar()}} className='formEditCategoria'> 
            <div className='frow'>
                <div className='fcolumn'>
                    Nombre: 
                </div>
                <div className='fcolumn'>
                    <input type="text" placeholder='Categoria' value={ipEditar} onChange={(arg)=>{setIpEditar(arg.target.value)}}  />
                </div>
                <div className='fcolumn ctBtEditar'>
                    <div className='btEditar' onClick={sendEditar}>
                        {endpoint=='update'?"Editar":'Crear'}
                    </div>
                </div>
            </div>
        </form>
    </div>
}

export default CategoriaScreenEditar