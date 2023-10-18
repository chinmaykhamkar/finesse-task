import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import NavBar from './components/navbar/navBar'
const App = () => {
  return(
    <Fragment>
      <div className='main'>
        <NavBar />
      </div>
    </Fragment>
  )
}

export default App;
