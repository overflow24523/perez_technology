import './Admin.css'
import { FC, useState } from 'react';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import AdminLayout from '../AdminLayout/AdminLayout';

const Admin: FC<{ mPointH: (arg: number) => void }>  = ({mPointH})=>{
    const [layout, setLayout] = useState(0)
    const handlerLayout = (arg: number)=>{
        if(arg==1){
            mPointH(0)
            return 
        }
        
        setLayout(arg)
    }

    return <div className='Admin' onClick={()=>{mPointH}}>
        
        <AdminNavbar  jostick={handlerLayout} />         
        <AdminLayout layout={layout} />
        
    </div>
}


export default Admin