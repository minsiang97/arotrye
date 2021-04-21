import React from 'react'
import { motion, useViewportScroll, useTransform, motionValue } from "framer-motion"
import {Link} from 'react-router-dom'
import {RiArrowLeftSLine, RiArrowRightSLine} from 'react-icons/ri'
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

const Promotion5 = () => {
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
                variants={pageVariants}
                initial="initial"
                animate="in"
                exit="out"
                transition={pageTransition}
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
                           </Row>
                       </Col>
                       
                   </Row>
               </Container>
               
            </motion.div>
            <Link to="/promotion4"><motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }} style={{position: "absolute", top: "50%", translateY:"-50%", left: 20}} className="left-arrow-black">
                <RiArrowLeftSLine size={30} />
            </motion.div></Link>
            <Link to="/promotion6"><motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }} style={{position: "absolute", top: "50%", translateY:"-50%", right: 20}} className="left-arrow-black">
                <RiArrowRightSLine size={30} />
            </motion.div></Link>
        </motion.div>
    )
}

export default Promotion5