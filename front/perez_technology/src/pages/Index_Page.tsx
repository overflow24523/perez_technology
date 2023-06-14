import Index from "../components/Index/Index"
import {FC}  from 'react'

const Index_Page: FC<{upOrDown: boolean , mPointH: (arg: number) => void}> = ({upOrDown , mPointH}) =>{
    return <Index upOrDown={upOrDown} mPointH ={ (arg: number)=>{mPointH(arg)} } />
}
export default Index_Page