import React, {useEffect} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import {Link} from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import wallpaper from '../../images/banner2.jpg' 
import wallpaper2 from '../../images/wallpaper2.jpg'
import wallpaper3 from '../../images/wallpaper3.jpg'
import tyre from '../../images/tyre.png'
import cart from '../../images/cart.jpg'
import oil from '../../images/oil.png'
import tyres from '../../images/tyres.jpg'
import factory from '../../images/factory.jpg'
import oils from '../../images/oil.jpg'
import lazada from '../../images/lazada.jpg'
import whatsapp from '../../images/whatsapp.png'
import Card from 'react-bootstrap/Card'
import product from '../../images/product.jpg'
import product1 from '../../images/product1.jpg'
import product2 from '../../images/product2.jpg'
import product3 from '../../images/product3.jpg'
import qr from '../../images/qr.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './Homepage.css'

const Homepage = () => {

    useEffect(() => {
        Aos.init({duration:1200, easing: 'ease-in-sine', disable:"phone"})
    })

    return (
    <>
        <Carousel controls={false} className="carousel">
            <Carousel.Item interval={2000}>
                <Row>
                    <Col sm={7} xs={12} className="carousel-content1">
                        <img
                        className="d-block w-100"
                        src={wallpaper}
                        alt="First slide"
                        />
                    </Col>
                    <Col sm={5} xs={12} className="carousel-content">
                        <Row className="justify-content-center carousel-row">
                            <Col lg={9} xs={12}>
                                <h1 className="brand">Ferrali</h1>
                                <p className="brand-description">THE BEST TYRE YOU CAN FIND IN IPOH</p>
                                <a href="https://www.lazada.com.my" target="blank" className="shop-now-anchor"><button className="btn shop-now-button"><span>SHOP NOW</span></button></a>
                            </Col>
                            
                        </Row>
                    </Col>
                </Row>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <Row className="flex-row-reverse">
                    <Col sm={7} xs={12} className="carousel-content1">
                        <img
                        className="d-block w-100"
                        src={wallpaper}
                        alt="First slide"
                        />
                    </Col>
                    <Col sm={5} xs={12} className="carousel-content">
                        <Row className="justify-content-center carousel-row">
                            <Col lg={10} xs={12}>
                                <h1 className="brand">FREE FOR LIFE PROMOTION</h1>
                                <p className="brand-description">FREE ENGINE OIL FOR THE REST OF YOUR LIFE!!</p>
                                <a href="https://www.lazada.com.my" target="blank" className="shop-now-anchor"><button className="btn shop-now-button"><span>Learn More</span></button></a>
                            </Col>
                            
                        </Row>
                    </Col>
                </Row>
            </Carousel.Item>
        </Carousel>

        <Container fluid className="product-container">
            <h1 className="text-center product-title">Our Products</h1>
            <Row className="mt-5 flex-wrap">
                <Col lg={3} md={6} xs={12}>
                    <Card className="product-card">
                        <div className="card-image-div">
                            <Card.Img variant="top" src={product} className="product-image" />
                        </div>
                        
                        <Card.Body>
                            <Card.Title>Diamond 70/90-17</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3} md={6} xs={12}>
                    <Card className="product-card">
                        <div className="card-image-div">
                            <Card.Img variant="top" src={product1} className="product-image m-auto" />
                        </div>
                        <Card.Body>
                            <Card.Title>Diamond 80/90-17</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3} md={6} xs={12}>
                    <Card className="product-card">
                        <div className="card-image-div">
                            <Card.Img variant="top" src={product2} className="product-image"/>
                        </div>
                        <Card.Body>
                            <Card.Title>Spider 80/80-17</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3} md={6} xs={12}>
                    <Card className="product-card">
                        <div className="card-image-div">
                            <Card.Img variant="top" src={product3} className="product-image"/>
                        </div>
                        <Card.Body>
                            <Card.Title>Spider 80/90-17</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            
        </Container>

        <Container fluid className="step-container bg-light">
            <Row className="justify-content-center" data-aos="fade-up" data-aos-delay="1000" data-aos-anchor-placement="center-bottom" >
                <Col lg={7} sm={10} xs={12} className="step-col-1">
                    <h1 className="mb-5 text-center step-title">Join Us Now</h1>
                    <Row className="justify-content-center mb-5">
                        <Col sm={4} xs={12} className="text-center">
                            <img src={tyre}></img>
                        </Col>
                        <Col sm={7} xs={12} className="step-col">
                            <h1>Buy a set of tyre and join our membership for free</h1>    
                        </Col>
                    </Row>
                    <Row className="justify-content-center flex-row-reverse mb-5">
                        <Col sm={4} xs={12} className="text-center">
                            <img src={oil}></img>
                        </Col>
                        <Col sm={7} xs={12} className="step-col">
                            <h1>Introduce to others to earn points and get free engine oil for life</h1>   
                        </Col>
                    </Row>
                </Col>
            </Row>
            
        </Container>

        <Container fluid className="step-container bg-light">
            <Row className="justify-content-center" data-aos="fade-up" data-aos-delay="1500" data-aos-anchor-placement="center-bottom">
                <Col lg={7} xs={12}>
                    <h1 className="step-title text-center">How to Purchase</h1>
                    <Row className="mt-5">
                        <Col xs={12}>
                            <h2 className="text-center">Visit our shop in Lazada and make purchases</h2>
                        </Col>
                        <Col xs={12} className="text-center mt-3">
                            <a href="https://www.lazada.com.my" target="blank"><img src={lazada} className="lazada"></img></a>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col xs={12}>
                            <h2 className="text-center">Send us the receipt through whatsapp</h2>
                        </Col>
                        <Col xs={12} className="text-center mt-3">
                            <a href="https://wa.link/fd3laz" target="blank"><img src={whatsapp} className="whatsapp"></img></a>
                            <img src={qr} className="whatsapp"></img>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col>
                            <h2 className="text-center">Congratulations! You are one of us now!</h2>
                        </Col>
                    </Row>
                   
                </Col>
            </Row>
        </Container>
        <Container fluid className="how-section">
            <h1>Free For Life Concept</h1>
            <h1>How can we do it?</h1>
            <Row className="justify-content-center mt-5">
                <Col sm={4} className="how-col2">
                    <img src={factory} className="w-100"></img>
                    <div>
                        <h3>Directly from Factory</h3>
                        <h4>No Wholesaler or Dealer</h4>
                    </div>
                </Col>
                <Col sm={4} className="how-col">
                    <img src={tyres} className="w-100"></img>
                    <div>
                        <h3>Warranty</h3>
                        <h4>Guaranteed</h4>
                    </div>
                </Col>
                <Col sm={4} className="how-col3">
                    <img src={oils} className="w-100"></img>
                    <div>
                        <h3>Free Engine Oil For Life</h3>
                        <h4>Giving profits to member</h4>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-center mt-3">
                <Col sm={3} xs={12} className="text-center">
                <a href="https://www.lazada.com.my" target="blank" className="shop-now-anchor"><button className="btn learn-more"><span>Learn More</span></button></a>
                </Col>
            </Row>
        </Container>

    </>
    )
}

export default Homepage