import { FC } from 'react';
import './WindowBorderTop.css'
import { RiArrowGoBackFill , RiCloseLine } from 'react-icons/ri';
import { tpWindowBorderTop } from '../../Types/types';

const WindowBorderTop: FC<tpWindowBorderTop> = ({onBack, onClose,title})=>{
    return <div className='WindowBorderTop'>
        <div className='btBack' onClick={onBack}>
            <RiArrowGoBackFill/>
        </div>
        <div className='ctTitle'>
            {title}
        </div>
        <div className='btClose' onClick={onClose}>
            <RiCloseLine/>
        </div>
    </div>
}




export default WindowBorderTop