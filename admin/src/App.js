import "./App.scss";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UpdateSchedule from "./components/UpdateSchedule";
import ViewUsers from "./pages/ViewUsers";
import UpdateUsers from "./pages/UpdateUsers";
import AddPanelMember from "./pages/AddPanelMember";
import AddTemplates from "./pages/AddTemplates";
import AddMarking from "./components/AddMarking";
import ViewStudentGroups from "./pages/ViewGroups";
import AddSubmissionTypes from "./pages/AddSubmissions";

function App() {
  return (
    <div className="App-Container">
      <Router>
        <Sidebar />
        <Switch>
          <div className="container-conent" style={{ margin: "0px 20px" }}>
            <Route exact path="/" component={MainContent} />

            <Route path="/users" component={ViewUsers} />

            <Route path="/schedule/:id">
              <UpdateSchedule />
            </Route>

            <Route path="/temp">
              <AddTemplates />
            </Route>
            <Route path="/marking">
              <AddMarking />
            </Route>
            <Route path="/groups">
              <ViewStudentGroups />
            </Route>

            <Route path="/updateuser">
              <UpdateUsers />
            </Route>

            <Route path="/AddPanelMember">
              <AddPanelMember />
            </Route>
            <Route path="/submission">
              <AddSubmissionTypes />
            </Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
