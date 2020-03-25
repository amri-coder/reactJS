import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "../App.css";


class Portfolio extends React.Component {


    render() {
        return (<div className="portfolio">
        <ReactCSSTransitionGroup
        transitionName="anim"
        transitionAppear={true}
        transitionAppearTimeout={50000}
        transitionEnter={false}
        transitionLeave={false}
      >
        <h1>PORTFOLIO</h1>
    </ReactCSSTransitionGroup>

            <h3>Hello, This section will be available soon !</h3>
        </div>);
}
}
export default Portfolio;