import React from 'react';
import Banner from './Banner';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../styles/book.scss';

function Calendar() {
    return (
        <div>
            <Banner imageURL={"book"}/>
            <Container>
                <b>Email Here: <i><a href="mailto:motivation@rncoaching.com">motivation@rncoaching.com</a></i></b>
                <br/><br/>
                Or drop a message below:
                <br/><br/>
                <Form>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group controlId="formEmailAddress">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Send Email
                    </Button>
                </Form>
                <br/><br/>
            </Container>
        </div>
    );
}

export default Calendar;