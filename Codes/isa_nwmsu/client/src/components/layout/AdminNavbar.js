import React, { Component } from "react";
import { Link } from "react-router-dom";
import IsaLogo from "../layout/assets/ISA.png"
class AdminNavbar extends React.Component {
    render() {
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
                                    <a class="dropdown-item" href="/alumni">Alumni</a>
                                </div>
                            </li>
                            <li class="nav-item px-3 dropdown">
                                <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Admin Functionalities
        </a>
                                <div class="dropdown-menu" style={{borderRadius:"15%"}} aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" href="/developmentInProgress">Manage Events</a>
                                    <a class="dropdown-item" href ="/developmentInProgress">Pickup Management</a>
                                    <a class="dropdown-item" href="/developmentInProgress">Volunteer Management</a>
                                    <a class="dropdown-item" href="/developmentInProgress">Manage Accommodation</a>
                                    <a class="dropdown-item" href="/developmentInProgress">Members Enrolled</a>
                                </div>
                            </li>
                            </ul>
                            <ul class="navbar-nav ml-auto" >
                            <li class="nav-item ">
                            <a class="nav-link" href="/login">Login</a>
                            </li>
                        </ul>
                    </div>
                </nav>
      </div >
    );
    }
}
export default AdminNavbar;
