import React from "react";
import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";

class UpdateUser extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    if (this.first) return;
    this.first = true;
    let id = this.props.params.id;
    var token = sessionStorage.getItem("token");
    axios
      .get(`http://localhost:8070/users/` + id, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        this.setState((prevState) => {
          let user = { ...prevState.user };
          user = response.data;
          return { user };
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleUserUpdateChange(e) {
    this.setState((prevState) => {
      let user = { ...prevState.user };
      user[e.target.name] = e.target.value;
      return { user };
    });
  }

  updateUser() {
    this.state.user.id = this.props.params.id;
    delete this.state.user._id;
    console.log(this.state.user);
    var token = sessionStorage.getItem("token");
    axios
      .put(`http://localhost:8070/users/update/`, this.state.user, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log(response);
        this.props.navigation("/users");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h4>Update User Role</h4>
        <hr />
        <div className='editable-form'>
          <table>
            <tbody>
              <tr>
                <td>
                  <label className='highlight-key'>UserName</label>
                </td>
                <td>:</td>
                <td>
                  <input
                    className='form-control'
                    defaultValue={this.state.user?.username}
                    type='text'
                    name='username'
                    onChange={this.handleUserUpdateChange.bind(this)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <br />
                  <label className='highlight-key'>Role:</label>
                </td>
                <td>
                  <br /> : &nbsp;
                </td>
                <td>
                  <br />
                  <select
                    className='form-control'
                    value={this.state.user?.role}
                    name='role'
                    onChange={this.handleUserUpdateChange.bind(this)}
                  >
                    <option value='admin'>Admin</option>
                    <option value='student'>Student</option>
                    <option value='supervisor'>Supervisor</option>
                    <option value='co-supervisor'>Co-Supervisor</option>
                    <option value='panel-member'>Panel Member</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <input
            type='button'
            className='btn btn-primary'
            name='updateUser'
            onClick={this.updateUser.bind(this)}
            value='Save'
          />
          &nbsp;&nbsp;
          <a className='btn btn-warning' href='/users'>
            Back
          </a>
        </div>
      </div>
    );
  }
}

// Wrap and export
export default function (props) {
  const navigation = useNavigate();
  const params = useParams();

  return <UpdateUser {...props} navigation={navigation} params={params} />;
}
