import Almacen from "../components/Almacen/Almacen"
import {FC} from 'react'

const Almacen_page: FC<{ mPointH: (arg: number) => void, upOrDown: boolean }> = ({mPointH , upOrDown})=>{
    return <Almacen mPointH={mPointH} upOrDown = {upOrDown} />
}

export default Almacen_page