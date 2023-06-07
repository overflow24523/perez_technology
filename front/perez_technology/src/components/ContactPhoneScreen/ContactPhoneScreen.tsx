import { FC } from "react"

import './ContactPhoneScreen.css'
import ContactPhoneButtons from "../ContactPhoneButtons/ContactPhoneButtons"
const ContactPhoneScreen: FC<{frame:number, handler:(arg: number)=>void}>  = ({frame , handler})=>{

    let currentFrame = <div></div>

    switch(frame){
        case 1:
            currentFrame = <ContactPhoneButtons handler = {(arg: number)=>{ handler(arg)}}  />
        break
        case 2: 
            currentFrame = <div>Adios Mundo</div>
        break 
        default:
            currentFrame = <div>Este mundo es muy cruel</div>
            break ; 
    }

    return <div className='screen'>
        {currentFrame}
    </div>            
}


export default ContactPhoneScreen