import Brand from '../Brand/Brand';
import Menu from '../Menu/Menu';
import { FC, useState, useEffect , useRef} from 'react';

import './Navbar.css'; 
// import Button from '../../../Button/Button';
import Person from '../../../Person/Person';

const Navbar: FC<{upOrDown: boolean ,  mPointH: (arg: number) => void ,jostick: (arg:number)=>void }> =({upOrDown, mPointH, jostick})=>{

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


    return (
        <div className={`Nabvar ${upOrDown?'active':''} ${isVisible?'visible':''}`} ref={ref} >
            <Brand  mPointH={mPointH} /> 
            <div className='TriggerMenu' onClick={()=>{triggerMenu(false)}}>
                <img src="./src/assets/icons/btnMenu.png" alt=""  width={32} height={32}/>
            </div>

            <Menu open={isOpen} closeHandler = {triggerMenu} jostick={ jostick }/>

            <div className='ctName'>
                <Person />
            </div>
        </div>
    )
}


export default Navbar