import React from 'react'
import { Container } from '../../Styles/Default'

import '../../Styles/Home/Specialize.scss'

const Specialize = () => {
    return (
        <Container className="specialize">
            <h1>Specializing In</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis illo cupiditate doloribus eius deserunt, iure in aperiam recusandae voluptatum maxime.</p>
            <div className="specializeContent">
                <div className="column">
                <i class="fas fa-laptop-code"></i>
                    <h1>Web Development</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <h6>100+ projects</h6>
                </div>
                <div className="column midColumn">
                    <i class="fab fa-react"></i>
                    <h1>React Design</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <h6>370+ projects</h6>
                </div>
                <div className="column">
                    <i class="fas fa-pen-nib"></i>
                    <h1>Graphics Design</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <h6>289+ projects</h6>
                </div>
            </div>
        </Container>
    )
}
export default Specialize;