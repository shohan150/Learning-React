import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone from '../qzone/Qzone';
// import bg from '../../../assets/bg.png';
import './rightnav.css';

const RightNav = () => {
   return (
      <div>
         {/* <h4>Login with</h4>
         <Button mb-2 variant='outline-primary'><FaGoogle />Login with Google</Button>
         <Button variant='outline-secondary'><FaGithub />Login with Github</Button> */}

         <div>
            Find us on
            <ListGroup>
               <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
               <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
               <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
            </ListGroup>

         </div>

         <Qzone></Qzone>

         <div className="has-bg-img">
            <h2>Create amazing newspaper</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium accusamus autem nam esse ut a ullam. Qui sed sequi praesentium quidem hic iure! Cumque quae, delectus aperiam deserunt sequi natus!</p>
            <Button mb-2 variant='danger'>Learn More</Button>
         </div>

      </div>

   );
};

export default RightNav;