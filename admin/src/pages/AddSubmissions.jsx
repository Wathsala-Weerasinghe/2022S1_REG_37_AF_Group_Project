import React from "react";
import "../components/AddMarking.scss";

function AddSubmissionTypes() {
  return (
    <div style={{ maxHeight: "675px", overflowY: "auto" }}>
      <div className="addSchedule-Container" style={{ marginTop: "30px" }}>
        <div class="container">
          <div class="content">
            <div class="image-box">
              <img
                src="https://res.cloudinary.com/desnqqj6a/image/upload/v1654350709/WhatsApp_Image_2022-06-04_at_6.51.23_AM_j0s70e.jpg"
                alt=""
              />
            </div>

            {/* <!-- Form Starts here --> */}
            <form class="addCountryForm">
              <div class="topic">Add Submission Types</div> <br />
              <div class="input-box">
                <select name="role" id="" className="userUpdateInput">
                  <option>Submission Name</option>
                  <option>Charter Submission</option>
                  <option>Proposal Presentation</option>
                  <option>Progress Presentation</option>
                  <option>Final Report</option>{" "}
                  <option>Final Presentation</option>{" "}
                  <option>Final Thesis</option>
                </select>
              </div>
              <div class="input-box">
                <select name="role" id="" className="userUpdateInput">
                  <option>Submission Type</option>
                  <option>Word Document</option>
                  <option>PDF</option>
                  <option>Powerpoint</option>
                </select>
              </div>
              <div class="input-box" style={{ marginTop: "75px" }}>
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddSubmissionTypes;
