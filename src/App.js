import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import WebNavbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage/Homepage';
import Footer from './components/Footer/Footer';
import {ToastContainer} from 'react-toastify'
import {Switch, Route} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import Products from './pages/Products/Products';
import ContactUs from './pages/Contact/Contact'
import Promotion from './pages/Promotion/Promotion';

function App() {
  return (
    <>
    <ToastContainer/>
    <WebNavbar/>
    <Switch>
      <Route exact path="/"><Homepage/></Route>
      <Route path="/products"><Products/></Route>
      <Route path='/contact'><ContactUs/></Route>
      <Route path='/promotion'><Promotion/></Route>
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
