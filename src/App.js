import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import WrittingFrom from './components/WrittingFrom';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import About from './components/About';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light')

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }


  const toggleMode = () =>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled", "success");
    }
    
  }
  return (
    <>
    <BrowserRouter>
    <Navbar title="Textwriter" about="About Us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-4">
    <Routes>
      <Route exact path ="/" element={<WrittingFrom showAlert={showAlert} heading="Writting Pad" mode={mode}/>}/>
      <Route exact path="/about" element={<About mode={mode}/>}/>
    </Routes>
    </div>
    </BrowserRouter>
    </> 
  );
}

export default App;
