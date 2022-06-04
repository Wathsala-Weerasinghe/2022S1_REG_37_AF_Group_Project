import React from "react";
import axios from "axios";

class ViewEvaluation extends React.Component {
  constructor() {
    super();

    this.state = {
      topicDetailDocs: [],
      presentations: [],
      marking: {}
    };
  }

  componentDidMount() {
    if (this.first) return;
    this.first = true;

    let userId = sessionStorage.getItem("userid");
    var token = sessionStorage.getItem("token");
    axios
      .get(`http://localhost:8070/topics/pm/` + userId, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        this.setState((prevState) => {
          let topicDetailDocs = { ...prevState.topicDetailDocs };
          topicDetailDocs = response.data.topicDetailDocs;

          let presentations = { ...prevState.presentations };
          presentations = response.data.presentations;

          return { topicDetailDocs, presentations };
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get(`http://localhost:8070/marking`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        this.setState((prevState) => {
          let marking = { ...prevState.marking };
          marking = response.data.marking;

          return { marking };
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <table className="container">
          <tbody>
            <tr>
              <td><h5>Pending Topics to Evaluate</h5></td>
              <td className="float-right">
                <a
                  className='btn btn-warning'
                  href={this.state.marking?.topicdetail}
                >
                  View Marking Scheme
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
        <div>
        <table className='table table-striped'>
            <thead className='thead-dark'>
              <tr>
                <th>Topic Name</th>
                <th>Group Name</th>
                <th>Group Id</th>
                <th>Topic Category</th>
                <th className='command-col-large'>#</th>
              </tr>
            </thead>
            <tbody>
              {this.state.topicDetailDocs?.map(item => (
                <tr key={item._id}>
                  <td>{item.TopicName}</td>
                  <td>{item.GroupName}</td>
                  <td>{item.GroupID}</td>
                  <td>{item.TopicCategory}</td>
                  <td>
                    <a
                      className='btn btn-primary'
                      href={"pm-evaluation/" + item._id}
                    >
                      Evaluate
                    </a>
                  </td>
                </tr>
              ))}
              </tbody>
          </table>
        </div>
        <br /><br /><br />
        <table className="container">
          <tbody>
            <tr>
              <td><h5>Pending Presentations to Evaluate</h5></td>
              <td className="float-right">
                <a
                  className='btn btn-warning'
                  href={this.state.marking?.presentation}
                >
                  View Marking Scheme
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
        <div>
        <table className='table table-striped'>
            <thead className='thead-dark'>
              <tr>
                <th>Topic Name</th>
                <th>Group Name</th>
                <th>Group Id</th>
                <th>Topic Category</th>
                <th className='command-col-large'>#</th>
              </tr>
            </thead>
            <tbody>
              {this.state.presentations?.map((item) => (
                <tr>
                  <td>{item.TopicName}</td>
                  <td>{item.GroupName}</td>
                  <td>{item.GroupID}</td>
                  <td>{item.TopicCategory}</td>
                  <td>
                    <a
                      className='btn btn-primary'
                      href={"pm-evaluation/" + item._id}
                    >
                      Evaluate
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

export default ViewEvaluation;
