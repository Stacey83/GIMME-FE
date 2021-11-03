import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./CreateProjectForm.css";

function CreateProjectForm() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const history = useHistory();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  const postData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}api-token-auth/`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    );
    return response.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
      postData().then((response) => {
        window.localStorage.setItem("token", response.token);
        history.push("/");
        window.location.reload(); // reload used as timeframes didn't allow restructuring of coding. (naughty naughty)
        window.location = `${window.location.origin}/`;
      });
    }
  };

  return (
    <div>
      <div class="form">
        <form class="formcontent">
          <div>
            <label htmlFor="title">Project title: </label>
            <input
              type="text"
              //   id="title"
              placeholder="Enter Project title"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="description">Project description: </label>
            <input
              type="text"
              id="description"
              placeholder="Enter Project description"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="goal">Project goal: </label>
            <input
              type="text"
              id="goal"
              placeholder="Enter Project goal"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="goal">Project image URL: </label>
            <input
              type="text"
              //   id="image?"
              placeholder="Enter Project image URL"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="date_created">Date Project created: </label>
            {/* todays date/calendar selection? */}
            <input
              type="text"
              id="date_created"
              placeholder="Date Project created"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="comments">Project comments: </label>
            {/* meant for blog type correspondance not at Create Project stage */}
            <input
              type="text"
              id="comments"
              placeholder="Enter Project comments"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="category">Select Project category: </label>
            {/* drop down list of basic categories */}
            <input
              type="text"
              id="category"
              placeholder="Select Project category"
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            Submit Project
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateProjectForm;
