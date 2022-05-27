import React from "react";

function Login() {

  

  return (
    <div className="editable-form">
        <h4>Register Topic Name</h4>
        <hr />
        <div className="form-group">
            
            <label>Group Name:</label> 
            <input className='form-control' type="text" name="groupname"  /> 
        </div>
        <div className="form-group">
            <label>Group ID:</label>
            <input className='form-control' type="text" name="id"  />
        </div>
        <div className="form-group">
            <label>Phone Number:</label>
            <input className='form-control' type="text" name="phone"  />
        </div>
        <div className="form-group">
          <br></br>
            <label>Topic Category:</label>
            <select>
                <option value="topic1">topicCat1</option>
                <option value="topic2">topicCat2</option>
                <option selected value="topic3">topicCat3</option>
                <option value="topic4">topicCat4</option>
            </select>
        </div>
        <br></br>
        <div className="form-group">
            <label>Topic Name:</label>
            <select>
                <option value="topic1">topic1</option>
                <option value="topic2">topic2</option>
                <option selected value="topic3">topic3</option>
                <option value="topic4">topic4</option>
            </select>
        </div>
        <br />
        
        <input className="btn btn-primary" type="button" name="btnSignUp"  value="Register"/>
    </div>
  );
}

export default Login;
