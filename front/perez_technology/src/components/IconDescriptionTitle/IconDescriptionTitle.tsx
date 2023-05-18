import {FC} from 'react'
import './IconDescriptionTitle.css'
import { tIconDescriptionTitle } from '../../Types/types'

const IconDescriptionTitle: FC<tIconDescriptionTitle> = ({title , src , description, type})=>{

    return <div className={`IconDescriptionTitle ${type} `} >
        
        <div className='ctTexts'>   
            <div className='title'>
                {title}
            </div>
            <div className='description'>
                {description}
            </div>
        </div>
        <div className='ctImg'>
            <img src={`${src}`} alt="" />
        </div>
    </div>
}


export default IconDescriptionTitle;