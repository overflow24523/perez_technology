import './Login.css'
import LoginForm from '../LoginForm/LoginForm';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import Register from '../Register/Register';
import { FC } from 'react';
import { actionable } from '../../Types/types';

const Login: FC<{ mount: string } & actionable> = ({ mount, action }) => {
    let componentToRender = <LoginForm  action = {action} />

    switch (mount) {
        case 'login':
            componentToRender = <LoginForm action={action}   />
            break
        case 'register':
            componentToRender = <Register action={action} />
            break
        case 'forgot':
            componentToRender = <ForgotPassword action={action}/>
            break
        default: 
            componentToRender =  <LoginForm action={action} />
            break 
    }


    return (<div className="Login">
        <div className='ctBodyLogin'>
            <div className='ctLoginOrRegister'>
                {componentToRender}
            </div>
        </div>
    </div>)
}


export default Login