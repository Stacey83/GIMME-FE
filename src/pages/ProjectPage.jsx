import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

function ProjectPage() {
  const [projectData, setProjectData] = useState({ pledges: [] });
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectData(data);
      });
  }, []);

  const deleteProject = async () => {
    await fetch(`${process.env.REACT_APP_API_URL}projects/${id}`, {
      method: "delete",
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    });
    history.push("/");
  };

  return (
    <div id="ProjectPageTile">
      <h2>{projectData.title}</h2>
      <img src={projectData.image} />
      <h3>{projectData.description}</h3>
      <h3>Date Project Created: {projectData.date_created}</h3>
      <h3>{`Status: ${projectData.is_open}`}</h3>
      <h3>Comments: {projectData.comments}</h3>
      <h3>Pledges:</h3>
      <ul>
        {projectData.pledges.map((pledgeData, key) => {
          return (
            <li>
              {pledgeData.amount} from {pledgeData.supporter}
            </li>
          );
        })}
      </ul>
      {localStorage.getItem("token") && (
        <button onClick={deleteProject}> Delete Project </button>
      )}
    </div>
  );
}

export default ProjectPage;
