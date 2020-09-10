import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import AdminNavbar from "../layout/AdminNavbar";
class AdminHome extends Component {


  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
    this.props.history.push("/")
  };

  
  getUser=()=>{
     
         if(this.props.auth.user!==null){
             return this.props.auth.user.name;

         }
         else{
             return "test";
         }

    
  }

render() {
    console.log(this.props.auth);
    // console.log("username",this.user.name);
    //const { user } = this.props.auth;
return (
    <div>
        
        <AdminNavbar/>
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
            <p className="flow-text grey-text text-darken-1">
                Login Successful{" "}
                
              </p>
            <b>Indian Student Association</b> welcomes, 
            {/* {this.user.name.split(" ")[0]} */}
            {this.getUser()}
              
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
             onClick={this.onLogoutClick}
            //  onClick={this.props.logoutUser()}
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
AdminHome.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(AdminHome);