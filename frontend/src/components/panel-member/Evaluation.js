import React from "react";
import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";

class PMEvaluation extends React.Component {
  constructor() {
    super();

    this.state = {
      topic: {},
      heading: ""
    };
  }

  componentDidMount() {
    if (this.first) return;
    this.first = true;

    let topicid = this.props.params.id;

    var token = sessionStorage.getItem("token");
    axios
      .get(`http://localhost:8070/topics/` + topicid, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        let heading = "";
        if (response.data.topic.state === 'topic-eval-pending'){
          heading = "Evaluate Topic Detail Document";
        }else if (response.data.topic.state === 'present-eval-pending'){
          heading = "Evaluate Presentation";
        }

        this.setState((prevState) => {
          let topic = { ...prevState.topic };
          topic = response.data.topic;

          return { topic, heading };
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleScoreUpdateChange(e) {
    this.setState((prevState) => {
      let topic = { ...prevState.topic };
      topic[e.target.name] = e.target.value;
      return { topic };
    });
  }

  updateScore() {
    if (this.state.topic.state === 'present-eval-pending'){
      this.state.topic.state = "present-eval-completed";
      this.state.topic.topicDetScore = this.state.topic.score;
    }else if (this.state.topic.state === 'topic-eval-pending'){
      this.state.topic.state = "topic-eval-completed";
      this.state.topic.topicPresentScore = this.state.topic.score;
    }

    this.state.topic.id = this.props.params.id;
    delete this.state.topic._id;
    delete this.state.topic.score;

    var token = sessionStorage.getItem("token");
    //console.log(this.state.topic);
    axios
      .put(`http://localhost:8070/topics/update/`, this.state.topic, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log(response);
        this.props.navigation("/pm-evaluations");
      })
      .catch((error) => {
        console.log(error);
      });
  }


  render() {
    return (
      <div>
        <h5>{this.state?.heading}</h5>
        <hr />
        <div>
        <table className="table table-striped tb-500 pad-20">
          <tbody>
            <tr>
              <td className="tb-col-wd-130">
              Topic Name
              </td>
              <td className="tb-col-wd-30">
              : &nbsp;
              </td>
              <td>
              {this.state.topic?.TopicName}
              </td>
            </tr>
            <tr>
              <td>
              Group Name
              </td>
              <td>
              :
              </td>
              <td>
              {this.state.topic?.GroupName}
              </td>
            </tr>
            <tr>
              <td>
              Score
              </td>
              <td>
              :
              </td>
              <td>
              <input type="number" name="score" className="form-control score-box" onChange={this.handleScoreUpdateChange.bind(this)} />
              </td>
            </tr>
            </tbody>
          </table>
          <input
                className='btn btn-primary tb-500'
                type='button'
                name='btnSaveScore'
                value='Save Marks'
                onClick={this.updateScore.bind(this)}
              />
        </div>
      </div>
    );
  }
}

// Wrap and export
export default function (props) {
  const navigation = useNavigate();
  const params = useParams();

  return <PMEvaluation {...props} navigation={navigation} params={params} />;
}
