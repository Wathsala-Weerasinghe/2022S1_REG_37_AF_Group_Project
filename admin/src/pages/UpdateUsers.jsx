import "../pages/UpdateUsers.css";

export default function UpdateUsers() {
  return (
    <div>
      <div className="userUpdate">
        <span className="userUpdateTitle">Update Details Here</span>
        <form className="userUpdateForm">
          <div className="userUpdateLeft">
            <br />
            <div className="userUpdateItem">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Anna Becker"
                className="userUpdateInput"
              />
            </div>
            <br />
            <div className="userUpdateItem">
              <label>Email</label>
              <input
                type="text"
                placeholder="annabeck99@gmail.com"
                className="userUpdateInput"
                disabled
              />
            </div>
            <br />
            <div className="userUpdateItem">
              <label for="role">Choose a Role</label>
              <select name="role" id="role">
                <option value="select">Select Role</option>
                <option value="admin">Admin</option>
                <option value="student">Student</option>
                <option value="sup">Supervisor</option>
                <option value="panelmember">Panel Member</option>
              </select>
            </div>

            <br />
            <div className="userUpdateRight">
              <button className="userUpdateButton">Update</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
