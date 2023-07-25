import './Almacen.css'
import Navbar from '../docker/almacen/Navbar/Navbar';
import AlmacenLayout from '../AlmacenLayout/AlmacenLayout';
import { FC, useState } from 'react';
const Almacen: FC<{ mPointH: (arg: number) => void, upOrDown: boolean}> = ({mPointH , upOrDown})=>{

    const [layout , setLayout] = useState<number>(2)
    const handlerLayout = (arg: number)=>{
        if(arg==1){
            mPointH(0)
            return 
        }
        
        setLayout(arg)
    }

    return <div className="Almacen">
        <Navbar upOrDown = {upOrDown} mPointH={mPointH} jostick={handlerLayout} />
        <AlmacenLayout layout={layout} />
    </div>
}

export default Almacen