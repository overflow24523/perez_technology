import React, { useState, FC } from "react";
import { RiUserFill, RiLockPasswordFill, RiPhoneFill } from "react-icons/ri";
import { actionable } from "../../Types/types";
import { mostrarAlerta } from "../../helpers/MostrarAlerta";

const Register: FC<actionable & { mPointH: (arg: number) => void }> = ({ action, mPointH }) => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // console.log(formData);
        const { name: nombre, phone, password, confirmPassword } = formData

        const bag  = new FormData()
        bag.set('nombre' , nombre)
        bag.set('phone' , phone )
        bag.set('password', password )
        

        if (password != confirmPassword) {
            mostrarAlerta({msg: 'Las contraseñas no coinciden' , status: 400})
        } else {
            
            fetch('http://localhost:8081/register' , {
                method: 'POST', 
                body: bag
            })
            .then(res => res.json())
            .then(arg =>  {
                mostrarAlerta(arg)
                
                if( arg.status==200 ){
                    setFormData({name:'' , password:'', confirmPassword:'', phone:''})
                    action("login")
                }

            })
            .catch(err => {
                mostrarAlerta({msg: 'No disponible' , status: 500})
                console.log(err)
            })

        }

    };

    return (
        <div className="content">
            <div className="logo-container" style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                <img src="./src/assets/favicon/favicon.png" width={64} height={64} alt="Logo" onClick={() => { mPointH(0) }} />
                <h1 className="form-title">Registrarse</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <span>
                        <RiUserFill />
                    </span>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                        className="input"
                    />
                    <label className="label">Nombre</label>
                </div>
                <div className="field">
                    <span>
                        <RiPhoneFill />
                    </span>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                        className="input"
                    />
                    <label className="label">Teléfono</label>
                </div>
                <div className="field">
                    <span>
                        <RiLockPasswordFill />
                    </span>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                        className="input"
                    />
                    <label className="label">Contraseña</label>
                </div>
                <div className="field">
                    <span>
                        <RiLockPasswordFill />
                    </span>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                        className="input"
                    />
                    <label className="label">Confirmar contraseña</label>
                </div>
                <button type="submit" className="button">
                    Registrarse
                </button>
                <div className="sign-up">
                    ¿Ya tienes una cuenta? <a href="#" onClick={() => { action("login") }}>Inicia sesión</a>
                </div>
            </form>
        </div>
    );
};

export default Register;
