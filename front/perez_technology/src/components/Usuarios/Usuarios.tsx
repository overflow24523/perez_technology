import { useEffect, useState } from 'react'
import './Usuarios.css'
import { mostrarAlerta } from '../../helpers/MostrarAlerta'
import Usuario from '../Usuario/Usuario'
import { getToken } from '../../helpers/HandlerToken'
// import Usuario from '../Usuario/Usuario';
import BoxDialog from '../BoxDialog/BoxDialog';
const Usuarios = () => {

    const [dataUsers, setDataUsers ] = useState([])
    const [rolebox, setRolebox]      = useState(false)
    const [currentUser , setCurrentUser] = useState<number>(0)

    const cuerpoDialogo = <div className='ctChangeRol'>
                <div className='changeRolTitle'>
                    Cambiar rol
                </div>
                <div className='rolItem rolUser' onClick={()=>{ cambiarRol( currentUser , 1 ) }}>
                    Cliente
                </div>
                <div className='rolItem rolStore' onClick={()=>{ cambiarRol( currentUser , 3 ) }}>
                    Almacenero
                </div>
                <div className='rolItem rolAdmin' onClick={()=>{ cambiarRol( currentUser , 2 ) }}>
                    Administrador
                </div>
    </div>

    const cambiarRol = (target: number , rol: number)=>{
        setRolebox(false)
        const bag = new FormData()
        bag.set('token' , getToken())
        bag.set('target' , String(target))
        bag.set('rol' , String(rol))
        fetch('http://localhost:8081/changeRol',{
            method: 'POST', 
            body: bag 
        })
        .then(res => res.json() )
        .then(arg => {
            mostrarAlerta(arg)
            loadUsers()
        })
        .catch( err => {
            console.log(err)
            mostrarAlerta({status: 500 , msg: 'Algo salió mal'})
        })
    }

    const loadUsers = ()=>{
        const bag = new FormData()

        bag.set('token' , getToken())

        fetch('http://localhost:8081/getUsers', {
            method: 'POST', 
            body: bag
        })
        .then(res => res.json() )
        .then(arg => {
            const {bag: users} = arg
            mostrarAlerta(arg)
            setDataUsers(users)
        })
        .catch( err => {
            console.log(err)
            mostrarAlerta({status: 500 , msg: 'Algo salió mal'})
        })
    }

    const deleteUser = (uid: number) =>{
        const bag  = new FormData()
        bag.set('target', String(uid))
        bag.set('token' , getToken())

        fetch('http://localhost:8081/deleteUser' , {
            method: 'POST', 
            body: bag
        })
        .then(res => res.json())
        .then(arg => {
            if(arg.status==200){
                loadUsers()
            }
            mostrarAlerta(arg)
        })
        .catch(err => {
            console.log(err)
            mostrarAlerta({status: 500, msg: 'No disponible'})
        })

    }

    const showToolbox = ( target:number )=>{     
        setCurrentUser(target) 
        setRolebox(true)
    }


    useEffect(()=>{
        loadUsers()
    } , [])


    return <div className="ctUsuarios">
        {/* <div className='ctProperties'>
            Aquí las estadísticas 
        </div> */}
        <div className='ctUsers'>
            {dataUsers.map(item => { 
                const { id, phone, nombre,  rol , label}  = item
                return <Usuario key={id} uid={id} name={nombre} phone={phone} role={label} img={rol==1?'./src/assets/icons/userIcon3.jpg':'./src/assets/icons/userIcon2.png'}  deleteUser={deleteUser} showToolbox= {showToolbox} />
            })}  
        </div>

        <BoxDialog  isOpen={rolebox} onClose={()=>{ setRolebox(false) }}  children={cuerpoDialogo} />

    </div>

    
}
export default Usuarios

