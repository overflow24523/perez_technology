import { RiDeleteBin5Fill, RiToolsFill  } from 'react-icons/ri';
import './Servicio.css'
import { FC, useState } from 'react';
import { tpServicio } from '../../Types/types';
import { P2PSystem } from '../../helpers/P2PSystem';
import { getToken} from '../../helpers/HandlerToken';
import { mostrarAlerta } from '../../helpers/MostrarAlerta';
import BoxDialog from '../BoxDialog/BoxDialog';
import ServicioScreenOneInput from '../modals/Servicio/ServicioScreenOneInput/ServicioScreenOneInput';

const Servicio: FC<tpServicio  & {getServicios: ()=>void}> = ({id, label, getServicios})=>{

    const [rolebox, setRoleBox] = useState<boolean>(false)

    const deleteServicio = (target: number)=>{
        const bag = new FormData()
        bag.set('token' , String(getToken()))
        bag.set('target' , String(target))

        fetch('http://localhost:8081/api/servicio/delete' , {
            method: 'POST',
            body: bag
        })
        .then(res => res.json())
        .then(arg => {
            mostrarAlerta(arg)
            if(arg.status == 200){
                getServicios()
            }
        })
        .catch(err => {
            console.log(err)
            mostrarAlerta({status: 500, msg: 'No disponible'})
        })

    }

    return <div className="Servicio">
    <div  className="ctName">
        {label}
    </div>
    <div className="ctOptions">
        <div className="ctDelete" onClick={()=>{
            P2PSystem(`Desea eliminar el servicio ${label}` , ()=> deleteServicio(id) )
        }} >
             <RiDeleteBin5Fill  />
        </div>
        <div className='lineDivider'> </div>
        <div className="ctTools"  onClick={()=> setRoleBox(true)} >
            <RiToolsFill />
        </div>
    </div>
    <BoxDialog isOpen={rolebox} onClose={()=>setRoleBox(false)} children={<ServicioScreenOneInput label={label} onClose={()=>setRoleBox(false)} update={()=>getServicios()} id={id} />} />
</div>
}

export default Servicio