import { FC } from "react"
import Admin from "../components/Admin/Admin"

const Admin_page: FC<{ mPointH: (arg: number) => void, upOrDown: boolean }> = ({mPointH  , upOrDown})=>{
    return <Admin mPointH={mPointH} upOrDown = {upOrDown}  />
}

export default  Admin_page

