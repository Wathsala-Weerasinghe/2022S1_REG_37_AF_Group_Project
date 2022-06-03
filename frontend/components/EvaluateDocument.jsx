import React,{Component} from 'react'
import axios from 'axios'
import swal from 'sweetalert2'

export default class EvaluateDocument extends Component{

    constructor(props){
        super(props)

        this.state={
            GroupId:'',
            documentName:'',
            grade:'',
            GroupIdError:'',
            documentNameError:'',
            gradeError:''
        }

    }

    onChangeGroupId=(e)=>{
        this.setState({
            GroupId:e.target.value
        })
    }

    onChangeDocumentName=(e)=>{
        this.setState({
            documentName: e.target.value
        })
    }

    onChangeGrade=(e)=>{
        this.setState({
            grade: e.target.value
        })
    }

    validate=()=>{

        let GroupIdError='';
        let documentNameError='';
        let gradeError='';

        if(!this.state.GroupId){
            GroupIdError="Group ID cannot be empty"
        }
        if(!this.state.documentName){
            documentNameError="State which document"
        }
        if(!this.state.grade){
            gradeError="Insert student grade"
        }

        if(GroupIdError|| documentNameError|| gradeError){
            this.setState({
                GroupIdError,
                documentNameError,
                gradeError
            })
            return false
        }

        return true




    }



    onSubmit=(e)=>{
        e.preventDefault()

        const evalDoc={
            GroupId:this.state.GroupId,
            documentName:this.state.documentName,
            grade:this.state.grade

        }

        const isValid=this.validate()

        if(isValid){
            axios.post('http://localhost:3000/evaluateDoc/submitEvaluated',evalDoc)
            .then(()=>{
                this.setState({
                    GroupId:'',
                    documentName:'',
                    grade:'',
                })
                swal.fire("Inserted","Student result recorded","success")
            }).catch((err)=>{
                alert(err)
            })
        }


    }



    render(){
        return(
            <div className="m-5" style={{backgroundColor:"rgb(200,200,200,0.5)", padding:"20px 50px 20px 50px", marginTop:"50px",marginBottom:"50px", borderRadius:"30px"}}>
                <h3><center><b>Evaluate Document</b></center></h3>

                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label for="GroupId" class="form-label">Group Id</label>
                        <input type="text" className="form-control" id="GroupId"
                        placeholder='Please enter Group Id'
                        value={this.state.GroupId}
                        onChange={this.onChangeGroupId}
                        />
                    </div>
                    <div className="form-group">
                        <label for="documentName" class="form-label">documentName</label>
                        <input type="text" className="form-control" id="documentName"
                        placeholder='Please enter Group Id'
                        value={this.state.documentName}
                        onChange={this.onChangeDocumentName}
                        />
                    </div>
                    <div className="form-group">
                        <label for="Grade" class="form-label">Grade</label>
                        <select class="form-select" aria-label="Default select example">
                            <option value="A+">A+</option>
                            <option value="A">A</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B">B</option>
                            <option value="B-">B</option>
                            <option value="C+">C+</option>
                            <option value="C">C</option>
                            <option value="C-">C-</option>
                            
                        </select>
                    </div>
                </form>

            </div>
        )
    }


}