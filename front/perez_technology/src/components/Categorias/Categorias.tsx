import './Categorias.css'
import Categoria from '../Categoria/Categoria';
import { useEffect, useState } from 'react';
import { getToken } from '../../helpers/HandlerToken';
import { mostrarAlerta } from '../../helpers/MostrarAlerta';
import { RiAddLine } from 'react-icons/ri';
import BoxDialog from '../BoxDialog/BoxDialog';
import CategoriaScreenEditar from '../modals/Categoria/CategoriaScreenEditar/CategoriaScreenEditar';
const Categorias = ()=>{
    const [categoryList , setCategoryList] = useState<[]>([])
    const [categoryNumber , setCategoryNumber] = useState<number>(0)
    const [rolebox , setRolebox] = useState<boolean>(false)

    const getCategorias = () => {
        const bag = new FormData()        
        bag.set('token', getToken())

        fetch('http://localhost:8081/api/categoria/read', {
            method: 'POST',
            body: bag
        })
        .then(res => res.json())
        .then(arg => {
            if(arg.status==200){
                setCategoryList(arg.bag)
                setCategoryNumber(arg.bag.length)
            }
            mostrarAlerta(arg)
        })
        .catch(err => {
            console.log(err)
            mostrarAlerta({status: 500, msg: 'No disponible'})
        })

    }   

    useEffect(()=>{
        getCategorias()
    }, [])
    return <div className="Categorias">
        <div className="ctOptions">
            <div className='ctCantidad'>
                {categoryNumber==1?`${categoryNumber} Categoría`:`${categoryNumber} Categorías` }
            </div>
            <div className='ctAgregar' onClick={()=>{setRolebox(true)}}>
                <div>
                    Agregar Categoría
                </div>
                <RiAddLine />
            </div>
        </div>
        <div className="ctCategoria">
            {
                categoryList.map(item=>{
                    const {label , id} = item
                    return <Categoria key={id}  id={id} label={label} getCategorias={getCategorias} />
                })
            }
        </div>
            <BoxDialog isOpen={rolebox} onClose={()=>{setRolebox(false)}}  children={<CategoriaScreenEditar label={''} onClose={()=>{setRolebox(false)}} getCategorias={getCategorias} uid={0} endpoint='create' />}/> 
    </div>
}


export default Categorias