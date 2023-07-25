import './Brand.css'
import {FC} from 'react'

const Brand: FC<{ mPointH: (arg: number) => void }> = ({ mPointH})=>(
    <div className='Brand navbar-brand' onClick={()=>{
        mPointH(0)
    }}>
        
    </div>
)

export default  Brand; 
