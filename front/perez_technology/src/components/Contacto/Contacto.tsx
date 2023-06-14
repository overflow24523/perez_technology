import { useEffect, useRef, useState } from 'react'
import ContactForm from '../ContactForm/ContactForm'
import ContactPhone from '../ContactPhone/ContactPhone'
import './Contacto.css'
// import ContactPhone from '../ContactPhone/ContactPhone';
const Contacto = ()=>{
    const [isVisible, setVisible] = useState(false)
    const ref = useRef(null)

    useEffect( ()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach(item=>{
                if(item.isIntersecting){
                    setVisible(true)
                }else{
                    setVisible(false)
                }
            })
        })

        if(ref.current){
            observer.observe(ref.current)
        }
            
        return ()=>observer.disconnect()

    }, [])



    return <div className={`Contacto ${isVisible?'visible':''}`} id='contacto' ref={ref}>
        <ContactPhone />
        <ContactForm  />
    </div>
}

export default Contacto