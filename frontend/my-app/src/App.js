import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import NavBar from './components/navbar/navBar'
import Product from './components/product/product';
import Suggestions from './components/suggestions/Suggestions';
import Information from './components/Information/Information';
import Emaillist from './components/emaillist/Emaillist';
import Footer from './components/footer/Footer';
const App = () => {
  return(
    <Fragment>
      <div className='main'>
          <NavBar />
          <Product />    
          <Suggestions />
          <Information />
          <Emaillist />
          <Footer />
      </div>
    </Fragment>
  )
}

export default App;
