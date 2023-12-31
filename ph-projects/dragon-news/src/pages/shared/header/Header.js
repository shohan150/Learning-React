import React, { useContext } from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container, Navbar, Nav } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {

   const { user } = useContext(AuthContext);

   return (
      <Container>
         <div className="text-center">
            <img src={logo} alt="" />
            <p className='text-secondary'><small>Journalism without fear or favor</small></p>
            <p>{moment().format("dddd, MMMM D, YYYY")}</p>
         </div>

         <div className='d-flex'>
            <Button variant="danger">Latest</Button>
            <Marquee className='text-danger' speed={65}>
               I can be a React component, multiple React components, or just some text.
            </Marquee>
         </div>

         {/* <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
               <Navbar.Toggle aria-controls="navbarScroll" />
               <Navbar.Collapse id="navbarScroll">
                  <Nav
                     className="mx-auto my-2 my-lg-0"
                     style={{ maxHeight: '100px' }}
                     navbarScroll
                  >
                     <Nav.Link href="#action1">
                        <Link to='/'>Home</Link>
                     </Nav.Link>
                     <Nav.Link href="#action2">About</Nav.Link>
                     <Nav.Link href="#action2">Career</Nav.Link>
                  </Nav>

                  <Nav>
                     {
                        user && <Nav.Link href='#deets'><FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle></Nav.Link>
                     }

                     <Nav.Link eventKey={2} href='#memes'>
                        {
                           user ?
                              <Button variant="secondary">Log out</Button> :
                              <Link to='/login'>
                                 <Button variant="secondary">Login</Button>
                              </Link>}
                     </Nav.Link>
                  </Nav>

               </Navbar.Collapse>
            </Container>
         </Navbar > */}

      </Container >
   );
};

export default Header;