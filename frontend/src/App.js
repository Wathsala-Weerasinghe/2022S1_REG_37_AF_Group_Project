import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Register from './components/Register';
import Login from './components/Login';
import './App.css';


function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>

            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
