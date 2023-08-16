import Brand from '../Brand/Brand';
import Menu from '../Menu/Menu';
import { FC, useState, useEffect , useRef, useContext} from 'react';

import './Navbar.css'; 
import Button from '../Button/Button';
import Person from '../Person/Person';
import { GlobalContext } from '../GlobalContext/GlobalContext';


const Navbar: FC<{upOrDown: boolean ,  mPointH: (arg: number) => void }> =({upOrDown, mPointH})=>{

    const IsOpen = true
    const [ isOpen, setOpen ] = useState(IsOpen)
    
    const triggerMenu  = (arg: boolean) =>{
        setOpen(arg)    
    }

    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // alert('El componente está visible en el viewport');
                } else {
                    setIsVisible(false);
                    // alert('El componente ha salido del viewport');
                }
            });
        });


        
        if(ref.current){
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    const {login} = useContext(GlobalContext)


    return (
        <div className={`Nabvar ${upOrDown?'active':''} ${isVisible?'visible':''}`} ref={ref} >
            <Brand ></Brand> 
            <div className='TriggerMenu' onClick={()=>{triggerMenu(false)}}>
                <img src="./src/assets/icons/btnMenu.png" alt=""  width={32} height={32}/>
            </div>
            <Menu open={isOpen} closeHandler = {triggerMenu} />

            <div className='CtRecervar' data-aos="fade-left">
                {
                    login?<Person mPointH={mPointH} />:<Button texto={"ENTRAR"}  clase={"btnRecervar"}  mPointH = {(arg: number)=>{mPointH(arg)}} />
                }
            </div>  

        </div>
    )
}


export default Navbar