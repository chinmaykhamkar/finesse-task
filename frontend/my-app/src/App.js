import logo from './logo.svg';
import './App.css';
import { Fragment, useState } from 'react';
import NavBar from './components/navbar/navBar'
import Product from './components/product/product';
import Suggestions from './components/suggestions/Suggestions';
import Information from './components/Information/Information';
import Emaillist from './components/emaillist/Emaillist';
import Footer from './components/footer/Footer';
const App = () => {
  const [themeval, setThemeval] = useState(true);
  const handleDataFromNav = (data) => {
    setThemeval(data);
  }

  return(
    <Fragment>
      <div className={`main ${themeval?'':'theme2'}`}>
          <NavBar toggleTheme={handleDataFromNav}/>
          <Product theme={themeval}/>    
          <Suggestions theme={themeval}/>
          <Information theme={themeval}/>
          <Emaillist theme={themeval}/>
          <Footer theme={themeval}/>
      </div>
    </Fragment>
  )
}

export default App;
