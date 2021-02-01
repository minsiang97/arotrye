import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { SocialIcon } from 'react-social-icons';
import emailjs from 'emailjs-com';
import {toast} from 'react-toastify'
import lazada from '../../images/lazada.png'
import './Footer.css'

const Footer = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const sendEmail = (e) => {
        e.preventDefault();
        
        if (name !== "" && email !== "" && subject !== "" && message !== ""){
            console.log(message)
        emailjs.sendForm('gmail', 'template_3bxicld', e.target, `${process.env.REACT_APP_USER_ID}`)
          .then((result) => {
              console.log(result.text)
              toast.success("Enquiries Sent Successfully! Will get back to you as soon as possible", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
        }
        else if (name == ""){
            toast.warn("Name cannot be blank", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else if (email == ""){
            toast.warn("Email cannot be blank", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else if (subject == ""){
            toast.warn("Subject cannot be blank", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else if (message == ""){
            toast.warn("Message cannot be blank", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
    return (
        <Container fluid className="footer bg-light">
            <Row className="footer-row justify-content-center">
                <Col lg={5} xs={12} className="mb-5">
                    <Row>
                        <Col lg={10} sm={8} xs={12}>
                            <p className="footer-title">About Us</p>
                            <p>At AROTYRE, we provide various types of affordable motorcycle tyres for your rider and free engine oil for life</p>  
                        </Col>
                    </Row>
                    
                </Col>
                <Col lg={2} xs={12} className="mb-5">
                    <Row className="form">
                        <Col>
                            <p className="footer-title">Visit Us At</p>
                            <a href="https://www.lazada.com.my"><img src={lazada} style={{width:"50px"}}></img></a>
                        </Col>
                    </Row>
                    
                </Col>
                <Col lg={3} xs={12} className="mb-5">
                    <Row>
                        <Col>
                            <p className="footer-title">Connect With Us</p>
                            <SocialIcon url="https://www.facebook.com" bgColor="transparent" fgColor="black"></SocialIcon>
                            <SocialIcon url="https://www.instagram.com" bgColor="transparent" fgColor="black"></SocialIcon>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col lg={6} xs={12} className="mb-5">
                    <Row className="justify-content-center">
                        <Col lg={8} xs={12}>
                            <p>© AROTYRE</p>
                        </Col>
                        
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer