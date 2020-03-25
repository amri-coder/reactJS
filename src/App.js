import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Contact from "./components/Contact";



export default function App() {
  return (
    <Router>
      <div>
        <nav className="madiv">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>

            <li>
              <Link to="/About">ABOUT ME</Link>
            </li>

            <li>
              <Link to="/Resume">RESUME</Link>
            </li>

            <li>
              <Link to="/Portfolio">PORTFOLIO</Link>
            </li>

            <li>
              <Link to="/Blog">BLOG</Link>
            </li>

            <li>
              <Link to="/Contact">CONTACT</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/About">
            <About />
          </Route>

          <Route path="/Resume">
            <Resume />
          </Route>

          <Route path="/Portfolio">
            <Portfolio />
          </Route>

          <Route path="/Blog">
            <Blog />
          </Route>

          <Route path="/Contact">
            <Contact />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



