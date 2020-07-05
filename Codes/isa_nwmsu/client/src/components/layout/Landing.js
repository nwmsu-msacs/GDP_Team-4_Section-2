import React, { Component } from "react";
import { Link } from "react-router-dom";
import image from "./assets/carousel_image4.jpg"
class Landing extends Component {
  render() {
    return (

      
      <div style={{ height: "100vh", 
                    backgroundImage: `url(${image})`, 
                    backgroundRepeat: "no-repeat", 
                    backgroundSize:"cover", 
                    alignItems :"center",
                    display: "flex",
                    justifyContent: "center",
                    }}  >
        {/*new UI*/}
        


        {/*old UI*/}
        <div className="row">

          <div className="col s12 center-align">
            
            <h4 style={{color:"white", textShadow: "5px 5px 5px black"}}>
              Welcome to Indian Student Association
            </h4>

            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;