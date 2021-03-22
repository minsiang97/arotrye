import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import WebNavbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage/Homepage';
import Footer from './components/Footer/Footer';
import {ToastContainer} from 'react-toastify'
import {Switch, Route, useLocation} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import Products from './pages/Products/Products';
import ContactUs from './pages/Contact/Contact'
import Promotion from './pages/Promotion/Promotion';
import Promotion2 from './pages/Promotion/Promotion2'
import {motion, AnimatePresence} from 'framer-motion'
import Promotion3 from './pages/Promotion/Promotion3';

function App() {
  const location = useLocation()
  return (
    <>
    <ToastContainer/>
    <WebNavbar/>
    <AnimatePresence exitBeforeEnter>
    <Switch location={location} key={location.pathname}>
      <Route exact path="/"><Homepage/></Route>
      <Route path="/products"><Products/></Route>
      <Route path='/contact'><ContactUs/></Route>
      <Route path='/promotion'><Promotion/></Route>
      <Route path='/promotion2'><Promotion2/></Route>
      <Route path='/promotion3'><Promotion3/></Route>
    </Switch>
    </AnimatePresence>
    <Footer/>
    </>
  );
}

export default App;
