import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../styles/footer.scss';

function Footer() {
    return (
        <footer>
            <br/>
            <Container className="footer-child" fluid>
                <Row>
                    <Col>
                        <p>Unit 4, C TEK Building, <br/> Riverside Road, <br/> Carrickmacross, <br/> Telephone: 0871907175</p>
                    </Col>
                </Row><br/>
                <Row>
                    <Col xs={4}>
                        <FontAwesomeIcon icon={ faFacebookF }  size='2x'/>
                    </Col>
                    <Col xs={4}>
                        <FontAwesomeIcon icon={ faTwitter }  size='2x'/>
                    </Col>
                    <Col xs={4}>
                        <FontAwesomeIcon icon={ faInstagram }  size='2x'/>
                    </Col>
                </Row><br/>
                <Row>
                    <Col className="footer-copyright-section">
                        &copy; RN Coaching 2020
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;