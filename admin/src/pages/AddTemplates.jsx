import React, { useEffect, useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import app from "../firebaseConfig";
import { FcDocument, FcFolder } from "react-icons/fc";

const AddTemplates = () => {
  const [tempName, setTempName] = useState("");
  const [document, setDocument] = useState(null);

  //Get data from database
  const [templates, setTemplates] = useState([
    {
      tempName: "",
      document: "",
    },
  ]);

  useEffect(() => {
    function getTemplatesAndDocs() {
      axios

        .get("http://localhost:3000/templates/getAllTemplates")

        .then((res) => {
          console.log(res.data);

          setTemplates(res.data);
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
      .delete(`http://localhost:3000/templates/deleteTemplate/${_id}`)

      .then((res) => {
        alert("Template Deleted!");

        setTimeout(window.location.reload.bind(window.location), 2000);
      })

      .catch((err) => {
        alert("Template deletion Failed!!");
      });
  }

  function sendData(e) {
    e.preventDefault();

    const fileName = new Date().getTime().toString() + document.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, document);

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
        getDownloadURL(uploadTask.snapshot.ref).then((document) => {
          console.log("File available at :", document);

          const newTemp = {
            tempName,

            document,
          };
          axios
            .post("http://localhost:3000/templates/addTemplate", newTemp)
            .then(() => {
              alert("Template Added Successfully!");
              setTimeout(window.location.reload.bind(window.location), 1000);
              // setadd(true);
            })
            .catch((res) => {
              alert("Template Adding Failed!");
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
            {/* <!-- Form Starts here --> */}
            <form class="addCountryForm" onSubmit={sendData}>
              <div class="topic">Add Template Schemes</div>
              <br />
              <br />
              <div class="input-box">
                <select
                  name="role"
                  id=""
                  className="userUpdateInput"
                  onChange={(e) => setTempName(e.target.value)}
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
                    setDocument(e.target.files[0]);
                  }}
                />
              </div>

              <div class="input-box" style={{ marginTop: "75px" }}>
                <input type="submit" value="Submit" />
              </div>
            </form>
            <div class="image-box">
              <img
                src="https://res.cloudinary.com/desnqqj6a/image/upload/v1654327372/Research_paper-amico_uqciou.png"
                alt=""
              />
            </div>
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
          {templates.map((item) => (
            <div className="uploaded-item-container">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FcDocument
                  className="uploaded-item-icon"
                  style={{ cursor: "pointer", height: "100px", width: "100px" }}
                  onClick={() => window.open(item.document)}
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
                  {item.tempName.slice(0, 20).concat("...")}
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

export default AddTemplates;
