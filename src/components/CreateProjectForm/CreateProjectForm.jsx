import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./CreateProjectForm.css";

function CreateProjectForm() {
  const [projectData, setProjectData] = useState({
    date_created: new Date().toISOString(),
    is_open: true,
  });
  const history = useHistory();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProjectData((prevProjectData) => ({
      ...prevProjectData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`${process.env.REACT_APP_API_URL}projects/`, {
      method: "post",
      headers: {
        Authorization: `Token ${window.localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectData),
    });
    history.push("/");
  };

  return (
    <div>
      <div class="form">
        <form class="formcontent">
          <div>
            <label htmlFor="title">Project title: </label>
            <input
              value={projectData.title}
              type="text"
              id="title"
              placeholder="Enter Project title"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="description">Project description: </label>
            <input
              value={projectData.description}
              type="text"
              id="description"
              placeholder="Enter Project description"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="goal">Project goal: </label>
            <input
              value={projectData.goal}
              type="text"
              id="goal"
              placeholder="Enter Project goal"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="image">Project image URL: </label>
            <input
              value={projectData.image}
              type="text"
              id="image"
              placeholder="Enter Project image URL"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="comments">Project comments: </label>
            {/* meant for blog type correspondance not at Create Project stage */}
            <input
              value={projectData.comments}
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
              value={projectData.category}
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
