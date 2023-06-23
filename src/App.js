
 import './App.css';     
import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
  
function App() {
    
  return (
      <div className="application">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/about" element={<About/>}/>
      </Routes>
      </BrowserRouter>
      </div>
  );
}
  
export default App;