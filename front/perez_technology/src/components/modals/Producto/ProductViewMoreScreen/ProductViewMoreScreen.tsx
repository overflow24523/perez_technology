import { FC } from 'react'
import './ProductViewMoreScreen.css'
import { tpProductModal, tpProducto } from '../../../../Types/types'
import WindowBorderTop from '../../../WindowBorderTop/WindowBorderTop';
const ProductViewMoreScreen: FC<tpProductModal & tpProducto>  = ({handlerClick, nombre, categoria, precio, cantidad, codigo, descripcion, proveedor, onClose })=>{
    return <div className='ProductViewMoreScreen'>
        <WindowBorderTop onBack={ ()=>{handlerClick(0)} } title='Ver más' onClose={onClose} />

        <div className='prow'>
            <div className='pcolumn'> Nombre: </div>
            <div className='pcolumn'> {nombre} </div>
        </div>
        <div className='prow'>
            <div className='pcolumn'> Precio: </div>
            <div className='pcolumn'> {precio} </div>
        </div>
        <div className='prow'>
            <div className='pcolumn'> Categoria: </div>
            <div className='pcolumn'> {categoria} </div>
        </div>
        <div className='prow'>
            <div className='pcolumn'> Cantidad: </div>
            <div className='pcolumn'> {cantidad} </div>
        </div>
        
        <div className='prow'>
            <div className='pcolumn'> Código: </div>
            <div className='pcolumn'> {codigo} </div>
        </div>
        <div className='prow'>
            <div className='pcolumn'> Proveedor: </div>
            <div className='pcolumn'> {proveedor} </div>
        </div>
        <div className='prow'>
            <div className='pcolumn'> Descripción: </div>
            <div className='pcolumn'> {descripcion} </div>
        </div>
    </div>
}

export default ProductViewMoreScreen