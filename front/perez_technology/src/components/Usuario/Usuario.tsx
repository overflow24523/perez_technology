import { tpUsuario } from '../../Types/types';
import './Usuario.css'
import { RiDeleteBin5Fill as DeleteIcon ,RiToolsFill as ToolsIcon} from 'react-icons/ri';
import {FC} from 'react'

const Usuario: FC<tpUsuario> = ({name, phone, role , img , uid , deleteUser, showToolbox }) => {

    
   
    return <div className="Usuario">
        <div className='ctPicture'>
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

        <div className='ctRole' >{role}</div>
        <div className='ctDeleteAndTools'>
            <div className='ctDelete' onClick={()=>{
                deleteUser(uid)
            }} >
                <DeleteIcon  />
            </div>
            <div className='ctTools'>
                < ToolsIcon onClick={()=>{
                    showToolbox(uid)
                }}/>
            </div>
        </div>

        

    </div>
}

export default Usuario