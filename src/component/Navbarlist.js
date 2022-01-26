import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import {Navbar,Container} from 'react-bootstrap'
import Home from '../page/Home';
import Contactus from '../page/Contactus'
import About from '../page/About'
import Errorpage from '../page/Errorpage'
import Service from '../page/Service'
const Navbarlist = () => {
  return (
    <Router>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand>
              <Link className='text-light fw-bold fs-2 text-decoration-none' to="/"> Summer Design</Link>
         </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <nav className='fs-5 text-end w-100'>
              <Link className='navbarList' to="/">Home</Link>
              <Link className='navbarList' to="/aboutus">About us</Link>
              <Link className='navbarList' to="/contactus">Contact us</Link>
              <Link className='navbarList' to="/service">Service</Link>
            </nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/service" element={ <Service/> } />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </Router>
  );
}

export default Navbarlist;




