import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavigationComponent from './components/Nav/Nav.jsx';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import "./App.css";
import LoginPage from './pages/LoginPage.jsx';
import CreateProjectPage from './pages/CreateProjectPage.jsx';

function App() {
  return (
    <div>
      <h1 id="title">GIMME</h1>
      <Router>
        <div>
          <NavigationComponent/>
          <nav>
            <Switch>
              <Route path="/project/:id">
                <ProjectPage />
              </Route>
              <Route path="/login">
                <LoginPage />
              </Route>
              <Route path="/createnewuser">
                <LoginPage />
              </Route>
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
