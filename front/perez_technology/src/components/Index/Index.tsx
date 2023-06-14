import Navbar from "../Navbar/Navbar"
import {FC} from 'react'
import Footer from "../Footer/Footer"
import Contacto from "../Contacto/Contacto"
import Inicio from '../Inicio/Inicio';
import Nosotros from "../Nosotros/Nosotros";

const Index: FC<{upOrDown: boolean,  mPointH: (arg: number) => void}> = ({upOrDown, mPointH}) => {
    return (
        <>
            <Navbar upOrDown = {upOrDown} mPointH = {(arg)=>{mPointH(arg)}}  />
            <Inicio/>
            <Nosotros/>
            {/* Aqui va */}
            <Contacto/>
            {/* <div style={{height: "2000px"}}></div> */}
            <Footer/>
        </>
    )
}

export default Index