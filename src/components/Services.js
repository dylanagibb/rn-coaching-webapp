import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Banner from '../components/Banner';
import '../styles/services.scss'

function Services() {
    return (
        <div>
            <Banner imageURL={"services"}/>
            <Container>
                <br/>
                <Row>
                    <div className="services-jumbotron services-box-1">
                        <Row>
                            <Col><h1>1-to-1 Sessions</h1></Col>
                            <Col><p>Rebecca offers 1-to-1 personalised sessions so that you can get a coaching programme tailored to your specific needs.</p></Col>
                        </Row>
                    </div>
                </Row><br/>
                <Row>
                    <div className="services-jumbotron services-box-2">
                        <Row>
                            <Col><h1>Relationships</h1></Col>
                            <Col><p>Rebecca also offers sessions for than one person. Working on your romantic, familial or friendly relationships to help you strengthen bonds with those who matter most</p></Col>
                        </Row>
                    </div>
                </Row><br/>
            </Container>
        </div>
    )
}

export default Services;