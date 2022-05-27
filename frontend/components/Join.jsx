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
            <div>
                <div>
                    <h1>Join</h1>
                    <div>
                        <input placeholder='IT Number' type="text" onChange={this.onChangeItNumner}></input>
                    </div>
                    <div>
                        <input placeholder='Room Id' type="text" onChange={this.onChangeRoomId}></input>
                    </div>
                    <Link onClick={this.validate} to={`/chat?itNumber=${this.state.itNumber}&roomId=${this.state.roomId}`}>
                        <button type='submit' value="Sign In">Sign In</button>
                    </Link>
                </div>



            </div>
        )
    }






}




