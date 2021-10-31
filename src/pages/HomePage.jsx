import React, {useState, useEffect } from "react";
import { allProjects } from "../data";
import ProjectCard from "../components/ProjectCard/ProjectCard"


function HomePage() {
    const [projectList, setProjectList] = useState([]);
    const [pledgeList, setPledgeList] = useState([]);
    console.log(process.env.REACT_APP_API_URL);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setProjectList(data);
            console.log("Project list", data)
        });
        fetch(`${process.env.REACT_APP_API_URL}pledges`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setPledgeList(data);
            console.log("pledgelist", data)
        });
    }, []);

      const getPledgesTotalsInfo = () => {
        const totals = projectList.map(project => {
          const pledgesForThisProject = pledgeList.flatMap(pledge => {
            if(pledge.id === project.id){
              return pledge 
            } else {
              return []
            }
          })
          
          const pledgesTotal = pledgesForThisProject.reduce((runningTotal, currentPledge) => {
            return currentPledge.amount + runningTotal;
          }, 0)
          
          return ({
            title: project.title,
            image: project.image,
            id: project.id,
            goal: project.goal,
            pledges: pledgesForThisProject,
            pledgesTotal,
            percentageReached: pledgesTotal / (project.goal / 100) 
          })
        })
        const sortedTotals = totals.sort((a, b) => b.percentageReached - a.percentageReached)
        return sortedTotals.slice(0, 3);
      }
      
      const pledgesTotalInfo = getPledgesTotalsInfo();

      console.log("Pledges total info", pledgesTotalInfo);

    return (
        <div>
            <p id="intro">Welcome to GIMME <br/>Yes, GIMME all your money! <br/>Please feel free to GIMME all your money for the worst crowdfunding projects currently available. <br/>Check back regularly for more great worst crowdfunding projects.</p>,
            <div>
              <a id="projectintro">Top Project Achievers</a>
            </div>
            <div id="project-list">
                {pledgesTotalInfo.map((project, key) => {
                    return (
                        <div class="hpprojecttile">
                            {/* <p>{project.percentageReached}</p>
                            <p>{project.goal}</p> */}
                            <p>{project.title}</p>
                            <p>{project.image}</p>
                        </div>
                    )
                    // return <ProjectCard key={key} projectData={projectData} />;
                })}
            </div>
        </div>
    );
}

export default HomePage;
