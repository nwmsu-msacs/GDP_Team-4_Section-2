import React, { Component } from "react";
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";

class NavLogout extends Component {


    constructor(props) {
        super(props)
    }

    onLogoutClick = e => {
        console.log("---nav logout---")
        // e.preventDefault();
        this.props.logoutUser();
        this.setState({loggedIn: false}); 
        // localStorage.removeItem("jwtToken");
        // localStorage.removeItem("email");
        // localStorage.removeItem("role");
        
      };

    render() {

        return (

            <ul>
                <li>
                    <a className='nav-link' href='/' onClick ={this.onLogoutClick}>
                        Logout
                    </a>
                </li>
            </ul>

        );

    };
}

NavLogout.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(NavLogout);