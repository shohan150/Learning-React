import React from 'react';
import Header from '../pages/shared/header/Header';
import Footer from '../pages/shared/footer/Footer';
import LeftNav from '../pages/shared/leftnav/LeftNav';
import RightNav from '../pages/shared/rightnav/RightNav';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../pages/shared/navigationBar/NavigationBar';

const News = () => {
   return (
      <div>
         <Header></Header>
         <NavigationBar></NavigationBar>
         <Container>
            <Row>
               <Col lg={9}><Outlet></Outlet></Col>
               <Col lg={3}><RightNav></RightNav></Col>
            </Row>
         </Container>
         <Footer></Footer>
      </div>
   );
};

export default News;