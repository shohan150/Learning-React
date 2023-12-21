import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const RightNav = () => {
   return (
      <div>
         <h4>Login with</h4>
         <Button mb-2 variant='outline-primary'><FaGoogle />Login with Google</Button>
         <Button variant='outline-secondary'><FaGithub />Login with Github</Button>

         <div>
            Find us on
            <ListGroup>
               <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
               <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
               <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
            </ListGroup>
         </div>

      </div>

   );
};

export default RightNav;