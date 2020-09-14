import React, { Component } from "react";
import { Link } from "react-router-dom";
import IsaLogo from "../layout/assets/ISA.png"
import {connect} from "react-redux";
import {loginUser} from "../../actions/authActions";
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";


class Navbar extends Component {

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
        e.preventDefault();
        this.props.logoutUser();
        this.setState({loggedIn: false}); 
        
      };

    
    render(props) {
        console.log(`From NAVBAR${this.props.auth}`);
        return (
            <div className="navbar-fixed">
                <nav class="navbar navbar-expand-lg " style={{backgroundColor:"#0099FF"}}>
                    <a class="navbar-brand" href="#"><img src={IsaLogo} style={{height:"1.5em",}}></img></a>
                    {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button> */}
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item ">
                                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item px-3 dropdown">
                                <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Events
        </a>
                                <div class="dropdown-menu" style={{borderRadius:"15%"}} aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" href="/upcomingEvents">Upcoming Events</a>
                                    <a class="dropdown-item" href="/pastEvents">Past Events</a>
                                </div>
                            </li>
                            <li class="nav-item px-3 dropdown">
                                <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Services
        </a>
                                <div class="dropdown-menu" style={{borderRadius:"15%"}} aria-labelledby="navbarDropdownMenuLink">
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
                                <div class="dropdown-menu" style={{borderRadius:"15%"}} aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" href="/contact">Contact Us</a>
                                    <a class="dropdown-item" href ="/forum">ISA Forum</a>
                                    <a class="dropdown-item" href="/faq">FAQ?</a>
                                    <a class="dropdown-item" href="/developmentInProgress">Alumni</a>
                                </div>
                            </li>
                            </ul>

                            {(this.state.loggedIn) ?
                            <ul><li>
                                <a className='nav-link' href='/home'>
                                    <i className='fa fa-user'></i> 
                                </a>
                                </li>
                                </ul>
                            : null }

                            {(this.state.loggedIn == true) ?

                            <ul>
                                <li>
                                <a className='nav-link' onclick={this.onLogoutClick}>
                                    Logout
                                </a>
                                </li>
                            </ul>
                            : 
                            <ul><li>
                                <a className='nav-link' href='/login'>
                                    Login
                                </a>
                                </li>
                            </ul>
                            }
                            {/* <ul class="navbar-nav ml-auto" >
                            <li class="nav-item ">
                            <a class="nav-link" href="/login">Login</a>
                            </li>
                        </ul> */}
                    </div>
                </nav>
      </div >
    );
    }
}

// const mapStateToProps = state => {
//     return {auth:state.auth}
// };
// Navbar.propTypes = {
//     logoutUser: PropTypes.func.isRequired,
//     auth: PropTypes.object.isRequired
//   };
//   const mapStateToProps = state => ({
//     auth: state.auth
//   });
//   export default connect(
//     mapStateToProps,
//     { logoutUser }
//   )(Navbar);
export default Navbar;
