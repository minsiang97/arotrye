import React from 'react'
import { motion, useViewportScroll, useTransform, motionValue } from "framer-motion"
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import poster from '../../images/poster2.jpg'
import product from '../../images/promotion.png'
import engine from '../../images/engineoil.png'
import points from '../../images/points.PNG'
import {FaEquals} from 'react-icons/fa'
import crowd from '../../images/crowd.png'
import oil from '../../images/oil.png'
import "./Promotion.css"

const Promotion = () => {
    const scrollYProgress = motionValue(0)
    const { scrollY } = useViewportScroll()
    const scale = useTransform(scrollY, [0, 1], [0.2, 2])
    const [show, setShow] = React.useState(false)
    const [showPromotion1, setShowPromotion] = React.useState(false)
    const [hidden, setHidden] = React.useState(false);
    const [hiddenPromotion, setHiddenPromotion] = React.useState(false)
    const [hiddenPromotion1, setHiddenPromotion1] = React.useState(false)
    console.log(scrollY?.current)
  /** this onUpdate function will be called in the `scrollY.onChange` callback **/
//   function update() {
//     if (scrollY?.current < scrollY?.prev) {
//       setHidden(false)
//       setHiddenPromotion(false)
//       setHiddenPromotion1(false);
//     } else if (scrollY?.current > 100  && scrollY?.current > scrollY?.prev) {
//       setHidden(true);
//     } 
    
//     if (scrollY?.current > 1000 && scrollY?.current > scrollY?.prev) {
//       setHiddenPromotion(true)
//       setHidden(true);
//     }

//     if (scrollY?.current > 1900 && scrollY?.current > scrollY?.prev) {
//         setHiddenPromotion(true)
//         setHiddenPromotion1(true)
//         setHidden(true);
//       }
//   }

//   /** update the onChange callback to call for `update()` **/
//   React.useEffect(() => {
//     return scrollY.onChange(() => update());
//   });

//   const showPromotion = () => {
//       if (window.scrollY > 600) {
//           setShow(true)
//       } else if (window.scrollY > 1500){
//           setShowPromotion(true)
//       } else {
//           setShow(false)
//           setShowPromotion(false)
//       }
//   }

//   window.addEventListener('scroll', showPromotion)
//   /** add this const **/
//   const variants = {
//     /** this is the "visible" key and it's correlating styles **/
//     visible: { y: 0 },
//     /** this is the "hidden" key and it's correlating styles **/
//     hidden: { opacity: 0, y: -50 },

//     hiddenPromotion: {opacity: 0},

//     visiblePromotion: {opacity: 1},

//     hiddenPromotion1: {opacity: 0},

//     visiblePromotion1: {opacity: 1}
//   };
const pageVariants= {
    initial: {
        opacity: 0,
        x: "100vw",
        scale: 0.8
    },
    in: {
        opacity: 1,
        x:0,
        scale: 1.0
    },
    out: {
        opacity: 0,
        x: "-100vw",
        scale: 1.2
    }
}

const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 1
}
    return (
        <motion.div
            style={{height: "90vh", position: "relative"}}
            className="promotion-div"
        >
            <motion.div 
                style={{ width: "100%", textAlign: "center", alignItems: "center", position: "absolute", top: "50%", translateY:"-50%"}}
                variant={pageVariants}
                initial={{opacity: 0, x: "100vw", scale: 0.8}}
                animate={{opacity: 1, x: 0, scale: 1.0}}
                exit={{opacity: 0, x: "-100vw", scale: 1.2}}
                transition={pageTransition}
            >
               <p style={{fontSize: '300%'}}>You Must Be Wondering How We Can Do This ?</p>
               <Link to="/promotion2"><button className="btn btn-primary">Click here</button></Link>

            </motion.div>
            {/* {show?
            <motion.div 
                style={{ width: "100%", textAlign: "center", alignItems: "center", marginTop: "600px"}}
                variants={variants}
                initial={{opacity: 0}}
                animate={hiddenPromotion ? "hiddenPromotion" : "visiblePromotion"}
                transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 2 }}
            >
               <p style={{fontSize: '300%'}}>HOW TO GET FREE 4T ENGINE OIL FOR LIFE?</p>
               <p style={{fontSize: '300%', width: "50%", margin: 'auto'}}>THROUGH OUR</p>
               <p style={{fontSize: '300%', width: "50%", margin: 'auto', color: 'red'}}>FREE FOR LIFE PROMOTION PACKAGE</p>
               
            </motion.div>
            : <div style={{height: '500px'}}></div>
            }
            {showPromotion1? 
            <motion.div 
                style={{ width: "100%", textAlign: "center", alignItems: "center", marginTop: "600px"}}
                variants={variants}
                initial={{opacity: 0}}
                animate={hiddenPromotion1 ? "hiddenPromotion1" : "visiblePromotion1"}
                transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 3 }}
            >
               <Container fluid>
                   <Row className="justify-content-center">
                       <Col md={6} className="text-center">
                           <Row className="text-center">
                                <p style={{fontSize: "250%"}} className="m-auto">FIRST, GRAB A SET OF TYRE FROM US</p>
                                <img src={product} className="w-100 promotion m-auto"></img>
                           </Row>
                       </Col>
                       <Col md={6} className="text-center">
                           <Row className="text-center">
                                <p style={{fontSize: "250%"}} className="m-auto">AND GET 2 FREE 4T ENGINE OIL</p>
                                <img src={engine} className="w-75 promotion m-auto"></img>
                           </Row>
                       </Col>
                   </Row>
               </Container>
               
            </motion.div>
            : <div style={{height: '500px'}}></div> }
            <motion.div 
                style={{ width: "100%", textAlign: "center", alignItems: "center", marginTop: "600px"}}
                variants={variants}
                initial={{opacity: 1}}
                transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 3 }}
            >
               <Container fluid>
                   <Row className="justify-content-center">
                       <Col md={8} className="text-center">
                           <Row className="text-center">
                                <p style={{fontSize: "250%"}} className="m-auto">NEXT, INTRODUCE 4 MEMBERS TO GET A TOTAL OF 8000 POINTS TO EXCHANGE FOR (4) 4T ENGINE OIL</p>
                                <img src={points} className="w-75 promotion m-auto"></img>
                           </Row>
                       </Col>
                       
                   </Row>
               </Container>
               
            </motion.div>
            <motion.div 
                style={{ width: "100%", textAlign: "center", alignItems: "center", marginTop: "600px"}}
                variants={variants}
                initial={{opacity: 1}}
                transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 3 }}
            >
               <Container fluid>
                   <Row className="justify-content-center">
                       <Col md={9} className="text-center">
                           <Row className="text-center">
                                <p style={{fontSize: "250%"}} className="m-auto">THE MORE YOU INTRODUCE, THE MORE POINT YOU CAN GET TO EXCHANGE FOR ENGINE OIL !</p>
                                <br></br>
                                <Row className="w-100 mt-4 mb-4">
                                    <Col className="text-center">
                                        <img src={crowd} className="oil"></img>
                                        <FaEquals className="ml-5" size={50}/>
                                        <img src={oil} className="oil"></img>
                                    </Col>
                                    
                                </Row>
                                
                                <p style={{fontSize: "250%"}} className="m-auto">THE POINTS IS ELIGIBLE TO EXCHANGE OTHER PRODUCTS TOO. </p>
                                <p style={{fontSize: "250%"}} className="m-auto">STAY TUNED FOR MORE!</p>
                           </Row>
                       </Col>
                       
                   </Row>
               </Container>
               
            </motion.div>
            <motion.div 
                style={{ width: "100%", textAlign: "center", alignItems: "center", marginTop: "600px"}}
                className="stay-tuned"
            >             
            </motion.div> */}
        </motion.div>
    )
}

export default Promotion