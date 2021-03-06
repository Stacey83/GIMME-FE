import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  console.log(window.localStorage.getItem("token"));
  useEffect(() => {
    console.log("Found token: ", window.localStorage.getItem("token"));
  }, [window.localStorage.getItem("token")]);
  console.log("mytoken", window.localStorage.getItem("token"));

  const [token, setToken] = useState(window.localStorage.getItem("token"));

  const removeToken = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <nav>
      <div id="mainnav">
        <Link to="/" class="cirlelink">
          Home
        </Link>
        <Link to="/ProjectCardPage/" class="cirlelink">
          All projects
        </Link>
        <Link to="/CreateNewUser" class="cirlelink">
          Sign up
        </Link>
      </div>
      <div id="secondnav">
        {token ? (
          <div id="secondnavlogin">
            <Link to="/" onClick={removeToken}>
              Sign out
            </Link>
            <br />
            <Link to="/createproject">Create a new project</Link>
          </div>
        ) : (
          <Link to="/Login">Sign in</Link>
        )}
      </div>
    </nav>
  );
}

export default Nav;
