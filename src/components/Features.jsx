import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const Features = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={5}>
                        <h5 style={{ color: "#1E90FF", fontSize: "30px", fontWeight: "700" }}>FEATURED</h5>
                        <h6 style={{ fontSize: "35px", fontWeight: "1100" }}>NIKE SNEAKERS AIR LANCING SHOES</h6>
                        <p>The radiance lives on Nike Sneakers Air Lancing Shoes, the basket ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.</p>
                        <a href="https://sneakernews.com/2022/03/21/nike-lebron-2-retro-white-midnight-navy-varsity-crimson-dr0826-100/" target='_blank'> <button id='btn'>Explore More</button> </a> <br /><br />
                    </Col>
                    <Col sm={5}>
                        <img src=".\src\assets\Featured\Featured.png" alt="" width={"400px"} className='featureimg' />
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Features;