import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Column } from '../../Styles/Default'

import { Content, Title, Body } from '../../Styles/Home/Landing'

const Landing = () => {
    return (
        <Container className="landingContainer">
            <Row className="Landing">
                <Column className="LandingLeft">
                    <h1 className="LandingName">Raj<br/>Mazumder</h1>
                    <div className="LandingExp">
                        <h1>2+</h1>
                        <p>Years of<br/>Experience</p>
                    </div>
                </Column>
                <Column className="LandingRight">
                    <Content>
                        <Title>Front-end Web Developer and React Developer</Title>
                        <Body>My ultimate motto is to fulfill the demand of the buyers by making them satisfied with proper file delivery in time.</Body>
                        <Link exact to="/contact" className="btnHire">Hire Me</Link>
                    </Content>
                </Column>
            </Row>
        </Container>
    )
}
export default Landing;