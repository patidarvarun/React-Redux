import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-warning">
          <h1 style={{ color: "black" }}>Redux-Project</h1>
          <br />

          <div>
            <Link to="/" style={{ color: "blue" }}>
              <b> Back-to-Product</b>
            </Link>
            <br />
            <Link to="getallusers" style={{ color: "green" }}>
              <b> All Users</b>
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
