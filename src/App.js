import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavigationComponent from './components/Nav/Nav.jsx';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import "./App.css";
import LoginPage from './pages/LoginPage.jsx';
import CreateNewUser from './pages/CreateNewUser.jsx';
import CreateProjectPage from './pages/CreateProjectPage.jsx';
import ProjectCardPage from './pages/ProjectCardPage.jsx';

function App() {
  return (
    <div>
      <Router>
      <NavigationComponent/>
      <h1 id="maintitle">GIMME</h1>
        <div>
          <nav>
            <Switch>
              <Route path="/project/:id">
                <ProjectPage />
              </Route>
              <Route path="/projectCardPage">
                <ProjectCardPage />
              </Route>
              <Route path="/login">
                <LoginPage />
              </Route>
              {/* <Route path="/createNewUser">
                <CreateNewUser />
              </Route> */}
              <Route exact path="/createproject">
                <CreateProjectPage />
              </Route>
              <Route path="">
                <HomePage />
              </Route>
            </Switch>
          </nav>
        </div>
      </Router>
    </div>
  );
}

export default App;
