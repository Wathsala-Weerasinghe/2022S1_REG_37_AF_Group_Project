import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Layout from "./components/Layout";
import AllTReg from "./components/AllRgister";


 function App() {
  return (
        <div>
          <Router>
            <Layout />
          <Routes>
            <Route extact path="/Login" element={<Login />} />
            <Route  path="/Register" element={<Register />} />
            <Route  path="/AllTReg" element={<AllTReg />} />

            </Routes>
            </Router>
        </div>
    
  );
}

export default App;
