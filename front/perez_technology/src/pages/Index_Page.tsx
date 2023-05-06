import Index from "../components/Index/Index"
import {FC}  from 'react'

const Index_Page: FC<{upOrDown: boolean}> = ({upOrDown}) =>{
    return <Index upOrDown={upOrDown}/>
}
export default Index_Page