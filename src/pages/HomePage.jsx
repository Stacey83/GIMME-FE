import React, {useState, useEffect } from "react";
import { allProjects } from "../data";
import ProjectCard from "../components/ProjectCard/ProjectCard"

function HomePage() {
    const [projectList, setProjectList] = useState([]);
    console.log(process.env.REACT_APP_API_URL);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects`)
        .then((results) => {
            console.log(results);
            return results.json();
        })
        .then((data) => {
            console.log(data);
            setProjectList(data);
        });
    }, []);

    return (
        <div>
            <p id="intro">Welcome to GIMME <br/>Yes, GIMME all your money! <br/>Please feel free to GIMME all your money for the worst crowdfunding projects currently available. <br/>Check back regularly for more great worst crowdfunding projects.</p>,
            <div id="project-list">
                {projectList.map((projectData, key) => {
                    return <ProjectCard key={key} projectData={projectData} />;
                })}
            </div>
        </div>
    );
}

export default HomePage;
