import Beneficios from '../Beneficio/Beneficio'
import Proceso from '../Proceso/Proceso'

import './Nosotros.css'

const Nosotros = () => {
    return <div id='nosotros' className={`Nosotros`}  >
        <div className='ct'>
            <Beneficios />
            <Proceso />
        </div>
    </div>
}



export default Nosotros