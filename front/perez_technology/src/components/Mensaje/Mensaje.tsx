import { tpMensaje } from '../../Types/types';
import './Mensaje.css'
import { RiDeleteBin5Fill as DeleteIcon, RiToolsFill as ToolsIcon } from 'react-icons/ri';

import {FC} from 'react';

const Mensaje: FC<tpMensaje> = ({body, deleteMensaje, img, name, phone, uid}) => {
    return <div className="Mensaje">
        <div className='ctGmail'>
            <img src={`${img}`} alt="" />
        </div>
        <div className='ctNameAndPhone'>
            <div className='ctName'>
                {name}
            </div>
            <div className='ctPhone'>
                {phone}
            </div>
        </div>
        <div className='ctMsgBody'>
            {body}
        </div>
        <div className='ctDeleteAndView'>
            <div className='ctDelete'  onClick={ ()=>{ deleteMensaje(uid) } } >
                <DeleteIcon  />
            </div>
            <div className='lineDivider'></div>
            <div className='ctView'> 
                <ToolsIcon />
            </div>
        </div>
    </div>
}

export default Mensaje