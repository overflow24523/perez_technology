import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import Index from './pages/Index';
import Login from './pages/Login';



const App = ()=>{
 return <Router>
    <div className="App"  >
      <Routes>
        <Route  index element ={ <Index />} />
        <Route  path='/login' element ={ <Login />} />
      </Routes>
    </div>
  </Router>
}

export default App