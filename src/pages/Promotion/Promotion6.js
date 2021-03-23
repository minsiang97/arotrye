import React from 'react'
import { motion, useViewportScroll, useTransform, motionValue } from "framer-motion"
import {Link} from 'react-router-dom'
import {RiArrowLeftSLine, RiArrowRightSLine} from 'react-icons/ri'
import { Controls, PlayState, Tween, SplitChars } from 'react-gsap';
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
import stayTuned from '../../images/stayTuned.png'
import rocket from '../../images/rocket.png'
import "./Promotion.css"

const Promotion6 = () => {
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
                style={{ width: "100%", textAlign: "center", alignItems: "center", position:"absolute", top:"50%", translateY: "-50%"}}
                variants={pageVariants}
                initial="initial"
                animate="in"
                exit="out"
                transition={pageTransition}
                className="stay-tuned"
            >
                
                <Tween from={{ y: '-100vh' }} stagger={0.1} delay={1} className="tween">
                    <SplitChars
                    wrapper={<div style={{ display: 'inline-block', fontSize: '40px'}} />}
                    >
                    S 
                    </SplitChars>
                    <SplitChars
                    wrapper={<div style={{ display: 'inline-block', fontSize: '40px', marginLeft: "30px" }} />}
                    >
                    T
                    </SplitChars>
                    <SplitChars
                    wrapper={<div style={{ display: 'inline-block', fontSize: '40px', marginLeft: "30px" }} />}
                    >
                    A
                    </SplitChars>
                    <SplitChars
                    wrapper={<div style={{ display: 'inline-block', fontSize: '40px', marginLeft: "30px" }} />}
                    >
                    Y
                    </SplitChars>
                    <SplitChars
                    wrapper={<div style={{ display: 'inline-block', fontSize: '40px', marginLeft: "60px" }} />}
                    >
                    T
                    </SplitChars>
                    <SplitChars
                    wrapper={<div style={{ display: 'inline-block', fontSize: '40px', marginLeft: "30px" }} />}
                    >
                    U
                    </SplitChars>
                    <SplitChars
                    wrapper={<div style={{ display: 'inline-block', fontSize: '40px', marginLeft: "30px" }} />}
                    >
                    N
                    </SplitChars>
                    <SplitChars
                    wrapper={<div style={{ display: 'inline-block', fontSize: '40px', marginLeft: "30px" }} />}
                    >
                    E
                    </SplitChars>
                    <SplitChars
                    wrapper={<div style={{ display: 'inline-block', fontSize: '40px', marginLeft: "30px" }} />}
                    >
                    D
                    </SplitChars>
                    <SplitChars
                    wrapper={<div style={{ display: 'inline-block', fontSize: '40px', marginLeft: "60px" }} />}
                    >
                    F
                    </SplitChars>
                    <SplitChars
                    wrapper={<div style={{ display: 'inline-block', fontSize: '40px', marginLeft: "30px" }} />}
                    >
                    O
                    </SplitChars>
                    <SplitChars
                    wrapper={<div style={{ display: 'inline-block', fontSize: '40px', marginLeft: "30px" }} />}
                    >
                    R
                    </SplitChars>
                    <SplitChars
                    wrapper={<div style={{ display: 'inline-block', fontSize: '40px', marginLeft: "60px" }} />}
                    >
                    M
                    </SplitChars>
                    <SplitChars
                    wrapper={<div style={{ display: 'inline-block', fontSize: '40px', marginLeft: "30px" }} />}
                    >
                    O
                    </SplitChars>
                    <SplitChars
                    wrapper={<div style={{ display: 'inline-block', fontSize: '40px', marginLeft: "30px" }} />}
                    >
                    R
                    </SplitChars>
                    <SplitChars
                    wrapper={<div style={{ display: 'inline-block', fontSize: '40px', marginLeft: "30px" }} />}
                    >
                    E
                    </SplitChars>
                    <img src={rocket} className="rocket" style={{width:"5%", position:"absolute", top: "-20%", marginLeft:"20px"}}></img>
                </Tween>
            </motion.div>
            <Link to="/promotion5"><motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }} style={{position: "absolute", top: "50%", translateY:"-50%", left: 20}} className="left-arrow">
                <RiArrowLeftSLine size={30} />
            </motion.div></Link>
        </motion.div>
    )
}

export default Promotion6