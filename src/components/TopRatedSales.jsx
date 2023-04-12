import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Star from '../assets/PopularSales/Star.jsx'
import './style/TopRatedSales.css'

const TopRatedSales = (prop) => {
    return (
        <div>
            <h2 className='h1popularsales'>Top Rated Sales</h2><br />

            <Container>
                <Row style={{ justifyContent: 'space-between' }}>
                    <Col sm={3} className='TopRatedSales '>
                        <div className='TRS1'>
                            <h6 style={{ paddingTop: '15px' }}>Nike Air Low Premium</h6>
                            <h6>MEN Running Shoes</h6>
                            <div style={{ display: "flex", alignSelf: "center", justifyContent: "center", gap: "10px" }}>
                                <h6 id="cost" >$150</h6>
                                <Star />
                                <h6 >5+</h6>
                            </div>
                            <h6><img src=".\src\assets\General\bagcart.png" alt="bagcart" className='bagcart' /> &nbsp;&nbsp;&nbsp; <button className='btn1'>Buy Now</button></h6>
                            <img src=".\src\assets\TopRatedSales\TRS1.png" alt="" className='TrsImage' />
                        </div>
                    </Col>
                    <Col sm={3} className='TopRatedSales'>
                        <div className='TRS2'>
                            <h6 style={{ paddingTop: '15px' }} >Nike Air Force Green</h6>
                            <h6>MEN Running Shoes</h6>
                            <div style={{ display: "flex", alignSelf: "center", justifyContent: "center", gap: "10px" }}>
                                <h6 id="cost" >$150</h6>
                                <Star />
                                <h6 >5+</h6>
                            </div>
                            <h6><img src=".\src\assets\General\bagcart.png" alt="bagcart" className='bagcart' /> &nbsp;&nbsp;&nbsp; <button className='btn1'>Buy Now</button></h6>
                            <img src=".\src\assets\TopRatedSales\TRS2.png" alt="" className='TrsImage' />
                        </div>
                    </Col>
                    <Col sm={3} className='TopRatedSales'>
                        <div className='TRS3'>
                            <h6 style={{ paddingTop: '15px' }} >Nike Air Force Green</h6>
                            <h6>MEN Running Shoes</h6>
                            <div style={{ display: "flex", alignSelf: "center", justifyContent: "center", gap: "10px" }}>
                                <h6 id="cost" >$150</h6>
                                <Star />
                                <h6 >5+</h6>
                            </div>
                            <h6><img src=".\src\assets\General\bagcart.png" alt="bagcart" className='bagcart' /> &nbsp;&nbsp;&nbsp; <button className='btn1'>Buy Now</button></h6>
                            <img src=".\src\assets\TopRatedSales\TRS3.png" alt="" className='TrsImage' />
                        </div>
                    </Col>
                    <Col sm={3} className='TopRatedSales'>
                        <div className='TRS4'>
                            <h6 style={{ paddingTop: '15px' }}>Nike Air Force Green</h6>
                            <h6>MEN Running Shoes</h6>

                            <div style={{ display: "flex", alignSelf: "center", justifyContent: "center", gap: "10px" }}>
                                <h6 id="cost" >$150</h6>
                                <Star />
                                <h6 >5+</h6>
                            </div>

                            <h6><img src=".\src\assets\General\bagcart.png" alt="bagcart" className='bagcart' /> &nbsp;&nbsp;&nbsp; <button className='btn1'>Buy Now</button></h6>
                            <img src=".\src\assets\TopRatedSales\TRS4.png" alt="" className='TrsImage' />
                        </div>
                    </Col>
                </Row><br />
                <Row>

                    <Col sm={3} className='TopRatedSales '>
                        <div className='TRS5'>
                            <h6 style={{ paddingTop: '15px' }}>Nike Adapt BB Pro</h6>
                            <h6>MEN Running Shoes</h6>
                            <div style={{ display: "flex", alignSelf: "center", justifyContent: "center", gap: "10px" }}>
                                <h6 id="cost" >$150</h6>
                                <Star />
                                <h6 >5+</h6>
                            </div>
                            <h6><img src=".\src\assets\General\bagcart.png" alt="bagcart" className='bagcart' /> &nbsp;&nbsp;&nbsp; <button className='btn1'>Buy Now</button></h6>
                            <img src=".\src\assets\TopRatedSales\TRS5.png" alt="" className='TrsImage' />
                        </div>
                    </Col>
                    <Col sm={3} className='TopRatedSales'>
                        <div className='TRS6'>
                            <h6 style={{ paddingTop: '15px' }} >Air Jordan PR3</h6>
                            <h6>MEN Running Shoes</h6>
                            <div style={{ display: "flex", alignSelf: "center", justifyContent: "center", gap: "10px" }}>
                                <h6 id="cost" >$150</h6>
                                <Star />
                                <h6 >5+</h6>
                            </div>
                            <h6><img src=".\src\assets\General\bagcart.png" alt="bagcart" className='bagcart' /> &nbsp;&nbsp;&nbsp; <button className='btn1'>Buy Now</button></h6>
                            <img src=".\src\assets\TopRatedSales\TRS6.png" alt="" className='TrsImage' />
                        </div>
                    </Col>
                    <Col sm={3} className='TopRatedSales'>
                        <div className='TRS7'>
                            <h6 style={{ paddingTop: '15px' }} >Nike Multi Smart Shoe</h6>
                            <h6>MEN Running Shoes</h6>
                            <div style={{ display: "flex", alignSelf: "center", justifyContent: "center", gap: "10px" }}>
                                <h6 id="cost" >$150</h6>
                                <Star />
                                <h6 >5+</h6>
                            </div>
                            <h6><img src=".\src\assets\General\bagcart.png" alt="bagcart" className='bagcart' /> &nbsp;&nbsp;&nbsp; <button className='btn1'>Buy Now</button></h6>
                            <img src=".\src\assets\TopRatedSales\TRS7.png" alt="" className='TrsImage' />
                        </div>
                    </Col>
                    <Col sm={3} className='TopRatedSales'>
                        <div className='TRS8'>
                            <h6 style={{ paddingTop: '15px' }}>Nike Jordan Air Max</h6>
                            <h6>MEN Running Shoes</h6>

                            <div style={{ display: "flex", alignSelf: "center", justifyContent: "center", gap: "10px" }}>
                                <h6 id="cost" >$150</h6>
                                <Star />
                                <h6 >5+</h6>
                            </div>

                            <h6><img src=".\src\assets\General\bagcart.png" alt="bagcart" className='bagcart' /> &nbsp;&nbsp;&nbsp; <button className='btn1'>Buy Now</button></h6>
                            <img src=".\src\assets\TopRatedSales\TRS8.png" alt="" className='TrsImage' />
                        </div>
                    </Col>

                </Row><br />

                <Row>

                    <Col sm={3} className='TopRatedSales '>
                        <div className='TRS9'>
                            <h6 style={{ paddingTop: '15px' }}>Nike Adapt BB Pro</h6>
                            <h6>MEN Running Shoes</h6>
                            <div style={{ display: "flex", alignSelf: "center", justifyContent: "center", gap: "10px" }}>
                                <h6 id="cost" >$150</h6>
                                <Star />
                                <h6 >5+</h6>
                            </div>
                            <h6><img src=".\src\assets\General\bagcart.png" alt="bagcart" className='bagcart' /> &nbsp;&nbsp;&nbsp; <button className='btn1'>Buy Now</button></h6>
                            <img src=".\src\assets\TopRatedSales\TRS9.png" alt="" className='TrsImage' />
                        </div>
                    </Col>
                    <Col sm={3} className='TopRatedSales'>
                        <div className='TRS10'>
                            <h6 style={{ paddingTop: '15px' }} >Air Jordan PR3</h6>
                            <h6>MEN Running Shoes</h6>
                            <div style={{ display: "flex", alignSelf: "center", justifyContent: "center", gap: "10px" }}>
                                <h6 id="cost" >$150</h6>
                                <Star />
                                <h6 >5+</h6>
                            </div>
                            <h6><img src=".\src\assets\General\bagcart.png" alt="bagcart" className='bagcart' /> &nbsp;&nbsp;&nbsp; <button className='btn1'>Buy Now</button></h6>
                            <img src=".\src\assets\TopRatedSales\TRS10.png" alt="" className='TrsImage' />
                        </div>
                    </Col>
                    <Col sm={3} className='TopRatedSales'>
                        <div className='TRS11'>
                            <h6 style={{ paddingTop: '15px' }} >Nike Multi Smart Shoe</h6>
                            <h6>MEN Running Shoes</h6>
                            <div style={{ display: "flex", alignSelf: "center", justifyContent: "center", gap: "10px" }}>
                                <h6 id="cost" >$150</h6>
                                <Star />
                                <h6 >5+</h6>
                            </div>
                            <h6><img src=".\src\assets\General\bagcart.png" alt="bagcart" className='bagcart' /> &nbsp;&nbsp;&nbsp; <button className='btn1'>Buy Now</button></h6>
                            <img src=".\src\assets\TopRatedSales\TRS11.png" alt="" className='TrsImage' />
                        </div>
                    </Col>
                    <Col sm={3} className='TopRatedSales'>
                        <div className='TRS12'>
                            <h6 style={{ paddingTop: '15px' }}>Nike Jordan Air Max</h6>
                            <h6>MEN Running Shoes</h6>

                            <div style={{ display: "flex", alignSelf: "center", justifyContent: "center", gap: "10px" }}>
                                <h6 id="cost" >$150</h6>
                                <Star />
                                <h6 >5+</h6>
                            </div>


                            {/* <h6><span id="cost">$150</span> &nbsp; 5+</h6> */}
                            <h6><img src=".\src\assets\General\bagcart.png" alt="bagcart" className='bagcart' /> &nbsp;&nbsp;&nbsp; <button className='btn1'>Buy Now</button></h6>
                            <img src=".\src\assets\TopRatedSales\TRS12.png" alt="" className='TrsImage' />
                        </div>
                    </Col>


                </Row>
            </Container>
        </div >
    )
}

export default TopRatedSales;