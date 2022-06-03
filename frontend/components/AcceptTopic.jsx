import React,{Component} from "react";
import {Form} from 'react-bootstrap'
import axios from 'axios'
import swal from 'sweetalert2'


export default class AcceptTopic extends Component{


    constructor(props){
        super(props)
        this.state={
            GroupName:'',
            GroupId:'',
            tel:'',
            TopicCategory:'',
            TopicName:'',
            Status:'',
            Comment:'',
            StatusError:'',
            CommentError:''
        }
    }

    componentDidMount(){
        axios.get('')
        .then(res=>{
            this.setState({
                GroupName:res.data,
                GroupId:res.data,
                tel:res.data,
                TopicCategory:res.data,
                TopicName:res.data,

            })
        }).catch((err)=>{
            console.log(err)
        })
    }

    onChangeComment=(e)=>{
        this.setState=({
            Comment: e.target.value
        })
        console.log(this.state.Comment)
    }

    onChangeStatus=(e)=>{
        this.setState({
            Status: e.target.value
        })
    }

    validate=()=>{
        let CommentError=''
        let StatusError=''

        if(!this.state.Comment){
            CommentError="Please leave a Comment"
        }
        if(!this.state.Status){
            StatusError="Select accept or reject"
        }

        if(CommentError||StatusError){
            this.setState({
                CommentError,
                StatusError
            })
            return false
        }

        return true


    }

    onSubmit=(e)=>{
        e.preventDefault()
        const acceptTopic={
            GroupName:this.state.GroupName,
            GroupId:this.state.GroupId,
            tel:this.state.tel,
            TopicCategory:this.state.TopicCategory,
            TopicName:this.state.TopicName,
            Status:this.state.Status,
            Comment:this.state.Comment,

        }

        console.log(acceptTopic)

        let isValid=this.validate()

        if(isValid){

            if(this.state.Comment === 'accept'){
                axios.post('http://localhost:3000/acceptTopic/accept',acceptTopic)
                .then(()=>{
                    this.setState({
                        GroupName:'',
                        GroupId:'',
                        tel:'',
                        TopicCategory:'',
                        TopicName:'',
                        Status:'',
                        Comment:'',

                    })
                    swal.fire("Inserted","Student response recorded","success")
                    window.location='/'
                }).catch((err)=>{
                    alert(err)
                })

            }else if(this.state.Comment === 'reject'){
                axios.post('http://localhost:3000/acceptTopic/reject',acceptTopic)
                .then(()=>{
                    this.setState({
                        GroupName:'',
                        GroupId:'',
                        tel:'',
                        TopicCategory:'',
                        TopicName:'',
                        Status:'',
                        Comment:'',

                    })
                    swal.fire("Inserted","Student response recorded","success")
                    window.location='/'
                }).catch((err)=>{
                    alert(err)
                })

            }

        }

    }



    render(){
        return(
            <div className="m-5" style={{backgroundColor:"rgb(200,200,200,0.5)", padding:"20px 50px 20px 50px", marginTop:"50px",marginBottom:"50px", borderRadius:"30px"}}>
                <h3><b>{this.state.GroupName}</b></h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label for="grpName" className="form-label">Group Name</label>
                        <input type="text" className="form-control" id="grpName"
                        value={this.state.GroupName}
                        disabled
                        />
                    </div>
                    <div className="form-group">
                        <label for="grpId" className="form-label">Group Id</label>
                        <input type="text" className="form-control" id="grpId"
                        value={this.state.GroupId}
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
                        <label for="TopicCategory" className="form-label">Topic Category</label>
                        <input type="text" className="form-control" id="TopicCategory"
                        value={this.state.TopicCategory}
                        disabled
                        />
                    </div>
                    <div className="form-group">
                        <label for="TopicName" className="form-label">Topic Name</label>
                        <input type="text" className="form-control" id="TopicName"
                        value={this.state.TopicName}
                        disabled
                        />
                    </div>
                    <div className="form-group">
                        <label for="TopicCategory" className="form-label">Comment</label>
                        <textarea className="form-control" rows="3" value={this.state.Comment} onChange={this.onChangeComment}></textarea>
                        <div style={{color:"red"}}>
                            {this.state.CommentError}
                        </div>
                    </div>
                    <div className="form-check" onChange={this.onChangeStatus}>
                        <input type="radio" className="form-check-input" id="flexRadioDefault1" name="topic" value="accept"/> 
                        <label class="form-check-label" for="flexRadioDefault1">
                            Accept    
                        </label>
                        <input type="radio" className="form-check-input" name="topic" value="reject"/>
                        <label class="form-check-label" for="flexRadioDefault1">
                            Reject 
                        </label> 
                        <div style={{color:"red"}}>
                            {this.state.StatusError}
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



