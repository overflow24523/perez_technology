import './ModalAtencionView.css'
import WindowBorderTop from '../../../WindowBorderTop/WindowBorderTop';
import { FC, useEffect, useState } from 'react';
import { tpModalAtencionView } from '../../../../Types/types';
import { getToken } from '../../../../helpers/HandlerToken';
const ModalAtencionView: FC<tpModalAtencionView> =({onClose , date,servicio, almacenero , importe, descripcion , product_list})=>{
    

    const [productList , setProductList] = useState([])



    const getProductList = () => {
        const lista  = Object.values(product_list).map(item => Number(item))
        const bag = new FormData()
        bag.set('token', String(getToken()))
        
        fetch('http://localhost:8081/api/producto/read', {
            method: 'POST',
            body: bag
        })
        .then(res => res.json())
        .then(arg => {
            if(arg.status == 200){
                const tempBag =  arg.bag.map((element: {id:number}) => {
                    const {id} = element
                    if(lista.includes(id)){
                        return element
                    }                     
                });
                // console.log(tempBag)
                setProductList(tempBag)
                
            }
            // mostrarAlerta(arg)
        })
        .catch(err =>{
            console.log(err)
            // mostrarAlerta({status: 500, msg: 'Algo salio mal'})
        })
    }


    useEffect(()=>{
        getProductList()
    }, [])

    return <div className="ModalAtencionView">
        <WindowBorderTop onBack={onClose}  title={'Ver atención'} onClose={onClose}/>
        <div className='ctScrooller'>

            <div className='viewRow'>
                <div className='cl1'>
                    Fecha:
                </div>
                <div className='cl2'>
                    {date}
                </div>
            </div>  

            <div className='viewRow'>
                <div className='cl1'>
                    Servicio:
                </div>
                <div className='cl2'>
                    {servicio}
                </div>
            </div>

            <div className='viewRow'>
                <div className='cl1'>
                    Importe:
                </div>
                <div className='cl2'>
                    $  {importe}
                </div>
            </div>

            
            

            <div className='viewRow'>
                <div className='cl1'>
                    Productos:
                </div>
                <div className='ctNumberOfProduct'>
                    {
                        productList.map(item =>{
                            if(item){
                                const  {id , nombre , precio} = item
                                
                                return (<div key={id} className='productViewer'>
                                            <div>
                                                {nombre}
                                            </div>
                                            <div>
                                                $ {precio}
                                            </div>
                                        </div>)
                            
                            }
                        })                        
                    }
                    
                </div>
            </div>

            
            <div className='viewRow'>
                <div className='cl1'>
                    Almacenero:
                </div>
                <div className='cl2'>
                    {almacenero}
                </div>
            </div>


            <div className='viewRow'>
                <div className='cl1'>
                    Descripción:
                </div>
                <div className='cl2'>
                    {descripcion}
                </div>
            </div>
            
        </div>
    </div>
    
}


export default ModalAtencionView