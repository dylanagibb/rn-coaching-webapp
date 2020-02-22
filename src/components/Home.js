import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import navIcon1 from '../images/nav-icon-1.jpg';
import navIcon2 from '../images/nav-icon-2.jpg';
import Banner from '../components/Banner';
import '../styles/home.scss'

function Home() {
    return (
        <div>
            <Banner imageURL={"home"}/>
            <br/>
            <Container fluid={true}>
                <Row>
                    <Col className="my-auto" xs={12} md={6}>
                        <h2>Life Coaching</h2>
                    </Col>
                    <Col xs={12} md={6}>
                        <p>
                            Sometimes everybody needs a little guidance.<br/>
                            Whether it's with your career, relationships or<br/>
                            general confusion as to where to go next.
                            <br/><br/>
                            I am here to help you live your best life.
                        </p>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col xs={12}>
                        <h2>Explore</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Find out more about Rebecca, Life Coaching and how you can live your best life...</p>
                    </Col>
                </Row><br/>
                <Row>
                    <Col xs={12} md={6} className="nav-images">
                        <span>About Rebecca</span><br/>
                        <a href="About"><img src={navIcon1} alt="About Pge Navigation Icon" rounded /></a>
                    </Col>
                    <Col xs={12} md={6} className="nav-images">
                        <span>Life Coaching</span><br/>
                        <a href="Services"><img src={navIcon2} alt="About Pge Navigation Icon" rounded /></a>
                    </Col>
                </Row><br/><br/>
            </Container>
        </div>
    );
}

export default Home;