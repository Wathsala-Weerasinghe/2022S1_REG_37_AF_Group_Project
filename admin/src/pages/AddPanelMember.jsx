import "./AddPanelMember.css";

export default function AddPanelMember() {
  return (
    <div>
      <div>
        <div style={{ marginTop: "50px" }}>
          <div className="wrapper wrapper--w900">
            <div className="card-heading">
              <h2 className="title">Add Panel Member</h2>
            </div>

            <div className="card card-6">
              <div>
                <form encType="multipart/from-data">
                  <div className="form-row">
                    <div className="name">Group ID</div>
                    <div className="value">
                      <input className="input--style-6" type="text" />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="name">Group Name</div>
                    <div className="value">
                      <input className="input--style-6" type="text" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="name">Member 01 Name </div>
                    <div className="value">
                      <input className="input--style-6" type="text" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="name">Member 01 ID</div>
                    <div className="value">
                      <input className="input--style-6" type="text" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="name">Member 02 Name</div>
                    <div className="value">
                      <input className="input--style-6" type="text" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="name">Member 02 ID</div>
                    <div className="value">
                      <input className="input--style-6" type="text" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="name">Member 03 Name</div>
                    <div className="value">
                      <input className="input--style-6" type="link" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="name">Member 03 ID</div>
                    <div className="value">
                      <input className="input--style-6" type="link" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="name">Member 04 Name</div>
                    <div className="value">
                      <input className="input--style-6" type="link" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="name">Member 04 ID</div>
                    <div className="value">
                      <input className="input--style-6" type="link" />
                    </div>
                  </div>
                  <div className="form-row">
                    <label for="role" className="name">
                      Choose Panel Member 01
                    </label>
                    <select className="value" name="role" id="role">
                      <option value="select">Select Panel Member 01</option>
                      <option value="admin">Janani</option>
                      <option value="student">Hasith</option>
                      <option value="sup">Kethmi</option>
                      <option value="panelmember">Sandumini</option>
                    </select>
                  </div>
                  <div className="form-row">
                    <label for="role" className="name">
                      Choose Panel Member 02
                    </label>
                    <select className="value" name="role" id="role">
                      <option value="select">Select Panel Member 02</option>
                      <option value="admin">Janani</option>
                      <option value="student">Hasith</option>
                      <option value="sup">Kethmi</option>
                      <option value="panelmember">Sandumimi</option>
                    </select>
                  </div>

                  <div className="card-footer">
                    <button
                      className="btn btn--radius-2 btn--blue-2"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
