import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Navbar from "../layout/Navbar";
import { Redirect } from "react-router-dom";
// import Navbar from "../layout/Navbar";

class Home extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
    // this.setState({loggedIn: false}); 
    
  };

  // componentDidMount(){
  //   {Navbar}
  // }


  getNavBar=()=>{
    return(
    <Navbar/>
    );
  }
render() {
  console.log(this.props.auth);
    const { user } = this.props.auth;


return (
  <div>
     {this.getNavBar()} 
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        
        <div className="row">
          <div className="col s12 center-align">
            <h4>
            <p className="flow-text grey-text text-darken-1">
                Login Successful{" "}
                
              </p>
            <b>Indian Student Association</b> welcomes, {user.name.split(" ")[0]}
              
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
Home.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Home);