import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import "../App.css";

class Resume extends React.Component {



    render() {
        return (<div className="resume">
        <ReactCSSTransitionGroup
        transitionName="anim"
        transitionAppear={true}
        transitionAppearTimeout={50000}
        transitionEnter={false}
        transitionLeave={false}
      >
        <h1>RESUME</h1>
            </ReactCSSTransitionGroup>
            
        
        </div>);
    }
}

export default Resume;