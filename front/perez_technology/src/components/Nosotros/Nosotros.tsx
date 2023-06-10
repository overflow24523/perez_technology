import Beneficios from '../Beneficio/Beneficio'
import Proceso from '../Proceso/Proceso'
import Ubicacion from '../Ubicacion/Ubicacion'

import './Nosotros.css'

const Nosotros = () => {
    return <div id='nosotros' className={`Nosotros`}  >
        <div className='ct'>
            <Beneficios />
            <Proceso />
            <Ubicacion />
        </div>
    </div>
}



export default Nosotros