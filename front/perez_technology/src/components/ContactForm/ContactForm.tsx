import './ContactForm.css'
import BtEnviar from '../BtEnviar/BtEnviar';
const ContactForm = () => {

    return <div className="ContactForm">
        <div className="container">
            <div className="card">
                <a className="login">Contáctanos</a>
                <div className="inputBox">
                    <input type="text" required={true}></input>
                    <span className="user">Nombre</span>
                </div>

                <div className="inputBox">
                    <input type="text" required={true}></input>
                    <span>Teléfono</span>
                </div>

                <div className="inputBox">
                    <textarea rows={5}  required={true}></textarea>
                    <span>Mensaje</span>
                </div>

                <BtEnviar text='Enviar' />

            </div>
        </div>
    </div>
}


export default ContactForm