import Navbar from "../Navbar/Navbar"
import {FC} from 'react'
import Footer from "../Footer/Footer"
import Contacto from "../Contacto/Contacto"
import Inicio from '../Inicio/Inicio';

const Index: FC<{upOrDown: boolean}> = ({upOrDown}) => {
    return (
        <>
            <Navbar upOrDown = {upOrDown} />
            <Inicio/>
            <Contacto/>
            <div style={{height: "2000px"}}></div>
            <Footer/>
        </>
    )
}

export default Index