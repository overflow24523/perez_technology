import { RiCheckFill } from 'react-icons/ri'
import './Beneficios.css'

const Beneficios = () => {
    return <div className='Beneficios'>
        <div className='ct1'>
            <div className='ctImg'>
                <img src="./src/assets/background/background5.jpg" alt="" />
            </div>
        </div>
        <div className='ct2'>
            <div className='title1'>
                Beneficios
            </div>
            <div className='title'>
                ¿Por qué elegir Taller Celulares para su reparación?
            </div>
            <div className='divider'>
                <div></div>
            </div>

            <div className='descripcion'>
                Además de una trayectoria de más de 15 años en reparaciones contamos con:
            </div>

            <ul className='ctList'>

                <li> <RiCheckFill /> Personal capacitado </li>
                <li> <RiCheckFill /> Respuestos Originales</li>
                <li> <RiCheckFill /> Servicios de recogida y entrega</li>
                <li> <RiCheckFill /> Servicio rápido</li>
                <li> <RiCheckFill /> Precio Justo</li>
            </ul>

            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.640611766155!2d14.492821515282204!3d35.90681672517428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e45482d79f35d%3A0x73011a4e90670fa5!2sPulptech!5e0!3m2!1sen!2smt!4v1674421233564!5m2!1sen!2smt" width="600" height="450"   loading="lazy" ></iframe> */}

            <div className='ctBtn'>
                <div className='ButtonContactar'>
                    Contáctanos
                </div>
            </div>

        </div>
    </div>
}


export default Beneficios


