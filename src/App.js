import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textfrom from './components/Textfrom';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  const backgroundColor = mode === 'dark' ? 'gray' : 'white';

  // Dummy showAlert function
  const showAlert = (message, type) => {
    console.log(`${type}: ${message}`);
  };

  return (
    <>
      <Router>
        <div className="App" style={{ backgroundColor }}>
          <Navbar mode={mode} toggleMode={toggleMode} title="TextUtils" />
          <Alert />
          <div className="container my-3">
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/" element={<Textfrom showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
