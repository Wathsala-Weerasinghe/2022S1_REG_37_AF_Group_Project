import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";

import User from "./components/User";
import UpdateUser from "./components/admin/UpdateUser";
import DeleteUser from "./components/admin/DeleteUser";
import ViewEvaluation from "./components/panel-member/ViewEvaluation";
import PMEvaluation from "./components/panel-member/Evaluation";
import SongForm from "./components/admin/pdfFromat";
import Topic from "./components/Topic";
import AllTReg from "./components/AllLogTopics";

import "./App.css";

function App() {
  return (
    <div className='App container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='register/:type' element={<Register />} />
            <Route path='login' element={<Login />} />

            <Route path='users' element={<User />} />
            <Route path='update-user/:id' element={<UpdateUser />} />
            <Route path='delete-user/:id' element={<DeleteUser />} />

            <Route path='pm-evaluations' element={<ViewEvaluation />} />
            <Route path='pm-evaluation/:id' element={<PMEvaluation />} />
            <Route path='student' element={<SongForm />} />
            <Route path='/topic/:id' element={<Topic />} />
            <Route path='/AllTReg' element={<AllTReg />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
