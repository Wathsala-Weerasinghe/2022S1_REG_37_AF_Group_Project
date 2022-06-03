import React from "react";
import axios from "axios";

class ViewUser extends React.Component {
  constructor() {
    super();

    this.state = {
      tableData: [],
    };
  }

  componentDidMount() {
    if (this.first) return;
    this.first = true;

    var token = sessionStorage.getItem("token");
    axios
      .get(`http://localhost:8070/user/`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        this.setState((prevState) => {
          let tableData = { ...prevState.tableData };
          tableData = response.data;
          return { tableData };
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  fetchUpdatableHref(id) {
    return "/update-user/" + id;
  }

  fetchDeletableHref(id) {
    return "/delete-user/" + id;
  }

  render() {
    return (
      <div>
        <h4>Users</h4>
        <hr />
        <div>
          <a className='btn btn-success' href='/register/admin'>
            Create Admin
          </a>{" "}
          &nbsp;
          <a className='btn btn-warning' href='/register/student'>
            Create Student
          </a>{" "}
          &nbsp;
          <a className='btn btn-info' href='/register/staff'>
            Create Staff Member
          </a>{" "}
          &nbsp;
          <br />
          <br />
          <table className='table table-striped'>
            <thead className='thead-dark'>
              <tr>
                <th>Username</th>
                <th>Password</th>
                <th>Role</th>
                <th className='command-col-large'>#</th>
              </tr>
            </thead>
            <tbody>
              {this.state.tableData.map((item) => (
                <tr key={item._id}>
                  <td>{item.username}</td>
                  <td>{item.password ? "*****" : ""}</td>
                  <td>{item.role}</td>
                  <td>
                    <a
                      className='btn btn-primary'
                      href={this.fetchUpdatableHref(item._id)}
                    >
                      Update
                    </a>
                    &nbsp;&nbsp;
                    {/* <a className="btn btn-primary" href={this.fetchUpdatableHref(item._id)}>Update</a>
                                &nbsp;&nbsp; */}
                    <a
                      className='btn btn-danger'
                      href={this.fetchDeletableHref(item._id)}
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ViewUser;
