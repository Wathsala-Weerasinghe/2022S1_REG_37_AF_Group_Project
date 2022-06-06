import React,{Component} from "react";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Chat from './components/Chat'
import Join from './components/Join'
import AcceptTopic from './components/AcceptTopic'
import EvaluateDocument from "./components/EvaluateDocument";
import Home from "./components/Home"
export default class App extends Component{

    constructor(props){
        super(props)

    }


    render(){
        return(
            <Router>
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                </Routes>
                <Routes>
                    <Route path="/chatJoin" exact element={<Join/>}/>
                </Routes>
                <Routes>
                    <Route path="/chat" exact element={<Chat/>}/>
                </Routes>
                <Routes>
                    <Route path="/accTopic" exact element={<AcceptTopic/>}/>
                </Routes>
                <Routes>
                    <Route path="/evalDoc" exact element={<EvaluateDocument/>}/>
                </Routes>
            </Router>
        )
    }




}