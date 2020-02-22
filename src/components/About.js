import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Banner from './Banner';
import '../styles/about.scss';

function About() {
    return(
        <div>
            <Banner imageURL={"about"}/>
            <Container fluid={true}><br/>
                <Row>
                    <Col xs={12}>
                        Rebecca Neary is a qualified life coach operating out of Carrickmacross, Co. Monaghan. Rebecca is trained and qualified in many fields of psychology
                        and self-development. Rebecca is dedicated to helping others change their mindset to help them out of situations or to accomplish their goals.
                    </Col>
                </Row>
                <br/>
                There are often some misconceptions as to what Life Coaching actually is. Hopefully this section can help dispel some of the myths or uncertantiy and help you decide
                if Life Coaching is for you:
                <ol>
                    <br/>
                    <li>
                        <span className="li-header">Someone to talk to</span><br />
                        Life coaching isn't about getting a motivational speech on a stage every session you come to. Sometimes just having a relaxed chat about your career, relationship
                        or anything that's on your mind can help. As a life coach Rebecca can analyze and assess the best course of action for you to take next and Rebecca is always going to be there for
                        you if you just need to have a chat with someone.
                    </li>
                    <br/>
                    <li>
                        <span className="li-header">Life Coaching is for Life</span><br/>
                        And no, that doesn't mean you need to subscribe to Lie Coaching for life :). Life Coaching encompasses a wide range of topics. It's easy to think that it may only be of
                        benefit to business people or somebody searching for a new career. Life Coaching can be about whatever you need it to be about, whether that's having issues building the confidence to ask your
                        boss for a raise or not feeling motivated enough to hit your gym goals for the year. Life Coaching is for life, as in your whole life.
                    </li>
                    <br/>
                    <li>
                        <span className="li-header"b>Life Coaching is only for dire help</span><br/>
                        While Life Coaching can be of assistance to somebody suffering from mental illness it can also help massively in preventing one. Talking to Rebecca about whats bothering you is
                        a great start to stopping or preventing a full blown episode of depression or anxiety from escalating. As a qualified Life Coach Rebecca can assess her clients and help them decide
                        where to go next, whether it is more Life Coaching sessions or help find alternative means.
                    </li>
                </ol>            
            </Container>
        </div>
    )
}

export default About;