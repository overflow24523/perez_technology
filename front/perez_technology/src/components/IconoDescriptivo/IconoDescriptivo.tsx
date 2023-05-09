import { FC } from "react"
import { tIconoDescriptivo } from "../../Types/types"

import './IconoDescriptivo.css'

const IconoDescriptivo: FC<tIconoDescriptivo> = ({ title, src, descripcion }) => {
    return <div className="IconoDescriptivo">
        <div className="ctImg">
            <img src={`./src/assets/icons/${src}`} alt="" />
        </div>
        <div className="title">
            {title}
        </div>
        <div className="divider">

        </div>
        <div className="description">
            {descripcion}
        </div>
    </div>
}

export default IconoDescriptivo