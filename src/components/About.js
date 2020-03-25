import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import img1 from "../images/icon-01.resized.png";
import img2 from "../images/icon-02.resized.png";
import img3 from "../images/icon-03.resized.png";
import img4 from "../images/icon-04.resized.png";
import "../App.css";
import "../css/about.css";

class About extends React.Component {
  render() {
    return (
        <div className="about">
        <ReactCSSTransitionGroup
        transitionName="anim"
        transitionAppear={true}
        transitionAppearTimeout={50000}
        transitionEnter={false}
        transitionLeave={false}
      >
        <h1>ABOUT ME</h1>
    </ReactCSSTransitionGroup>
        <div className="about1">My Skill Set </div>

        <div className="section">
          <img src={img1} alt="" />
          <p>
            <b>HTML, CSS & JAVASCRIPT, PHP, JAVA...</b>
          </p>

          <p>
            I have a lot of experience of working in front end and back end
            development. I can build impressive UIs using these fundamental web
            development languages.
          </p>
        </div>

        <div className="section">
          <img src={img2} alt="" />
          <p>
            <b>REACT JS</b>
          </p>
          <p>
            My main specialization is building powerful data driven UIs and web
            applications using the ReactJS framework. I do this full time for a
            living.{" "}
          </p>
        </div>

        <div className="section">
          <img src={img3} alt="" />
          <p>
            <b>REACT NATIVE</b>
          </p>
          <p>
            My React skills also become extremely useful for building cross
            platform mobile applications (specifically Android & iOS) using
            React Native.{" "}
          </p>
        </div>

        <div className="section">
          <img src={img4} alt="" />
          <p>
            <b>PERFORMANCE & SCALING</b>
          </p>
          <p>
            I can use my professional JavaScript experience to scale and improve
            existing applications. I make use of best practices to solve
            complicated problems and fix bugs.{" "}
          </p>
        </div>

        <div className="about1">Place to find me </div>

            <div className="font">
                <p>
                    <i class="fab fa-facebook-square" />
                </p>
                <h4>Facebook</h4>
            </div>
            <div className="font">
                <p>
                    <i class="fab fa-twitter-square" />
                </p>
                <h4>Twitter</h4>
            </div>
            <div className="font">
                <p>
                    <i class="fab fa-linkedin-square" />
                </p>
                <h4>LinkedIn</h4>
            </div>
            <div className="font">
                <p>
                    <i class="fab fa-youtube-square" />
                </p>
                <h4>YouTube</h4>
            </div>
            <div className="font">
                <p>
                    <i class="fab fa-github-square" />
                </p>
                <h4>GitHub</h4>
            </div>
            <div className="font">
                <p>
                    <i class="fa fa-university" />
                </p>
                <h4>Udemy</h4>
            </div>
            <div className="font">
                <p>
                    <i class="fab fa-stack-overflow" />
                </p>
                <h4>Stack OverFlow</h4>
            </div>
            <div className="font">
                <p>
                    <i class="fab fa-instagram-square" />
                </p>
                <h4>Instagram</h4>
            </div>
        
        

      </div>
    );
  }
}

export default About;
