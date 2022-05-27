import { Outlet, Link } from "react-router-dom";

import React from "react";

class Layout extends React.Component
{
  render(){
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav">
              <li>
                {<Link className="nav-item nav-link" to="/register">Create Group</Link>}
              </li>
              <li>
                {<Link className="nav-item nav-link" to="/login">Register Topic</Link>}
              </li>
            </ul>
         
          </nav>
        <br />
        <Outlet />
        <br />
      </>
    );
  }
}


export default Layout;