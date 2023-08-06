import * as  ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'
import { GlobalContextProvider } from './components/GlobalContext/GlobalContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(<GlobalContextProvider><App/></GlobalContextProvider>)



