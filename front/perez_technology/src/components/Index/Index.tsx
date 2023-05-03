import Navbar from "../Navbar/Navbar"
import {FC} from 'react'
import Footer from "../Footer/Footer"

const Index: FC<{upOrDown: boolean}> = ({upOrDown}) => {
    return (
        <>
            <Navbar upOrDown = {upOrDown} />
            <div style={{height: "2000px"}}></div>
            <Footer/>
        </>
    )
}

export default Index