import Productos from '../Productos/Productos'
import './AlmacenLayout.css'
import { FC } from 'react'

const AlmacenLayout: FC<{layout: number}> = ({layout})=>{

    let current_layout = <div>
    </div>

    switch (layout) {
        case 2:
            current_layout = <Productos />
            break;
        default:
            current_layout = <div>
                Algun layout desconocido
            </div>
            break 
    }

    return <div className="AlmacenLayout">
        {current_layout}
    </div>
}
export default AlmacenLayout