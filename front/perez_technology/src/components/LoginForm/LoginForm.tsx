import React, {  useState } from "react";
import { RiUserFill, RiLockPasswordFill } from "react-icons/ri";
import { actionable } from "../../Types/types";
import { mostrarAlerta } from "../../helpers/MostrarAlerta";

const LoginForm: React.FC<actionable & { mPointH: (arg: number) => void }> = ({ action, mPointH }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setPassword(event.target.value);
    };

    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const bag = new FormData();
      bag.set('nombre', email);
      bag.set('password', password);

      setEmail(''); // Limpia el valor del email
      setPassword(''); // Limpia el valor del password

      fetch('http://localhost:8081/login', {
        method: 'POST',
        body: bag,
      })
        .then((res) => res.json())
        .then((arg) => {
          mostrarAlerta(arg);
        })
        .catch((err) => {
          mostrarAlerta({ msg: 'No disponible', status: 500 });
          console.log(err);
        });
    };

    return (
        <div className="content">
            <div className="logo-container" style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                <img src="./src/assets/favicon/favicon.png" width={64} height={64} alt="Logo" onClick={() => { mPointH(0) }} />
                <h1 className="form-title">Entrar</h1>
            </div>
            <form onSubmit={handleSubmit} >
                <div className="field">
                    <input
                        required
                        type="text"
                        className="input"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <span className="span">
                        <RiUserFill size={20} />
                    </span>
                    <label className="label">Usuario</label>
                </div>
                <div className="field">
                    <input
                        required
                        type="password"
                        className="input"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <span className="span">
                        <RiLockPasswordFill size={20} />
                    </span>
                    <label className="label">Contraseña</label>
                </div>
                <div className="forgot-pass">
                    <a href="#" onClick={() => { action("forgot") }}>¿Olvidaste tu contraseña?</a>
                </div>
                <button type="submit" className="button">
                    Entrar
                </button>
                <div className="sign-up">
                    ¿Aun no eres miembro? <a href="#" onClick={() => { action("register") }}>Regístrate</a>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
