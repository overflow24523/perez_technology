import ContactForm from '../ContactForm/ContactForm'
import ContactPhone from '../ContactPhone/ContactPhone'
import './Contacto.css'
// import ContactPhone from '../ContactPhone/ContactPhone';
const Contacto = ()=>{
    return <div className='Contacto' id='contacto'>
        <ContactPhone />
        <ContactForm  />
    </div>
}

export default Contacto