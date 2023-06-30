import React, { useState } from 'react';
import './ContactForm.css'
import { mostrarAlerta } from '../../helpers/MostrarAlerta';
const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        mensaje: ''
    })

    const handlerChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const bag  = new FormData()
        bag.set('nombre', formData.name)
        bag.set('telefono' , formData.phone)
        bag.set('mensaje' , formData.mensaje)
        bag.set('email', formData.email)

        fetch('http://localhost:8081/contactar', {
            method: 'POST', 
            body: bag
        })
        .then(res =>  res.json())
        .then(arg =>{ 
            mostrarAlerta(arg)
            if(arg.status==200){
                setFormData({
                    email : "", 
                    mensaje : "", 
                    phone : "" , 
                    name: ""
                })
            }
        })
        .catch(err => {
            mostrarAlerta({msg: 'No disponible' , status: 500})
            console.log(err)
        })
    }


    return (
        <div className="ContactForm container">
            <form className="form" onSubmit={handlerSubmit}>
                <div className="descr">Contact us</div>
                <div className="input">
                    <input required={true} name='name' value={formData.name} onChange={handlerChange} autoComplete="off" type="text" />
                    <label htmlFor="name">Nombre</label>
                </div>

                <div className="input">
                    <input required={true} autoComplete="off" name="email" value={formData.email} onChange={handlerChange} type="text" />
                    <label htmlFor="email">Correo</label>
                </div>

                <div className="input">
                    <input required={true} autoComplete="off" name="phone" value={formData.phone} onChange={handlerChange} type="text" />
                    <label htmlFor="phone">Telefono</label>
                </div>

                <div className="input">
                    <textarea required={true} cols={30} name='mensaje' value={formData.mensaje} onChange={handlerChange} rows={1} id="message"></textarea>
                    <label htmlFor="message">Mensaje</label>
                </div>

                <button>Enviar Mensaje</button>
            </form>
        </div>
    );
};

export default ContactForm;