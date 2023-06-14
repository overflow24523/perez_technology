import './Login.css'
import LoginForm from '../LoginForm/LoginForm';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import Register from '../Register/Register';
import { FC } from 'react';
import { actionable } from '../../Types/types';

const Login: FC<{ mount: string  , mPointH: (arg: number)=>void} & actionable> = ({ mount, action , mPointH }) => {
    let componentToRender = <LoginForm  action = {action}  mPointH={(arg: number)=>{mPointH(arg)}}  />

    switch (mount) {
        case 'login':
            componentToRender = <LoginForm action={action}  mPointH={(arg: number)=>{mPointH(arg)}}    />
            break
        case 'register':
            componentToRender = <Register action={action}  mPointH={(arg: number)=>{mPointH(arg)}}  />
            break
        case 'forgot':
            componentToRender = <ForgotPassword action={action}  mPointH={(arg: number)=>{mPointH(arg)}} />
            break
        default: 
            componentToRender =  <LoginForm action={action}  mPointH={(arg: number)=>{mPointH(arg)}}  />
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