import Navbar from "../Navbar/Navbar"
import {FC} from 'react'
import Footer from "../Footer/Footer"
import Contacto from "../Contacto/Contacto"

const Index: FC<{upOrDown: boolean}> = ({upOrDown}) => {
    return (
        <>
            <Navbar upOrDown = {upOrDown} />
            <Contacto/>
            <div style={{height: "2000px"}}></div>
            <Footer/>
        </>
    )
}

export default Index