import React from 'react'
import { motion, useViewportScroll } from "framer-motion"
import "./Promotion.css"

const Promotion = () => {
    const { scrollY } = useViewportScroll()
    const [show, setShow] = React.useState(false)
    const [hidden, setHidden] = React.useState(false);
    const [hiddenPromotion, setHiddenPromotion] = React.useState(false)
    console.log(scrollY?.current)
  /** this onUpdate function will be called in the `scrollY.onChange` callback **/
  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false)
      setHiddenPromotion(false);
    } else if (scrollY?.current > 100  && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    } 
    
    if (scrollY?.current > 800 && scrollY?.current > scrollY?.prev) {
      setHiddenPromotion(true)
      setHidden(true);
    }
  }

  /** update the onChange callback to call for `update()` **/
  React.useEffect(() => {
    return scrollY.onChange(() => update());
  });

  const showPromotion = () => {
      if (window.scrollY > 500) {
          setShow(true)
      } else {
          setShow(false)
      }
  }

  window.addEventListener('scroll', showPromotion)
  /** add this const **/
  const variants = {
    /** this is the "visible" key and it's correlating styles **/
    visible: { opacity: 1, y: 0 },
    /** this is the "hidden" key and it's correlating styles **/
    hidden: { opacity: 0, y: -25 }
  };
    return (
        <motion.div
            style={{height: "5000px", paddingTop: "20%"}}
            className="promotion-div"
        >
            <motion.div 
                style={{ width: "100%", textAlign: "center", alignItems: "center"}}
                variants={variants}
                initial={{opacity: 0, y:-200}}
                animate={hidden ? "hidden" : "visible"}
                transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 2 }}
            >
               <p style={{fontSize: '300%'}}>You Must Be Wondering How We Can Do This ?</p>
               <p style={{fontSize: '150%'}}>Scroll down for more information</p> 

            </motion.div>
            {show ?
            <motion.div 
                style={{ width: "100%", textAlign: "center", alignItems: "center", marginTop: "600px"}}
                variants={variants}
                initial={{opacity: 0, y:200}}
                animate={hiddenPromotion ? "hidden" : "visible"}
                transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 2 }}
            >
               <p style={{fontSize: '300%'}}>FREE ENGINE OIL FOR LIFE PROMOTION</p>

            </motion.div>
            : null
            }
        </motion.div>
    )
}

export default Promotion