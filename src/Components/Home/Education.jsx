import React from 'react'
import { Container } from '../../Styles/Default'
import '../../Styles/Home/Education.scss'

import Own from '../../Images/own.png'

const Education = () => {
    return (
        <Container className="education">
            <img src={Own} alt="Own img"/>
            <div className="column">
                <h1>Exprience</h1>
                <div className="content mid">
                    <h1>Web Designer</h1>
                    <h6>Apple</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ab. Dignissimos veniam dolorem doloremque explicabo.</p>
                    <i class="fas fa-calendar-alt"><span>2006-2008</span></i>
                </div>
                <div className="content">
                    <h1>UI/UX Designer</h1>
                    <h6>Apple</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ab. Dignissimos veniam dolorem doloremque explicabo.</p>
                    <i class="fas fa-calendar-alt"><span>2006-2008</span></i>
                </div>
            </div>
            <div className="column right">
                <h1>Education</h1>
                <div className="content mid">
                    <h1>B.C.A</h1>
                    <h6>L.P.U</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ab. Dignissimos veniam dolorem doloremque explicabo.</p>
                    <i class="fas fa-calendar-alt"><span>2020-2023</span></i>
                </div>
                <div className="content">
                    <h1>Web Designer</h1>
                    <h6>Apple</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ab. Dignissimos veniam dolorem doloremque explicabo.</p>
                    <i class="fas fa-calendar-alt"><span>2006-2008</span></i>
                </div>
            </div>
        </Container>
    )
}

export default Education;