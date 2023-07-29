import './Admin.css'
import { FC, useState } from 'react';

import AdminLayout from '../AdminLayout/AdminLayout';
import Navbar from '../docker/admin/Navbar/Navbar';

const Admin: FC<{ mPointH: (arg: number) => void, upOrDown: boolean }>  = ({mPointH ,upOrDown })=>{
    const [layout, setLayout] = useState(5  )
    const handlerLayout = (arg: number)=>{
        if(arg==1){
            mPointH(0)
            return 
        }
        
        setLayout(arg)
    }

    return <div className='Admin' onClick={()=>{mPointH}}>

        <Navbar upOrDown={upOrDown} mPointH={mPointH} jostick={handlerLayout} />
        <AdminLayout layout={layout} />
        
    </div>
}


export default Admin