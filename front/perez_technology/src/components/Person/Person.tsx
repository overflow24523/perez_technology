import { useState } from 'react'
import './Person.css'

const Person = ()=>{

    const [hide , setHide]  = useState<boolean>(true)

    
    const OpenCloseTool = ()=>{
        setHide(!hide)
    }

    return <div className="Person" onMouseLeave={()=>{setHide(true)}}>
                <div className='ctPicture'>
                    <img src="./src/assets/icons/userIcon.png" onClick={OpenCloseTool} alt="" />
                </div>
                <div className={`ctTools ${hide?'hide':''}`}    >
                    <div className='marco' >
                        <div className='toolItem'>
                            Opciones
                        </div>
                        <div className='toolItem'>
                            Salir
                        </div>
                    </div>
                </div>
            </div>
}

export default Person