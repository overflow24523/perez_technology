import { useState ,useEffect, useRef} from 'react'
import { RiCheckFill } from 'react-icons/ri';
import './Beneficios.css';

const Beneficios = () => {
    const [isVisible, setVisible] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(item => {
                if (item.isIntersecting) {
                    setVisible(true)
                } else {
                    setVisible(false)
                }
            })
        })

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()

    }, [])

    return (
        <div className={`Beneficios ${isVisible?'visible':''}`} ref={ref}   >
            <div className='ct1'>
                <div className='ctImg'>
                    <img src="./src/assets/background/background11.jpg" alt="" />
                </div>
            </div>
            <div className='ct2'>
                <div className='title1'>
                    Beneficios
                </div>
                <div className='title'>
                    ¿Por qué elegir Perez Technology para su reparación?
                </div>
                <div className='divider'>
                    <div></div>
                </div>

                <div className='descripcion'>
                    Además de una trayectoria de más de 15 años en reparaciones contamos con:
                </div>

                <ul className={`ctList`}>
                    <li> <RiCheckFill /> Personal capacitado </li>
                    <li> <RiCheckFill /> Respuestos Originales</li>
                    <li> <RiCheckFill /> Servicios de recogida y entrega</li>
                    <li> <RiCheckFill /> Servicio rápido</li>
                    <li> <RiCheckFill /> Precio Justo</li>
                </ul>

                <div className='ctBtn'>
                    <a className='ButtonContactar' href='#contacto'>
                        Contáctanos
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Beneficios;