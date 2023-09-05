import { useState} from 'react';

import Index_Page from './pages/Index_Page';
import Login_Page from './pages/Login_Page';

import './dtmAnimations.css'
import './dtmMotion.css'
import Admin_page from './pages/Admin_Page';
import Almacen_page from './pages/Almacen_page';


const App = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [upOrDown , setUpOrDown] = useState(true)
  const [mPoint, setMpoint] = useState(0)

  const handleScroll = (event: any) => {

    const currentScrollPos = event.target.scrollTop;
    if (currentScrollPos > prevScrollPos) {
      setUpOrDown(false)
      // console.log('Scroll hacia abajo');
    } else if (currentScrollPos < prevScrollPos) {
      setUpOrDown(true)
      // console.log('Scroll hacia arriba');
    }
    setPrevScrollPos(currentScrollPos)
  };

  let current_component = <div></div>

  switch (mPoint) {
    case 0:
      current_component = <Index_Page upOrDown ={upOrDown} mPointH = {(arg: number)=>{setMpoint(arg)}} />
      break
    case 1: 
      current_component = <Login_Page  mPointH = {(arg: number)=>{setMpoint(arg)}}  />
      break
    case 2:
      current_component = <Admin_page upOrDown = {upOrDown}  mPointH={(arg: number)=>{setMpoint(arg)}}/>
      break
    case 3:
      current_component =  <Almacen_page  upOrDown = {upOrDown}  mPointH={(arg: number)=>{setMpoint(arg)}}  />
      break
    
    default:
      break;

  }
  

  return (
      <div className="App" onScroll={handleScroll}> 
        {current_component}
      </div>
  );
};

export default App;