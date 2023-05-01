import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import Index_Page from './pages/Index_Page';
import Login_Page from './pages/Login_Page';



const App = ()=>{
 return <Router>
    <div className="App"  >
      <Routes>
        <Route  index element ={ <Index_Page />} />
        <Route  path='/login' element ={ <Login_Page />} />
        <Route  path='/register' element ={ <Login_Page />} />
        <Route  path='/recover' element ={ <Login_Page />} />
      </Routes>
    </div>
  </Router>
}

export default App