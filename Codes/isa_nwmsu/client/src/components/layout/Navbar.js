import React, { Component } from "react";
import IsaLogo from "../layout/assets/ISA.png"
import {connect} from "react-redux";
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import NavLogin from "../layout/NavLogin";
import NavLogout from "../layout/NavLogout";
import NavRegister from "../layout/NavRegister";

class Navbar extends Component {


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
        return (
            <div className="navbar-fixed">
                <nav className="navbar navbar-expand-lg " style={{backgroundColor:"#0099FF"}}>
                    <a className="navbar-brand" href="/home"><img src={IsaLogo} alt="ISA-logo" style={{height:"1.5em",}}></img></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    {this.state.loggedIn === true ?
                        <ul class=" navbar-nav">
                            <li class="nav-item">
                                <a class = "nav-link" href ="/home">Home</a>
                            </li>
                        </ul>
                        :
                        <ul class=" navbar-nav">
                            <li class="nav-item" >
                                <a class="nav-link" href="/">Home</a>
                            </li>
                        </ul>
                        }
                        <ul class="navbar-nav">
                            <li class="nav-item px-3 dropdown">
                                <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Events
        </a>
                                <div class="dropdown-menu"   aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" href="/upcomingEvents">Upcoming Events</a>
                                    <a class="dropdown-item" href="/pastEvents">Past Events</a>
                                </div>
                            </li>
                            <li class="nav-item px-3 dropdown">
                                <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Services
        </a>
                                <div class="dropdown-menu"  aria-labelledby="navbarDropdownMenuLink">
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
                            {this.state.loggedIn===true?    
                            <li>
                            
                            <a class="nav-link" href="/individualUser" >
                                    Cancel Request
        </a>

                            </li>:
                            <li></li>}
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

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(Navbar);
