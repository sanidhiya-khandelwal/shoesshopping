import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Star from '../assets/PopularSales/Star.jsx'
const PopularSales = () => {
    return (
        <>
            <div>
                <h1 className='h1popularsales'>Popular Sales</h1><br />
                <Container>
                    <Row style={{ justifyContent: 'space-between', minHeight: "160px" }}>
                        <Col style={{ width: '9cm' }} sm={3} className='popularsalescard pop1'>
                            <Row>
                                <Col sm={12}>
                                    <h5>Nike Addapt BB 2.0</h5>
                                    <h6>MEN Running Shoes</h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={5}>

                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        <h6 id="cost">$200</h6> <Star /><h6>4.9</h6>
                                    </div>
                                </Col>
                                <Col sm={5}>
                                    <img src="\src\assets\PopularSales\pop1.png" alt="pop1" className='styleshowpop1' />
                                </Col>
                            </Row>
                        </Col>
                        <Col style={{ width: '9cm' }} sm={3} className='popularsalescard pop2'>
                            <Row>
                                <Col sm={12}>
                                    <h5>Nike Martine Rose</h5>
                                    <h6>MEN Running Shoes</h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={5}>

                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        <h6 id="cost">$200</h6> <Star /><h6>4.9</h6>
                                    </div>
                                </Col>
                                <Col sm={5}>
                                    <img src="\src\assets\PopularSales\pop2.png" alt="pop2" className='styleshowpop1' />
                                </Col>
                            </Row>
                        </Col>
                        <Col style={{ width: '9cm' }} sm={3} className='popularsalescard pop3'>
                            <Row>
                                <Col sm={12}>
                                    <h5>Nike Smart Shoe 2.0</h5>
                                    <h6>MEN Running Shoes</h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={5}>

                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        <h6 id="cost">$200</h6> <Star /><h6>4.9</h6>
                                    </div>
                                </Col>
                                <Col sm={5}>
                                    <img src="\src\assets\PopularSales\pop3.png" alt="pop3" className='styleshowpop1' />
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </Container > <br /><br />
                <Container>
                    <Row style={{ justifyContent: 'space-between' }}>
                        <Col sm={5}>
                            <img className='shoe' style={{ width: "510px" }} src="..\src\assets\PopularSales\prop4.png" alt="" />
                        </Col>
                        <Col sm={5}>
                            <h2 style={{ color: '#00BFFF', fontWeight: '900' }}>HIGHLIGHTS</h2>
                            <h1 style={{ fontWeight: '900' }}>NIKE AIR WITH LIMITLESS CHOICES</h1>
                            <p>Our Purpose is to move the world forward. We take action by building community, protecting our planet and increasing access to sport.</p>
                            <a href="https://www.nike.com/in/launch/t/nocta-hot-step-black-gold" target='_blank'> <button id='btn'>Explore More</button> </a> <br /><br />

                        </Col>
                    </Row>
                </Container>

            </div >
        </>
    )
}

export default PopularSales