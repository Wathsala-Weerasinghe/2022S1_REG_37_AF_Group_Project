import React,{Component} from "react";
import {Form} from 'react-bootstrap'
import axios from 'axios'
import swal from 'sweetalert2'


export default class AcceptTopic extends Component{


    constructor(props){
        super(props)
        this.state={
            groupName:'',
            groupId:'',
            tel:'',
            topicCategory:'',
            topicName:'',
            status:'',
            comment:'',
            statusError:'',
            commentError:''
        }
    }

    onChangeComment=(e)=>{
        this.setState=({
            comment: e.target.value
        })
        console.log(this.state.comment)
    }

    onChangeStatus=(e)=>{
        this.setState({
            status: e.target.value
        })
    }

    validate=()=>{
        let commentError=''
        let statusError=''

        if(!this.state.comment){
            commentError="Please leave a comment"
        }
        if(!this.state.status){
            statusError="Select accept or reject"
        }

        if(commentError||statusError){
            this.setState({
                commentError,
                statusError
            })
            return true
        }


    }

    onSubmit=(e)=>{
        e.preventDefault()
        const acceptTopic={
            groupName:this.state.groupName,
            groupId:this.state.groupId,
            tel:this.state.tel,
            topicCategory:this.state.topicCategory,
            topicName:this.state.topicName,
            status:this.state.status,
            comment:this.state.comment,

        }

        console.log(acceptTopic)

        let isValid=this.validate()

        if(isValid){
            axios.post('http://localhost:3000/acceptTopic/accept',acceptTopic)
            swal.fire("Inserted","Student response recorded","success")
            .then(()=>{
                this.setState({
                    groupName:'',
                    groupId:'',
                    tel:'',
                    topicCategory:'',
                    topicName:'',
                    status:'',
                    comment:'',

                })
                window.location-'/'
            }).catch((err)=>{
                alert(err)
            })

        }

    }



    render(){
        return(
            <div className="m-5" style={{backgroundColor:"rgb(200,200,200,0.5)", padding:"20px 50px 20px 50px", marginTop:"50px",marginBottom:"50px", borderRadius:"30px"}}>
                <h3><b>{this.state.groupName}</b></h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label for="grpName" className="form-label">Group Name</label>
                        <input type="text" className="form-control" id="grpName"
                        value={this.state.groupName}
                        disabled
                        />
                    </div>
                    <div className="form-group">
                        <label for="grpId" className="form-label">Group Id</label>
                        <input type="text" className="form-control" id="grpId"
                        value={this.state.groupId}
                        disabled
                        />
                    </div>
                    <div className="form-group">
                        <label for="tel" className="form-label">Contact number</label>
                        <input type="text" className="form-control" id="tel"
                        value={this.state.tel}
                        disabled
                        />
                    </div>
                    <div className="form-group">
                        <label for="topicCategory" className="form-label">Topic Category</label>
                        <input type="text" className="form-control" id="topicCategory"
                        value={this.state.topicCategory}
                        disabled
                        />
                    </div>
                    <div className="form-group">
                        <label for="topicName" className="form-label">Topic Name</label>
                        <input type="text" className="form-control" id="topicName"
                        value={this.state.topicName}
                        disabled
                        />
                    </div>
                    <div className="form-group">
                        <label for="topicCategory" className="form-label">Comment</label>
                        <textarea className="form-control" rows="3" value={this.state.comment} onChange={this.onChangeComment}></textarea>
                        <div style={{color:"red"}}>
                            {this.state.commentError}
                        </div>
                    </div>
                    <div className="form-check" onChange={this.onChangeStatus}>
                        <input type="radio" className="form-check-input" id="flexRadioDefault1" name="topic" value="accept"/> 
                        <label class="form-check-label" for="flexRadioDefault1">
                            Accept    
                        </label>
                        <input type="radio" name="topic" value="reject"/>
                        <label class="form-check-label" for="flexRadioDefault1">
                            Reject 
                        </label> 
                        <div style={{color:"red"}}>
                            {this.state.statusError}
                        </div>
                    </div>
                    <div className="form-group" align="center">
                        <input type="submit" value="Submit" className="btn btn-primary"></input>
                    </div>

                </form>

            </div>
        )
    }



}



