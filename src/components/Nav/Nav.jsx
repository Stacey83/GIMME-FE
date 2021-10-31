import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const removeToken = () => {
    localStorage.removeItem("token");
}

function Nav() {
    console.log(window.localStorage.getItem("token") )
    useEffect(() => {
        console.log("Found token: ", window.localStorage.getItem('token'))
    }, 
    [window.localStorage.getItem('token')])

    return (
        <nav>
            <div id="mainnav">
            <Link to="/" class="cirlelink">Home</Link>
            <Link to="/Projects" class="cirlelink">All projects</Link>
            <Link to="/CreateNewUser" class="cirlelink">Sign up</Link>
            </div>
            <div id="secondnav">
            {/* /* look at diary for action.  One function to check login/logout status via token. */}
            {
            // token ? this : that
                window.localStorage.getItem("token") 
                    ? <button onClick={removeToken}>Sign out</button>
                    : <Link to="/Login">Sign in</Link>
            }
            <Link to="/createproject">Create new project</Link>
            </div>
        </nav>
    )
}

export default Nav;