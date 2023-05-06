import { RiArrowLeftCircleFill } from "react-icons/ri";
import {FC} from 'react'
import { actionable } from "../../Types/types";

const ForgotPassword: FC<actionable> = ({action}) => {
    return (
        <div className="content">
            <div className="login-container">
                <div className="logo-container" style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                    <img src="./src/assets/favicon/favicon.png" width={64} height={64} alt="Logo" />
                    <h1 className="form-title">Recuperar contraseña</h1>
                </div>
                <div className="form-container">
                    <form>
                        <div className="field">
                            <input required type="text" className="input" />
                            <label className="label">Teléfono</label>
                        </div>
                        <button className="button">Recuperar contraseña</button>
                    </form>
                    <div className="back-to-login">
                        <a href="#" onClick={()=>{action("login")}} className="link" style={{display: "flex" , alignItems: "center", fontSize: "20px" }}>
                            <RiArrowLeftCircleFill /> 
                            <span style={{ margin: "5px"}}>Regresar</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
