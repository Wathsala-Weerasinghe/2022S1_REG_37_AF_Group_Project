import React,{Component} from "react";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Chat from './components/Chat'
import Join from './components/Join'

export default class App extends Component{

    constructor(props){
        super(props)

    }


    render(){
        return(
            <Router>
                <Routes>
                    <Route path="/" exact element={<Join/>}/>
                </Routes>
                <Routes>
                    <Route path="/chat" exact element={<Chat/>}/>
                </Routes>
            </Router>
        )
    }




}