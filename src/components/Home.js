import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Typical from "react-typical";
import logo from "../images/amri.png";
import "../App.css";
import "../css/home.css";




class Home extends React.Component {
   
    
       



    render() {
        
        
        
        return (
            <div className="accueil">
           
              <ReactCSSTransitionGroup
                transitionName="anim"
                transitionAppear={true}
                transitionAppearTimeout={50000}
                transitionEnter={false}
                transitionLeave={false}
              >
                <h1>HOME</h1>
            </ReactCSSTransitionGroup>
            
              <img src={logo} alt=""/>
       
             
              <h4>Hello, I am </h4>
              <h2>AMRI</h2>
              <h4>
                I am
                <strong>
                
                <Typical steps={['Developer Web', 1000, 'Passionate about IT.', 500]} loop={Infinity} wrapper="p" />
                </strong>
                </h4>
               
            </div>



          );
    }
}

export default Home;