import { useState ,useEffect, useRef} from 'react'
import './Proceso.css'
import IconDescriptionTitle from '../IconDescriptionTitle/IconDescriptionTitle';

const Proceso = ()=>{

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

    return <div className={`Proceso ${isVisible?'visible':''}`}  ref={ref}>
        <div className='col1'>
            <div className='title'>
                Proceso
            </div>
            <div className='title2'>
                Servicio completo de reparación de celulares
            </div>
            <div className='divider'>
                <div></div>
            </div>
            <div className='description'>
                Estas son algunas de las reparaciones más comunes que realizamos en TallerCelulares
            </div>
            
        </div>
        <div className='col2'>
            <div className="ct1">
                <IconDescriptionTitle title={'Daño por agua'} description= {'Reparamos teléfonos que han caído en una piscina o hasta el mar.'} src={'./src/assets/icons/T1.png'} type={'t1'} />
                <IconDescriptionTitle title={'Pantalla quebrada'} description= {'De los daños más comunes que vemos en nuestro taller'} src={'./src/assets/icons/T3.png'} type={'t1'} />
                <IconDescriptionTitle title={'Daño del puerto de carga'} description= {'En algunas ocasiones se desprende el puerto de carga por lo que no permite que se cargue tu celular'} src={'./src/assets/icons/T6.png'} type={'t1'} />
            </div>
            <div className="ct2">
                <img src="./src/assets/background/background9.jpeg" alt="" />
            </div>
            <div className="ct3">
                <IconDescriptionTitle title={'Reparación de microsoldaduras'} description= {'Puede suceder que por el exceso de calor se puedan desprender algunos componentes internos.'} src={'./src/assets/icons/T4.png'} type={'t2'} />
                <IconDescriptionTitle title={'Daño en el panel táctil'} description= {'Podemos reemplazar el panel táctil manteniendo la misma pantalla'} src={'./src/assets/icons/T5.png'} type={'t2'} />
                <IconDescriptionTitle title={'Daño de batería'} description= {'Reemplazamos cualquier batería y te lo entregamos el mismo día'} src={'./src/assets/icons/T2.png'} type={'t2'} />
            </div>
        </div>
    </div>
}


export default Proceso ;
