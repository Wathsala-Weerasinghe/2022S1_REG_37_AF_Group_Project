import React from "react";
import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";

class Register extends React.Component {
  constructor() {
    super();

    this.state = {
      studentInfo: {},
      staffInfo: {},
    };
  }

  userInfo = {};

  handleSignUpChange(type, e) {
    this.setState((prevState) => {
      if (type === "student" || type === "admin") {
        let studentInfo = { ...prevState.studentInfo };
        studentInfo[e.target.name] = e.target.value;
        return { studentInfo };
      } else {
        let staffInfo = { ...prevState.staffInfo };
        staffInfo[e.target.name] = e.target.value;
        return { staffInfo };
      }
    });
  }

  signUp(type) {
    let payload = {};
    if (type === "student" || type === "admin") {
      this.state.studentInfo.role = type;
      payload = this.state.studentInfo;
    } else {
      if (!this.state.staffInfo.role) {
        this.state.staffInfo.role = "supervisor";
      }
      payload = this.state.staffInfo;
    }

    console.log(payload);

    axios
      .post(`http://localhost:8070/user/signup`, payload)
      .then(function (response) {
        alert(response.data.message);
        console.log(response);
      })
      .catch(function (error) {
        alert(error);
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div className='login-form m-auto border border-1 border-dark rounded rounded-4 p-4'>
          <h4>Register a student</h4>
          <hr />
          <div className='form-group'>
            <label>Username:</label>
            <input
              className='form-control'
              type='text'
              placeholder='Username'
              name='username'
              onChange={this.handleSignUpChange.bind(
                this,
                this.props.params.type
              )}
            />
          </div>
          <div className='form-group'>
            <label>Password:</label>
            <input
              className='form-control'
              type='password'
              placeholder='Password'
              name='password'
              onChange={this.handleSignUpChange.bind(
                this,
                this.props.params.type
              )}
            />
          </div>
          <br />
          {this.props.params.type === "staff" && (
            <>
              <div className='form-group'>
                <label>Role:</label>
                <select
                  className='form-control'
                  value={"supervisor"}
                  name='role'
                  onChange={this.handleSignUpChange.bind(
                    this,
                    this.props.params.type
                  )}
                >
                  <option value='supervisor'>Supervisor</option>
                  <option value='co-supervisor'>Co-Supervisor</option>
                  <option value='panel-member'>Panel Member</option>
                </select>
              </div>
              <br />
            </>
          )}
          <input
            className='btn btn-primary w-100'
            type='button'
            name='btnSignUp'
            onClick={this.signUp.bind(this, this.props.params.type)}
            value='Sign Up'
          />
        </div>
        {/* {this.props.params.type === 'staff' &&
          <div className="login-form m-auto border border-1 border-dark rounded rounded-4 p-4">
            <h4>Register a staff member</h4>
            <hr />
            <div className="form-group">
              <label>Username:</label> 
              <input className='form-control' type="text" name="username" onChange={this.handleSignUpChange.bind(this, 'staff')} /> 
            </div>
            <div className="form-group">
              <label>Password:</label> 
              <input className='form-control' type="password" name="password" onChange={this.handleSignUpChange.bind(this, 'staff')} />
            </div>
            <div className="form-group">
              <label>Role:</label> 
              <select className="form-control" value={"supervisor"} name="role" onChange={this.handleSignUpChange.bind(this, 'staff')}>
                <option value="supervisor">Supervisor</option>
                <option value="co-supervisor">Co-Supervisor</option>
                <option value="panel-member">Panel Member</option>
              </select>
            </div>
            <br />
            <input className="btn btn-primary w-100" type="button" name="btnSignUp" onClick={this.signUp.bind(this, 'staff')} value="Sign Up" />
            </div>} */}
      </div>
    );
  }
}

// Wrap and export
export default function (props) {
  const navigation = useNavigate();
  const params = useParams();

  return <Register {...props} navigation={navigation} params={params} />;
}
