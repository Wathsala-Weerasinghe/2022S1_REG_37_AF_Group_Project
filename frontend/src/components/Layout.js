import { Outlet, Link } from "react-router-dom";

import React from "react";

import Home from "./Home";

class Layout extends React.Component {
  constructor() {
    super();

    this.state = {
      authenticated: false,
      items: 0,
      links: {
        home: false,
        logout: false,
        username: false,
        users: false,
        pmEvaluation: false
      },
    };

    // register
    let userId = sessionStorage.getItem("userid");
    if (userId) {
      this.state.authenticated = true;
      this.state.links.logout = true;
      this.state.links.username = true;
    } else {
      this.state.links.logout = false;
      this.state.links.username = false;
    }

    let role = sessionStorage.getItem("userrole");

    if (role) {
      if (role === "admin") {
        this.state.links.users = true;
      } else if (role === "student") {
      } else if (role === "supervisor") {
        //this.state.links.users = true;
      } else if (role === "co-supervisor") {
        //this.state.links.users = true;
      } else if (role === "panel-member") {
        this.state.links.pmEvaluation = true;
      }
    }
  }

  getItemCount() {
    let cart = sessionStorage.getItem("cart");
    let itemCount = 0;

    if (cart) {
      cart = JSON.parse(cart);
      cart.forEach(function (item) {
        itemCount += 1;
      });
    }

    return itemCount;
  }

  getUserName() {
    let username = sessionStorage.getItem("username");
    if (username) {
      return username.split(0, 2);
    } else {
      return "";
    }
  }

  signOut() {
    sessionStorage.removeItem("userid");
    sessionStorage.removeItem("userrole");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("token");
    window.location = "/login";
  }

  render() {
    return (
      <div>
        <div>
          <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='container-fluid'>
              <a className='navbar-brand' href='/'>
                RPMS
              </a>
              <div className='collapse navbar-collapse' id='navbarNav'>
                <ul className='navbar-nav'>
                  {/* <li className="nav-item">
                {this.state.links.home && <Link className="nav-item nav-link" to="/">RPMS</Link>}
                </li> */}
                  <li>
                    {this.state.links.users && (
                      <Link className='nav-item nav-link' to='/users'>
                        Users
                      </Link>
                    )}
                    {this.state.links.pmEvaluation && (
                      <Link className='nav-item nav-link' to='/pm-evaluations'>
                        Evaluation
                      </Link>
                    )}
                  </li>
                </ul>
              </div>
              {this.state.links.viewcart && (
                <Link className='btn btn-primary' to='shop-cart'>
                  Cart{" "}
                  <span className='badge' id='cart-item-count'>
                    [{this.getItemCount()}]
                  </span>
                </Link>
              )}
              &nbsp;&nbsp;
              {this.state.links.username && (
                <span className='login-name'>{this.getUserName()}</span>
              )}
              {this.state.links.logout && (
                <a
                  className='nav-item nav-link'
                  href='/login'
                  onClick={this.signOut}
                >
                  Sign Out
                </a>
              )}
            </div>
          </nav>
        </div>
        <br />
        <Outlet />
        <br />
      </div>
    );
  }
}

export default Layout;
