import react,{useState} from "react";



function Register() {

  return (
    <div className="editable-form">
      <h4>Create Gruop</h4>
      <hr />
      <div className="form-group">
        <label>Group ID:</label> 
        <input className='form-control' type="text" name="groupID"  /> 
      </div>

      <div className="form-group">
        <label>Group Name:</label> 
        <input className='form-control' type="text" name="name"  />
      </div>

      <div className="form-group">
        <label>Leader's Name:</label> 
        <input className='form-control' type="text" name="lname"  />
      </div>

      <div className="form-group">
        <label>Leader's IT number:</label> 
        <input className='form-control' type="text" name="lIT"  />
      </div>

      <br />
      <div className="form-group">
        <label>Member 2 Name:</label> 
        <input className='form-control' type="text" name="memberName"  />
      </div>

      <div className="form-group">
        <label>Member 2 IT number:</label> 
        <input className='form-control' type="text" name="memberIT"  />
      </div>

      <br />
      <div className="form-group">
        <label>Member 3 Name:</label> 
        <input className='form-control' type="text" name="memberName"  />
      </div>

      <div className="form-group">
        <label>Member 3 IT number:</label> 
        <input className='form-control' type="text" name="memberIT"  />
      </div>

      <br />
      <div className="form-group">
        <label>Member 4 Name:</label> 
        <input className='form-control' type="text" name="memberName"  />
      </div>

      <div className="form-group">
        <label>Member 4 IT number:</label> 
        <input className='form-control' type="text" name="memberIT"  />
      </div>
      
      <br />
      <input className="btn btn-primary" type="button" name="btnSignUp"  value="Register" />
    </div>
  );
}

export default Register;
