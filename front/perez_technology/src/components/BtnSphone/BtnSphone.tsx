import { tBtnSphone } from "../../Types/types"
import {FC} from  'react'
import './BtnSphone.css'


const BtnSphone: FC<tBtnSphone> = ({src , handler})=>{
    return <div className="BtnSphone" onClick={()=>{handler()}}>
        <img src={`${src}`} alt="" className="BtnSphoneImg" />
    </div>
}


export default BtnSphone 