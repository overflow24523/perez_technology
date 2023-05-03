import Login from "../components/Login/Login"
import { useState} from 'react';

const Login_Page = () => {
    const [mountPoint, setMountPoint] = useState("login")

    const changerMountPoint = (arg: string) =>{
        setMountPoint(arg)        
    }

    return (<Login mount={mountPoint} action={changerMountPoint} />)
}

export default Login_Page