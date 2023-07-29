import { FC } from "react"
import { tpProductModal } from "../../../../Types/types"

import './ProductScreenTools.css'

const  ProductSreenTools: FC<tpProductModal> = ({handlerClick})=>{
    return <div className='productoScreenTools'>
                            <div className='title'>
                                Opciones
                            </div>
                            <div className='ctOptions'>
                                <div className='option1' onClick={()=>{handlerClick(1)}}>
                                    Editar
                                </div>
                                <div className='option2' onClick={()=>{handlerClick(2)}}>
                                    Ver mas
                                </div>
                            </div>        
                        </div>
}



export default ProductSreenTools