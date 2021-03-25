import React from 'react'
import { Container } from '../../Styles/Default'
import { Link } from 'react-router-dom'

import '../../Styles/Home/About.scss'

const About = () => {
    return (
        <Container className="about">
            <div className="column left">
                <h1>Any type of question<br/>& Discussion.</h1>
                <h2>Let's Talk</h2>
                <p className="info">info@rajmazumder.com</p>
                <p className="mid">Skype: live.rajmazumder</p>
                <p>Whatsapp: +91 123 456 7890</p>
            </div>
            <div className="column right">
                <h1>About Me</h1>
                <p>I am a Web Developer from India.<br/>I have been working as Web Developer for 2+ years</p>
                <table>
                    <tr>
                        <td>Name</td>
                        <td>:</td>
                        <td>Raj Mazumder</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>:</td>
                        <td>rajmajumdar182@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Website</td>
                        <td>:</td>
                        <td>rajmazumder.com</td>
                    </tr>
                </table>
                <Link exact to="/about" className="btnHire">Know More</Link>
                <Link exact to="" className="btnHire btncv">Download CV</Link>
            </div>
        </Container>
    )
}
export default About;