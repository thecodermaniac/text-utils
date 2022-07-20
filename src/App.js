import './App.css';
import Sexybar from './components/Navbar'
import Textform from './components/TextForm'
import React, { useState } from 'react'
import Alert from './components/Alert';
import AboutUs from './components/AboutUs'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


// import MultipleOption from "./components/MultipleOption";

function App() {
  const [mode, setmode] = useState('light')

  const [alert, setalert] = useState(null)

  function showAlert(types, mssg) {
    setalert({
      msg: mssg,
      type: types
    })
  }
  function tooglehandle() {
    if (mode === 'light') {
      setmode('black')
      document.body.style.backgroundColor = '#373c40'
      document.body.style.color = 'white'
      showAlert('success', 'Dark mode onn')
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert('success', 'Light mode onn')
    }
  }
  return (
    <>
      <Router>
        <Sexybar title='Text Utils' modes={mode} modefunc={tooglehandle} />
        <Alert alerts={alert} />

        <Switch>
          <Route path="/about">
            <div className='container'>
              <AboutUs />
            </div>
          </Route>
          <Route path="/">
            <div className='container'>
              <Textform title='Capitalize Text' setAlerts={showAlert} modes={mode} />
            </div>
          </Route>
        </Switch>
      </Router>
      <br />
      {/* <div className='container'>
        <MultipleOption title='Select Wpm'/>
      </div> */}

    </>
  );
}

export default App;
