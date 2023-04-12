import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Button from './Button'
import { transform } from 'typescript';


const Body = () => {
    const imgStyle = {
        width: '100px',
        height: '100px',
        borderRadius: '20px',
        marginTop: '15px',
    }

    // const shoeStyle = {
    //     width: '302px',
    //     height: '170px',
    //     marginLeft: '5cm',
    // }

    const socialStyle = {
        width: '25px',
        height: '25px',
        marginLeft: '25px',
        marginBottom: '12px',

    }
    return (
        <div className='body'>
            <Container fluid>
                <Row>
                    <Col sm={2} className='colbody1'>
                        <Row>
                            <Col><img style={imgStyle} src="\src\assets\Gifs\gif1.gif" alt="gif1" /></Col>
                            <Col><img style={imgStyle} src="\src\assets\Gifs\gif2.gif" alt="gif2" /></Col>
                            <Col><img style={imgStyle} src="\src\assets\Gifs\gif3.gif" alt="gif3" /> </Col>
                        </Row>
                    </Col>
                    <Col sm={8} className='colbody2'>
                        <Button></Button>
                        <img style={{ width: '510px', marginLeft: '60px' }} src="\src\assets\Shoe.png" alt="shoe" className='shoe' />
                    </Col>
                    <Col sm={1} className='colbody3'>
                        <Row>
                            <a href="#"><img src="\src\assets\SocialMedia\facebook.png" alt="fb" style={socialStyle} className='headerimg' /></a>
                            <a href="#"><img src="\src\assets\SocialMedia\instagram.png" alt="ins" style={socialStyle} className='headerimg' /></a>
                            <a href="#"><img src="\src\assets\SocialMedia\messenger.png" alt="messg" style={socialStyle} className='headerimg' /></a>
                            <a href="#"><img src="\src\assets\SocialMedia\twitter.png" alt="twit" style={socialStyle} className='headerimg' /></a>
                            <a href="#"><img src="\src\assets\SocialMedia\youtube.png" alt="utube" style={socialStyle} className='headerimg' /></a>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default Body;