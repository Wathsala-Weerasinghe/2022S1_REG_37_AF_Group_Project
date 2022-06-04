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
                GroupName:res.data.GroupName,
                GroupId:res.data.GroupId,
                tel:res.data.phone,
                TopicCategory:res.data.TopicCategory,
                TopicName:res.data.TopicName,

            })
        }).catch((err)=>{
            console.log(err)
        })
    }

    onChangeComment=(e)=> {
        const {name,value}=e.target
        console.log(name)
        console.log(value)
        this.setState({
            [name]:value
        })

    }
        


    onChangeStatus=(e)=>{
        console.log(e.target.value)
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

            console.log(this.state.Status)

            if(this.state.Status === 'accept'){
                axios.post('http://localhost:3000/acceptTopic/accept', acceptTopic)
                    .then(res=> console.log(res.data))
                swal.fire("Inserted","Student response recorded","success").then(()=>window.location='/evalDoc')

            }else if(this.state.Status === 'reject'){
                axios.post('http://localhost:3000/acceptTopic/reject',acceptTopic)
                    .then(res=> console.log(res.data))
                swal.fire("Inserted", "Student response recorded", "success").then(()=>window.location='evalDoc')

                }


        }

    }



    render(){
        return(
            <div className="m-5" style={{backgroundColor:"rgb(200,200,200,0.5)", padding:"20px 50px 20px 50px", marginTop:"50px",marginBottom:"50px", borderRadius:"30px"}}>
                <h3><b>{this.state.GroupName}</b></h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="grpName" className="form-label">Group Name</label>
                        <input type="text" className="form-control" id="grpName"
                        value={this.state.GroupName}
                        disabled
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="grpId" className="form-label">Group Id</label>
                        <input type="text" className="form-control" id="grpId"
                        value={this.state.GroupId}
                        disabled
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tel" className="form-label">Contact number</label>
                        <input type="text" className="form-control" id="tel"
                        value={this.state.tel}
                        disabled
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="TopicCategory" className="form-label">Topic Category</label>
                        <input type="text" className="form-control" id="TopicCategory"
                        value={this.state.TopicCategory}
                        disabled
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="TopicName" className="form-label">Topic Name</label>
                        <input type="text" className="form-control" id="TopicName"
                        value={this.state.TopicName}
                        disabled
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="TopicCategory" className="form-label">Comment</label>
                        <textarea className="form-control" rows="3" name="Comment" value={this.state.Comment} onChange={e=>this.onChangeComment(e)}></textarea>
                        <div style={{color:"red"}}>
                            {this.state.CommentError}
                        </div>
                    </div>
                    <div >
                        {/*<input type="radio" className="form-check-input" id="flexRadioDefault1" name="topic" value="accept"/>
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Accept    
                        </label>
                        <input type="radio" className="form-check-input" name="topic" value="reject"/><br/>
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Reject 
                        </label> 
                        <div style={{color:"red"}}>
                            {this.state.StatusError}
                        </div>*/}
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="topic" id="inlineRadio1"
                                   value="accept"
                                   onChange={this.onChangeStatus}
                                   checked={this.state.Status==="accept"}
                            />
                                <label className="form-check-label" htmlFor="inlineRadio1">Accept</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="topic" id="inlineRadio2"
                                   value="reject"
                                   onChange={this.onChangeStatus}
                                   checked={this.state.Status==="reject"}
                            />
                                <label className="form-check-label" htmlFor="inlineRadio2">Reject</label>
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



