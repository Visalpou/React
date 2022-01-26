import './App.css'
import {BrowserRouter as Router,Routes,Route, Link  } from 'react-router-dom'
import Home from './page/Home';
import Contactus from './page/Contactus';
import About from './page/About';
import Errorpage from './page/Errorpage';

function App(){
  return(
    <Router>
        <nav className='fs-5 text-center bg-warning py-3'>
            <Link className='navbarList' to="/">Home</Link>
            <Link className='navbarList' to="/aboutus">About us</Link>
            <Link className='navbarList' to="/contactus">Contact us</Link>
        </nav>
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/contactus" element={ <Contactus/>} />
            <Route path="/aboutus" element={ <About/> } />
            <Route path="*" element={ <Errorpage/> } />  
        </Routes>
    </Router> 
  ); 
}
export default App;
