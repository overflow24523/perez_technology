import {FC} from 'react'

import './ContactPhoneButtons.css'
import BtnSphone from '../BtnSphone/BtnSphone';
const ContactPhoneButtons: FC<{handler: (arg: number)=>void }> = ({handler})=>{
    return <div className='ContactPhoneButtons'>
        <div className='ctButtons'>
            <BtnSphone src='./src/assets/icons/icons8-facebook-48.png'    handler={()=>{handler(2)}} />
            <BtnSphone src='./src/assets/icons/pngwing.com.png'           handler={()=>{handler(2)}} />
            <BtnSphone src='./src/assets/icons/icons8-google-maps-48.png' handler={()=>{handler(2)}} />
            <BtnSphone src='./src/assets/icons/icons8-instagram-48.png'   handler={()=>{handler(2)}} />
        </div>

        <div className='ctButtons'>
            <BtnSphone src='./src/assets/icons/call.png' handler={()=>{handler(2)}} />
            <BtnSphone src='./src/assets/icons/Google_Contacts_logo.png' handler={()=>{handler(2)}} />
            <BtnSphone src='./src/assets/icons/mensajes-google-removebg-preview.png' handler={()=>{handler(2)}} />
            <BtnSphone src='./src/assets/icons/icons8-whatsapp-40.png' handler={()=>{handler(2)}} />
        </div>

        <div className='ctButtons'>
            <BtnSphone src='./src/assets/icons/images-removebg-preview.png' handler={()=>{handler(2)}} />
            <BtnSphone src='./src/assets/icons/descarga-removebg-preview.png' handler={()=>{handler(2)}} />
            <BtnSphone src='./src/assets/icons/descarga__1_-removebg-preview.png' handler={()=>{handler(2)}} />
        </div>
    </div>
}



export default ContactPhoneButtons