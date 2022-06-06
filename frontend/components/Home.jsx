import React,{Component} from "react";
import {Link} from "react-router-dom";

export default class Home extends Component{
    constructor(props) {
        super(props);
    }






    render() {
        return(
            <>
                <center>
                    <div className="container d-flex justify-content-evenly mt-5">

                        <div>
                            <Link to="/chatJoin" className="btn btn-primary">Chat</Link>

                        </div>
                        <div>
                            <Link to="/accTopic" className="btn btn-primary">Accept Topic</Link>
                        </div>
                        <div>
                            <Link to="/evalDoc" className="btn btn-primary">Evaluate Document</Link>
                        </div>

                    </div>
                </center>
            </>

        )
    }


}