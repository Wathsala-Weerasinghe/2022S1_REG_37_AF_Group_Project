import React from "react";
import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";

class DeleteUser extends React.Component {
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

  deleteUser() {
    var token = sessionStorage.getItem("token");
    axios
      .delete(`http://localhost:8070/users/delete/` + this.props.params.id, {
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
        <h4>Delete User</h4>
        <hr />
        <div className='editable-form'>
          <form>
            <div className='form-group'>
              <label className='highlight-key'>Username</label>
              <span className='highlight-value'>
                : {this.state.user?.username}
              </span>
            </div>
            <div className='form-group'>
              <label className='highlight-key'>Role</label>
              <label className='highlight-value'>
                : {this.state.user?.role}
              </label>
            </div>
            <br />
            <input
              type='button'
              className='btn btn-danger'
              name='deleteTheater'
              onClick={this.deleteUser.bind(this)}
              value='Delete'
            />
            &nbsp;&nbsp;
            <a className='btn btn-warning' href='/users'>
              Back
            </a>
          </form>
        </div>
      </div>
    );
  }
}

// Wrap and export
export default function (props) {
  const navigation = useNavigate();
  const params = useParams();

  return <DeleteUser {...props} navigation={navigation} params={params} />;
}
