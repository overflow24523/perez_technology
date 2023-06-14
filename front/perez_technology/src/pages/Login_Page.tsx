import Login from "../components/Login/Login"
import { FC, useState} from 'react';

const Login_Page: FC<{mPointH: (arg: number)=> void } > = ({mPointH}) => {
    const [mountPoint, setMountPoint] = useState("login")

    const changerMountPoint = (arg: string) =>{
        setMountPoint(arg)        
    }

    return ( <Login mount={mountPoint} action={changerMountPoint} mPointH = {(arg: number)=>{mPointH(arg)} } /> )
}

export default Login_Page