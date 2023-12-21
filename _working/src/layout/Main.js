import React from 'react';
import Header from '../pages/shared/header/Header';
// import Home from '../pages/home/home/Home';
import Footer from '../pages/shared/leftNav/LeftNav';
import LeftNav from '../pages/shared/footer/Footer';
import RightNav from '../pages/shared/rightNav/RightNav';
import { Col, Container, Row } from 'react-bootstrap';

const Main = () => {
   return (
      <div>
         <Header></Header>
         <Container>
            <Row>
               <Col lg={3}><LeftNav></LeftNav></Col>
               <Col lg={6}></Col>
               <Col lg={3}><RightNav></RightNav></Col>
            </Row>
         </Container>
         <Footer></Footer>
      </div>
   );
};

export default Main;