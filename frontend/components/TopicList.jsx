import React,{Component} from "react";
import axios from 'axios'

const TopicDetails = props =>(
    <tr>
        <td>{props.topics.TopicName}</td>
        <td>{props.topics.GroupId}</td>
        <td>{props.topics.Status}</td>


        {/*<td >
        <Link to ={"/updateTuitionFee/"+props.feeDetails._id}>Edit details</Link> | <a href="#" onClick={() => { props.DeleteTuitionFee(props.feeDetails._id)}}>Delete</a></td>
        */}
        <td>
            <a className="btn btn-warning" href={`/accTopic/${props.topics._id}`}>
                <i className="fas fa-edit"></i>&nbsp;Edit
            </a>
            &nbsp;
        </td>
    </tr>
)


export default class TopicList extends Component{

    constructor(props) {
        super(props);
        this.state={topics:[]}
    }

    componentDidMount() {
        axios.get('http://localhost:3000/acceptTopic/')
            .then((res)=>{
                this.setState({
                    topics:res.data
                })

            }).catch((err)=>{
                console.log(err)
        })
    }

    CurrentTuitionFeeTable(){
        return this.state.topics.map(currentexercise => {

            return <TopicDetails topics={currentexercise} DeleteTuitionFee={this.DeleteTuitionFee} key={TopicDetails._id}/>

        })

    }


    render() {
        return(
            <div>
                <table  className="table" className="table table-hover" style={{backgroundColor:"rgb(200,200,200,0.6)",borderRadius:"20px 20px 0px 0px", marginTop:"30px"}}>
                    <thead className="thead-light">
                    <tr>
                        <th>Name</th>
                        <th>Group</th>
                        <th>State</th>

                    </tr>
                    </thead>
                    <tbody>
                    {this.CurrentTuitionFeeTable()  }
                    </tbody>
                </table>
            </div>
        )
    }


}


