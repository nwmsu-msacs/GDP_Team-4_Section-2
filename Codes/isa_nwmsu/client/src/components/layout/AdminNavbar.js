import React, { Component } from "react";
import { Link } from "react-router-dom";
import IsaLogo from "../layout/assets/ISA.png"
import NavLogin from "../layout/NavLogin";
import NavLogout from "../layout/NavLogout";
import NavRegister from "../layout/NavRegister";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { logoutUser } from "../../actions/authActions";
class AdminNavbar extends React.Component {

    constructor(props) {
        super(props);
        
    }

    componentWillMount(){
        if(localStorage.getItem('jwtToken') != null){
            this.setState({loggedIn: true}); 
        } 
        else{
            this.setState({loggedIn: false}); 
        }
    }

    onLogoutClick = e => {
        console.log("---nav logout---")
        e.preventDefault();
        this.props.logoutUser();
        this.setState({loggedIn: false}); 
      };

    render() {
        return (
            <div className="navbar-fixed">
                <nav class="navbar navbar-expand-lg " style={{backgroundColor:"#0099FF"}}>
                    <a class="navbar-brand" href="#"><img src={IsaLogo} style={{height:"1.5em",}}></img></a>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        {this.state.loggedIn === true ?
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href ="/home">Home</a>
                            </li>
                        </ul>
                        :
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/">Home</a>
                            </li>
                        </ul>
                        }
                        <ul class="navbar-nav">
                            <li class="nav-item px-3 dropdown">
                                <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Events
        </a>
                                <div class="dropdown-menu"  aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" href="/upcomingEvents">Upcoming Events</a>
                                    <a class="dropdown-item" href="/pastEvents">Past Events</a>
                                </div>
                            </li>
                            <li class="nav-item px-3 dropdown">
                                <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Services
        </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="/membership">Membership</a>
                                    <a class="dropdown-item" href="/pickup">Pickup</a>
                                    <a class="dropdown-item" href="/accommodation">Temporary Accommodation</a>
                                    <a class="dropdown-item" href="https://www.nwmissouri.edu/admissions/apply/admitted/checklist.htm" target="new">Pre-arrival Checklist</a>
                                    <a class="dropdown-item" href="https://www.nwmissouri.edu/admissions/apply/admitted/checklist.htm" target="new">Post-arrival Checklist</a>
                                    <a class="dropdown-item" href="/volunteer">Volunteer</a>
                                </div>
                            </li>
                            <li class="nav-item px-3 dropdown">
                                <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Help
        </a>
                                <div class="dropdown-menu"  aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" href="/contact">Contact Us</a>
                                    <a class="dropdown-item" href ="/isaForum">ISA Forum</a>
                                    <a class="dropdown-item" href="/faq">FAQ?</a>
                                    <a class="dropdown-item" href="/alumni">Alumni</a>
                                </div>
                            </li>
                            <li class="nav-item px-3 dropdown">
                                <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Admin Functionalities
        </a>
                                <div class="dropdown-menu"  aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" href="/manageEvents">Manage Events</a>
                                    <a class="dropdown-item" href="/manageFaq">Manage Faq</a>
                                    <a class="dropdown-item" href ="/pickupManagement">Pickup Management</a>
                                    <a class="dropdown-item" href="/volunteerManagement">Volunteer Management</a>
                                    <a class="dropdown-item" href="/accommodationManagement">Manage Accommodation</a>
                                    <a class="dropdown-item" href="/membershipManagement">Members Enrolled</a>
                                </div>
                            </li>
                            </ul>
                            {(this.state.loggedIn === true) ?
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                            <NavLogout/>
                            </li>
                            </ul>
                            : 
                            
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                    <NavLogin/>
                           
                           </li>
                           <li className="nav-item">
                           <NavRegister/>
                           </li>
                           </ul>
                           
                            }

                    </div>
                </nav>
      </div >
    );
    }
}
AdminNavbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(AdminNavbar);
