import './FooterImportado.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RiFacebookBoxFill, RiInstagramFill } from 'react-icons/ri';
import BtEnviar from '../BtEnviar/BtEnviar';

const FooterImportado = () => {
  return (
    <div className="col-12 ">
      <section style={{ height: '100px' }}></section>
      
      {/* Footer */}
      <footer className="footer-bs">
        <div className="row">
          <div className="col-md-3 footer-brand animated fadeInLeft">
            <h2 className='d-flex'>
              <img src="./src/assets/favicon/favicon.png" width={64} height={64}  alt="" />
              <span>Perez Technology</span>
            </h2>
            <p>
              Perez Technology es una empresa dedicada a la reparación  de dispositivos electrónicos.
              Nuestro lema: "Podemos arreglarlo". Reparamos en tiempo record 
              teléfonos, tablet, aipads, portatiles, ordenadores de escritorio y relojes inteligentes.
            </p>
            <p>© 2023, todos  los derechos reservados</p>
          </div>
          <div className="col-md-4 footer-nav animated fadeInUp">
            <h4 className='text-center '>—  Menu —</h4>
            <div className='d-flex' >
              <div className="col-md-6">
                <ul className="pages">
                  <li>
                    <a href="#inicio">Inicio</a>
                  </li>
                  <li>
                    <a href="#nosotros">Nosotros</a>
                  </li>
                  <li>
                    <a href="#talleres">Talleres</a>
                  </li>
                  <li>
                    <a href="#promociones">Promociones</a>
                  </li>
                  <li>
                    <a href="#contacto">Contacto</a>
                  </li>
                </ul>
              </div>

              <div className="col-md-6">
                <ul className="list">
                  <li>
                    <a href="#">Desarrolladores</a>
                  </li>
                  <li>
                    <a href="#">Términos  &amp;  Condiciones</a>
                  </li>
                  <li>
                    <a href="#">Política de Privacidad</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-2 footer-social animated fadeInDown">
            <h4>Síguenos en </h4>
            <ul>
              <li className='ctIconyLink'>
                <RiFacebookBoxFill />
                <a href="https://www.facebook.com/profile.php?id=100091656409799&mibextid=ZbWKwL"  target="_blank">Facebook</a>
              </li>
              <li>
                <RiInstagramFill />
                <a href="https://instagram.com/technologyperez?igshid=ZGUzMzM3NWJiOQ==" target="_blank">Instagram</a>
              </li>
              
            </ul>
          </div>
          <div className="col-md-3 footer-ns animated fadeInRight">
            <h4>Newsletter</h4>
            <p>Deja tu correo para tenerte al tanto de novedades y nuevos servicios</p>
            <p>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control rounded mx-2"
                  placeholder="micorreo#gmail.com"
                />
                <span className="input-group-btn">
                  <BtEnviar text= {'subscrito'}  />
                </span>
              </div>
              {/* /input-group */}
            </p>
          </div>
        </div>
      </footer>
      <section style={{ textAlign: 'center', margin: '10px auto' }}>
        <p>
          Sitio web creado por  <a href="" className='text-black'>overflow </a>
        </p>
      </section>
    </div>
  );
};

export default FooterImportado;