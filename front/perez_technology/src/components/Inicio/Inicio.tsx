import './Inicio.css'
import IconoDescriptivo from '../IconoDescriptivo/IconoDescriptivo';
import { useEffect, useRef, useState } from 'react';


const Inicio = () => {

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

        return () => observer.disconnect()
    } , [])
    
    return <div id='inicio' className={`Inicio ${isVisible?'visible':''}` } ref={ref} >
        <div className='ct1' >

        </div>
        <div className='ct2' >
            <IconoDescriptivo src={'icono9.png'} title={"Reparación de celulares"} descripcion={'Contamos con equipo para arreglar tu teléfono incluso el mismo día.'} />
            <IconoDescriptivo src={'icono10.png'} title={"Reparación de Tablets"} descripcion={'Se dañó tu iPad o tablet Android? Contactanos para agendar una cita.'} />
            <IconoDescriptivo src={'icono8.png'} title={"Reparación de  Mac"} descripcion={'En Perez Tecnologies reparamos  cualquier modelo de iMac o MacBook.'} />
            <IconoDescriptivo src={'icono7.png'} title={"Reparación de Apple Watch"} descripcion={'En Perez tecnologies hacemos  reemplazos de pantalla y carcasas.'} />
        </div>
    </div>
}

export default Inicio


