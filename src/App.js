import './App.css';
import Sexybar from './components/Navbar'
import Textform from './components/TextForm'
import React, { useState } from 'react'
import Alert from './components/Alert';

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
      <Sexybar title='Text Utils' modes={mode} modefunc={tooglehandle} />
      <Alert alerts={alert} />
      <div className='container'>
        <Textform title='Capitalize Text' setAlerts={showAlert} modes={mode} />
      </div>
      <br />
      {/* <div className='container'>
        <MultipleOption title='Select Wpm'/>
      </div> */}
      {/* <div className='container'>
        <AboutUs />
      </div> */}
    </>
  );
}

export default App;
