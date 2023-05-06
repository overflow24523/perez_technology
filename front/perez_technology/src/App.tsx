import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index_Page from './pages/Index_Page';
import Login_Page from './pages/Login_Page';

const App = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [upOrDown , setUpOrDown] = useState(false)

  const handleScroll = (event: any) => {

    const currentScrollPos = event.target.scrollTop;
    if (currentScrollPos > prevScrollPos) {
      setUpOrDown(false)
      // console.log('Scroll hacia abajo');
    } else if (currentScrollPos < prevScrollPos) {
      setUpOrDown(true)
      // console.log('Scroll hacia arriba');
    }

    setPrevScrollPos(currentScrollPos);
  };

  return (
    <Router>
      <div className="App" onScroll={handleScroll}>
        <Routes>
          <Route path='/login' element={<Login_Page  />} />
          <Route path='/' element={<Index_Page upOrDown ={upOrDown} />} />
          <Route path='*' element={<Index_Page upOrDown ={upOrDown} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;