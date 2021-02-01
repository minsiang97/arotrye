import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import product from '../../images/product.jpg'
import product1 from '../../images/product1.jpg'
import product2 from '../../images/product2.jpg'
import product3 from '../../images/product3.jpg'
import './Product.css'

const Products = () => {
    return (
        <Container fluid className="product-page">
            <h1>Our Products</h1>
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
                            <Card.Img variant="top" src={product1} className="product-image" />
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
        
    )
}

export default Products