import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {FaWhatsapp} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import emailjs from 'emailjs-com';
import {toast} from 'react-toastify'
import qr from '../../images/qr.png'
import './Contact.css'

const ContactUs = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const sendEmail = (e) => {
        e.preventDefault();
        
        if (name !== "" && email !== "" && subject !== "" && message !== ""){
        emailjs.sendForm('gmail', 'template_3bxicld', e.target, `${process.env.REACT_APP_USER_ID}`)
          .then((result) => {
              console.log(result.text)
              toast.success("Enquiries Sent Successfully! Will get back to you as soon as possible", {
                position: toast.POSITION.TOP_CENTER,
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
          setMessage("")
          setName("")
          setSubject("")
          setEmail("")
        }
        else if (name == ""){
            toast.warn("Name cannot be blank", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else if (email == ""){
            toast.warn("Email cannot be blank", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else if (subject == ""){
            toast.warn("Subject cannot be blank", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else if (message == ""){
            toast.warn("Message cannot be blank", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
    console.log(name)
    console.log(email)
    console.log(message)
    console.log(subject)
    return (
        <Container className="contact-container">
            <h1 className="text-center">Contact Us</h1>
            <Row className="justify-content-center mt-5">
                <Col md={8} sm={11} xs={12}>
                    <p className="company-name">AROTRYE SDN BHD</p>
                    <Row>
                        <Col>
                            <a href="https://wa.link/fd3laz" target="blank"><FaWhatsapp size={30}></FaWhatsapp></a>
                            <span className="ml-3 phone-number">+6016-5283678</span>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col>
                            <a href="mailto:aroindustrial@gmail.com"><HiOutlineMail size={30} fill="white"></HiOutlineMail></a>
                            <span className="ml-3">aroindustrial@gmail.com</span>
                        </Col>
                    </Row>
                    
                    <form className="mt-5" onSubmit={sendEmail}>
                        <Row>
                            <Col sm={6} xs={12}>
                                <input type="text" name="name" placeholder="Your Name" className="w-100" onChange={(e) => setName(e.target.value)}/>
                            </Col>
                            <Col sm={6} xs={12} className="email">
                                <input type="email" name="email" placeholder="Your Email" className="w-100" onChange={(e) => setEmail(e.target.value)}/>
                            </Col>
                        </Row>
                        <input type="text" name="subject" placeholder="Subject" className="w-100" onChange={(e) => setSubject(e.target.value)} />
                        <textarea name="message" placeholder="Your Message" className="w-100" onChange={(e) => setMessage(e.target.value)}/>
                        <button type="submit" className="btn btn-dark w-100 contact-button">Send</button>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}

export default ContactUs