import React from 'react';
import Header from '../pages/shared/header/Header';
import Footer from '../pages/shared/footer/Footer';
import LeftNav from '../pages/shared/leftnav/LeftNav';
import RightNav from '../pages/shared/rightnav/RightNav';
import { Col, Container, Row } from 'react-bootstrap';

const Main = () => {
   return (
      <div>
         <Header></Header>
         <Container>
            <Row>
               <Col lg={3}><LeftNav></LeftNav></Col>
               <Col lg={6}><h3>Main content coming</h3></Col>
               <Col lg={3}><RightNav></RightNav></Col>
            </Row>
         </Container>
         <Footer></Footer>
      </div>
   );
};

export default Main;