import React from "react";
import "../pages/ViewGroups.css";
import { Link } from "react-router-dom";

const ViewStudentGroups = () => {
  return (
    <div className="userList">
      <div className="titleList">Registered Group List</div>
      <br />
      <br />
      <input
        placeholder="Search Here by Group ID"
        className="Ddown1"
        type="search"
      />
      <br />
      <div className="table-wrapper">
        <div>
          <table className="fl-table123">
            <thead className="tHead">
              <tr>
                <th>Group Name</th>

                <th>Group ID</th>

                <th>Tel</th>

                <th>Topic Category</th>
                <th>Topic Name</th>

                <th style={{ width: "90px" }}>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Fantastic Four</td>
                <td>2022_S1_PG1</td>
                <td>0751267895</td>
                <td>Autonomous Intelligent Machines and Systems (AIMS)</td>
                <td>Smart Systems (SS)</td>

                <td>
                  <Link to="/AddPanelMember">
                    <button class="button-18" role="button">
                      View
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Fantastic Four</td>
                <td>2022_S1_PG1</td>
                <td>0751267895</td>
                <td>Autonomous Intelligent Machines and Systems (AIMS)</td>
                <td>Smart Systems (SS)</td>

                <td>
                  <Link to="/AddPanelMember">
                    <button class="button-18" role="button">
                      View
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Fantastic Four</td>
                <td>2022_S1_PG1</td>
                <td>0751267895</td>
                <td>Autonomous Intelligent Machines and Systems (AIMS)</td>
                <td>Smart Systems (SS)</td>

                <td>
                  <Link to="/AddPanelMember">
                    <button class="button-18" role="button">
                      View
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Fantastic Four</td>
                <td>2022_S1_PG1</td>
                <td>0751267895</td>
                <td>Autonomous Intelligent Machines and Systems (AIMS)</td>
                <td>Smart Systems (SS)</td>

                <td>
                  <Link to="/AddPanelMember">
                    <button class="button-18" role="button">
                      View
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Fantastic Four</td>
                <td>2022_S1_PG1</td>
                <td>0751267895</td>
                <td>Autonomous Intelligent Machines and Systems (AIMS)</td>
                <td>Smart Systems (SS)</td>

                <td>
                  <Link to="/AddPanelMember">
                    <button class="button-18" role="button">
                      View
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Fantastic Four</td>
                <td>2022_S1_PG1</td>
                <td>0751267895</td>
                <td>Autonomous Intelligent Machines and Systems (AIMS)</td>
                <td>Smart Systems (SS)</td>

                <td>
                  <Link to="/AddPanelMember">
                    <button class="button-18" role="button">
                      View
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Fantastic Four</td>
                <td>2022_S1_PG1</td>
                <td>0751267895</td>
                <td>Autonomous Intelligent Machines and Systems (AIMS)</td>
                <td>Smart Systems (SS)</td>

                <td>
                  <Link to="/AddPanelMember">
                    <button class="button-18" role="button">
                      View
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Fantastic Four</td>
                <td>2022_S1_PG1</td>
                <td>0751267895</td>
                <td>Autonomous Intelligent Machines and Systems (AIMS)</td>
                <td>Smart Systems (SS)</td>

                <td>
                  <Link to="/AddPanelMember">
                    <button class="button-18" role="button">
                      View
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Fantastic Four</td>
                <td>2022_S1_PG1</td>
                <td>0751267895</td>
                <td>Autonomous Intelligent Machines and Systems (AIMS)</td>
                <td>Smart Systems (SS)</td>

                <td>
                  <Link to="/AddPanelMember">
                    <button class="button-18" role="button">
                      View
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Fantastic Four</td>
                <td>2022_S1_PG1</td>
                <td>0751267895</td>
                <td>Autonomous Intelligent Machines and Systems (AIMS)</td>
                <td>Smart Systems (SS)</td>

                <td>
                  <Link to="/AddPanelMember">
                    <button class="button-18" role="button">
                      View
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewStudentGroups;
