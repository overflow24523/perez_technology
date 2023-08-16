import { FC, useState } from 'react';
import './Categoria.css'
import { RiDeleteBin5Fill, RiToolsFill  } from 'react-icons/ri';
import { tpCategoria } from '../../Types/types';
import { getToken } from '../../helpers/HandlerToken';
import { mostrarAlerta } from '../../helpers/MostrarAlerta';
import BoxDialog from '../BoxDialog/BoxDialog';
import CategoriaScreenEditar from '../modals/Categoria/CategoriaScreenEditar/CategoriaScreenEditar';
import { P2PSystem } from '../../helpers/P2PSystem';
const Categoria: FC<tpCategoria  & {getCategorias: ()=>void}> = ({id, label, getCategorias}) => {


    const [roleBox, setRoleBox] = useState<boolean>(false)


    const DeleteCategoria = ()=>{
        const bag = new FormData()
        bag.set('token' , String(getToken()))
        bag.set('target', String(id))

        fetch('http://localhost:8081/api/categoria/delete', {
            method: 'POST',
            body: bag
        })
        .then(res => res.json())
        .then(arg => {
            if(arg.status==200){
                getCategorias()
            }
            mostrarAlerta(arg)
        })
        .catch(err =>{
            console.log(err)
            mostrarAlerta({status: 500, msg: 'No disponible'})
        })

    }


    return <div className="Categoria">
        <div  className="ctName">
            {label}
        </div>
        <div className="ctOptions">
            <div className="ctDelete" onClick={()=>{
                P2PSystem(`Desea eliminar la categoría ${label}`, DeleteCategoria)
            }}>
                 <RiDeleteBin5Fill  />
            </div>
            <div className='lineDivider'> </div>
            <div className="ctTools" onClick={()=>{setRoleBox(true)}} >
                <RiToolsFill />
            </div>
        </div>
        <BoxDialog isOpen={roleBox} onClose={()=>{setRoleBox(false)}}  children={<CategoriaScreenEditar label={label} onClose={()=>{setRoleBox(false)}} getCategorias={getCategorias} uid={id} endpoint='update' />} />
    </div>



}

export default Categoria