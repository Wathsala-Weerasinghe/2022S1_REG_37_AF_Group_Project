import React,{Component} from 'react'
import {Link} from 'react-router-dom'

export default class Join extends Component{
    constructor(props){
        super(props)
        this.state={
            itNumber:'',
            roomId:''

        }

    }

    onChangeItNumner=(e)=>{
        this.setState({
            itNumber:e.target.value
        })
        
    }

    onChangeRoomId=(e)=>{
        this.setState({
            roomId:e.target.value
        })
    }

    validate=e=>(!this.state.itNumber||!this.state.roomId)?e.preventDefault():null

    render(){
        return(
            <div className="m-5" style={{backgroundColor:"rgb(200,200,200,0.5)", padding:"20px 50px 20px 50px", marginTop:"50px",marginBottom:"50px", borderRadius:"30px"}}>
                <div>
                    <h1>Join</h1>
                    <div className="mb-3">
                        <input placeholder='IT Number' className="form-control" type="text" onChange={this.onChangeItNumner}></input>
                    </div>
                    <div>
                        <input placeholder='Room Id' className="form-control" type="text" onChange={this.onChangeRoomId}></input>
                    </div>
                    <Link onClick={this.validate} to={`/chat?itNumber=${this.state.itNumber}&roomId=${this.state.roomId}`}>
                        <button type='submit' value="Sign In">Sign In</button>
                    </Link>
                </div>



            </div>
        )
    }






}




