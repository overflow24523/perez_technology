import { FC, useContext, useState } from 'react'
import './Person.css'
import { deleteToken } from '../../helpers/HandlerToken'
import { GlobalContext } from '../GlobalContext/GlobalContext'

const Person: FC<{ mPointH: (arg: number) => void}> = ({mPointH})=>{

    const [hide , setHide]  = useState<boolean>(true)
    const {setLogin}  = useContext(GlobalContext)

    
    const OpenCloseTool = ()=>{
        setHide(!hide)
    }

    const cerrarSession = () => {
            deleteToken()
            mPointH(1)
            setLogin(false)
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
                        <div className='toolItem' onClick={cerrarSession}>
                            Salir
                        </div>
                    </div>
                </div>
            </div>
}

export default Person