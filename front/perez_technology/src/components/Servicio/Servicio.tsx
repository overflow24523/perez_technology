import { RiDeleteBin5Fill, RiToolsFill  } from 'react-icons/ri';
import './Servicio.css'
const Servicio = ()=>{
    return <div className="Servicio">
    <div  className="ctName">
        {/* {label} */}
    </div>
    <div className="ctOptions">
        <div className="ctDelete" >
             <RiDeleteBin5Fill  />
        </div>
        <div className='lineDivider'> </div>
        <div className="ctTools"  >
            <RiToolsFill />
        </div>
    </div>
</div>
}

export default Servicio