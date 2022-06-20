import './App.css';
import Sexybar from './components/Navbar'
import Textform from './components/TextForm'
// import MultipleOption from "./components/MultipleOption";

function App() {
  return (
    <>
      <Sexybar title='Text Utils' />
      <div className='container'>
        <Textform title='Capitalize Text' />
      </div>
      <br />
      {/* <div className='container'>
        <MultipleOption title='Select Wpm'/>
      </div> */}
    </>
  );
}

export default App;
