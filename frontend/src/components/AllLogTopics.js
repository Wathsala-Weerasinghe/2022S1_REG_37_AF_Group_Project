import { Outlet, Link } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";

function AllTReg() {
  const [loading, setloading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchName, setSearchName] = useState("");

  //loading the records to the page
  useEffect(() => {
    const loadPosts = async () => {
      setloading(true);
      const response = await axios.get("http://localhost:8070/register/c/");
      setPosts(response.data);
      setloading(false);
    };
    loadPosts();
  }, []);

  //get the records
  const [topics, setTopic] = useState([]);
  useEffect(() => {
    function getTopic() {
      axios
        .get("http://localhost:8070/register/c/")
        .then((res) => {
          setTopic(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getTopic();
  }, [topics]);

  return (
    <div className='container'>
      <br></br>
      <br></br>
      <br></br>
      <center>
        <h2 style={{ color: "#2f4f4f" }}>
          <i>All Registered Topics.</i>
        </h2>
      </center>
      <br></br>
      <br></br>
      <br></br>
      <input
        className='Saerch'
        style={{ width: "1100px", height: "50px" }}
        type='text'
        placeholder='Search By Name...'
        onChange={(e) => setSearchName(e.target.value)}
      />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <table className='table'>
        <thead>
          <tr>
            <th>Group Name</th>
            <th>Group ID</th>
            <th>Phone Number</th>
            <th>Topic Category</th>
            <th>Topic Name</th>
            <th>#</th>
          </tr>
        </thead>

        {loading ? (
          <button class='btn btn-primary' type='button' disabled>
            <span
              class='spinner-border spinner-border-sm'
              role='status'
              aria-hidden='true'
            ></span>
            Loading...
          </button>
        ) : (
          //search function
          posts
            .filter((value) => {
              if (searchName === "") {
                return value;
              } else if (value.TopicName.includes(searchName.toLowerCase())) {
                return value;
              }
            })
            .map((topic) => (
              <tr key={topic._id}>
                <td>{topic.GroupName}</td>
                <td>{topic.GroupID}</td>
                <td>{topic.phone}</td>
                <td>{topic.TopicCategory}</td>
                <td>{topic.TopicName}</td>
                <td>
                  <a href={"/topic/" + topic._id} className='btn btn-info'>
                    <small>Submit for Evaluate</small>
                  </a>
                </td>
              </tr>
            ))
        )}
      </table>
      <Link to={"/add/sup"} className='btn btn-success btn-sm'>
        Add Supervisor
      </Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <br></br>
      <br></br>
      <br></br>
      <div class='card-group'></div>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default AllTReg;
