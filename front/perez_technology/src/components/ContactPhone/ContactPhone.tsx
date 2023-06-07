import { useState } from 'react'
import ContactPhoneScreen from '../ContactPhoneScreen/ContactPhoneScreen'
import './ContactPhone.css'
const ContactPhone = () => {
    const [frame , setFrame] = useState(1)
    return <div className='ContactPhone'>        
        <ContactPhoneScreen frame = {frame}  handler = {(arg: number)=>{
            setFrame(arg)
        }} />
    </div>
}


export default ContactPhone