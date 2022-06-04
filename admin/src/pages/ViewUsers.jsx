import React from "react";
import "../pages/ViewUsers.css";
import { Link } from "react-router-dom";

const ViewUsers = () => {
  return (
    <div className="userList">
      <div className="titleList">Registered User List</div>
      <br />
      <br />
      <input
        placeholder="Search Here by Role"
        className="Ddown1"
        type="search"
      />
      <br />
      <div className="table-wrapper">
        <div>
          <table className="fl-table123">
            <thead className="tHead">
              <tr>
                <th>ID</th>

                <th>Full Name</th>

                <th>Email</th>

                <th>Role</th>

                <th style={{ width: "90px" }}>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>IT20002824</td>
                <td>Janani Malshika</td>
                <td>Janani@gmail.com</td>
                <td>Admin</td>
                <td>
                  <Link to="/updateuser">
                    <button class="button-18" role="button">
                      Update
                    </button>
                  </Link>
                  <button class="button-19" role="button">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>IT20220748</td>
                <td>Ratheeskan.T</td>
                <td>rathees@gmail.com</td>
                <td>Supervisor</td>
                <td>
                  <Link to="/updateuser">
                    <button class="button-18" role="button">
                      Update
                    </button>
                  </Link>
                  <button class="button-19" role="button">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>IT20021320</td>
                <td>Janani Malshika</td>
                <td>Janani@gmail.com</td>
                <td>Admin</td>
                <td>
                  <Link to="/updateuser">
                    <button class="button-18" role="button">
                      Update
                    </button>
                  </Link>
                  <button class="button-19" role="button">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>IT20021320</td>
                <td>Kethmi Hasara</td>
                <td>Kethmi@gmail.com</td>
                <td>Panel Member</td>
                <td>
                  <Link to="/updateuser">
                    <button class="button-18" role="button">
                      Update
                    </button>
                  </Link>
                  <button class="button-19" role="button">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>IT20002824</td>
                <td>Janani Malshika</td>
                <td>Janani@gmail.com</td>
                <td>Admin</td>
                <td>
                  <Link to="/updateuser">
                    <button class="button-18" role="button">
                      Update
                    </button>
                  </Link>
                  <button class="button-19" role="button">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>IT20002824</td>
                <td>Janani Malshika</td>
                <td>Janani@gmail.com</td>
                <td>Admin</td>
                <td>
                  <Link to="/updateuser">
                    <button class="button-18" role="button">
                      Update
                    </button>
                  </Link>
                  <button class="button-19" role="button">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>IT20002824</td>
                <td>Janani Malshika</td>
                <td>Janani@gmail.com</td>
                <td>Admin</td>
                <td>
                  <Link to="/updateuser">
                    <button class="button-18" role="button">
                      Update
                    </button>
                  </Link>
                  <button class="button-19" role="button">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>IT20002824</td>
                <td>Janani Malshika</td>
                <td>oshan@gmail.com</td>
                <td>Admin</td>
                <td>
                  <Link to="/updateuser">
                    <button class="button-18" role="button">
                      Update
                    </button>
                  </Link>
                  <button class="button-19" role="button">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>IT20002824</td>
                <td>Janani Malshika</td>
                <td>oshan@gmail.com</td>
                <td>Admin</td>
                <td>
                  <Link to="/updateuser">
                    <button class="button-18" role="button">
                      Update
                    </button>
                  </Link>
                  <button class="button-19" role="button">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>IT20002824</td>
                <td>Janani Malshika</td>
                <td>oshan@gmail.com</td>
                <td>Admin</td>
                <td>
                  <Link to="/updateuser">
                    <button class="button-18" role="button">
                      Update
                    </button>
                  </Link>
                  <button class="button-19" role="button">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewUsers;
