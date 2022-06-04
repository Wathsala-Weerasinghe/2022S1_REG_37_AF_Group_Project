import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router";
import axios from "axios";
import "./AddMarking.scss";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import app from "../firebaseConfig";
import { FcFolder } from "react-icons/fc";

const AddTemplate = () => {
  const [researchTopic, setResearchTopic] = useState("");
  const [type, setType] = useState("");
  const [marking, setMarking] = useState(null);

  //Get data from database
  const [schemas, setSchemas] = useState([
    {
      researchTopic: "",
      type: "",
      marking: "",
    },
  ]);

  useEffect(() => {
    function getTemplatesAndDocs() {
      axios

        .get("http://localhost:3000/marking/retrieveAll")

        .then((res) => {
          console.log(res.data);

          setSchemas(res.data);
        })

        .catch((err) => {
          alert(err.message);
        });
    }

    getTemplatesAndDocs();
  }, []);

  //Delete marking
  //Delete Document
  function deleteHandler(_id) {
    axios
      .delete(`http://localhost:3000/marking/deleteMarking/${_id}`)

      .then((res) => {
        alert("Marking Schema Deleted!");

        setTimeout(window.location.reload.bind(window.location), 2000);
      })

      .catch((err) => {
        alert("Marking Schema deletion Failed!!");
      });
  }

  function sendData(e) {
    e.preventDefault();

    const fileName = new Date().getTime().toString() + marking.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, marking);

    //Upload the file to Firebase Storage
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + " % done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((marking) => {
          console.log("File available at :", marking);

          const newMarking = {
            researchTopic,
            type,
            marking,
          };
          axios
            .post("http://localhost:3000/marking/add", newMarking)
            .then(() => {
              alert("Marking Scheme Added Successfully!");
              // setadd(true);
            })
            .catch((res) => {
              alert("Marking Scheme Adding Failed!");
              // setaddfail(true);
            });
        });
      }
    );
  }

  return (
    <div style={{ maxHeight: "675px", overflowY: "auto" }}>
      <div className="addSchedule-Container" style={{ marginTop: "20px" }}>
        <div class="container">
          <div class="content">
            <div class="image-box">
              <img
                src="https://res.cloudinary.com/desnqqj6a/image/upload/v1654321443/Research_paper-bro_hymbtu.png"
                alt=""
              />
            </div>

            {/* <!-- Form Starts here --> */}
            <form class="addCountryForm" onSubmit={sendData}>
              <div class="topic">Add Marking Schemes</div> <br />
              <div class="input-box">
                <input
                  type="text"
                  id="CName"
                  required
                  onChange={(e) => {
                    setResearchTopic(e.target.value);
                  }}
                />
                <label>Research Topic</label>
              </div>
              <div class="input-box">
                <select
                  name="role"
                  id=""
                  className="userUpdateInput"
                  onChange={(e) => setType(e.target.value)}
                >
                  <option>Topic Assessment</option>
                  <option>Charter Submission</option>
                  <option>Proposal Presentation</option>
                  <option>Progress Presentation</option>
                  <option>Final Report</option>{" "}
                  <option>Final Presentation</option>{" "}
                  <option>Final Thesis</option>
                </select>
              </div>
              <div class="input-box">
                <input
                  type="file"
                  id="CPopulation"
                  required
                  onChange={(e) => {
                    setMarking(e.target.files[0]);
                  }}
                />
              </div>
              <div class="input-box" style={{ marginTop: "75px" }}>
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* ---------------------Display Markings------------------------------- */}
      <div className="document-view-container">
        <h1 style={{ fontWeight: "200" }}>Uploaded Documents</h1>
        <div
          className="uploaded-item"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {schemas.map((item) => (
            <div className="uploaded-item-container">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FcFolder
                  className="uploaded-item-icon"
                  style={{ cursor: "pointer", height: "100px", width: "100px" }}
                  onClick={() => window.open(item.marking)}
                />
              </div>
              <div className="uploaded-item-info">
                <h1
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "200",
                    fontSize: "20px",
                  }}
                >
                  {item.researchTopic.slice(0, 20).concat("...")}
                </h1>

                <div
                  className="uploaded-item-download-btn"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    color="error"
                    style={{ marginTop: "25px", height: "30px" }}
                    onClick={() => deleteHandler(item._id)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddTemplate;
