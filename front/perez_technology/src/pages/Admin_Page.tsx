import { FC } from "react"
import Admin from "../components/Admin/Admin"

const Admin_page: FC<{ mPointH: (arg: number) => void }> = ({mPointH})=>{
    return <Admin mPointH={mPointH}  />
}

export default  Admin_page

