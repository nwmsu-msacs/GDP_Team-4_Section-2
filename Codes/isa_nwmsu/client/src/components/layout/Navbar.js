import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <div className="navbar-fixed">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">ISA</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item ">
                                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item px-3 dropdown">
                                <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Events
        </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" href="/developmentInProgress">Upcoming Events</a>
                                    <a class="dropdown-item" href="/developmentInProgress">Past Events</a>
                                </div>
                            </li>
                            <li class="nav-item px-3 dropdown">
                                <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Services
        </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" href="/developmentInProgress">Pickup</a>
                                    <a class="dropdown-item" href="/developmentInProgress">Temporary Accommodation</a>
                                    <a class="dropdown-item" href="/developmentInProgress">Pre-arrival Checklist</a>
                                    <a class="dropdown-item" href="/developmentInProgress">Post-arrival Checklist</a>
                                    <a class="dropdown-item" href="/developmentInProgress">Volunteer</a>
                                </div>
                            </li>
                            <li class="nav-item px-3 dropdown">
                                <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Help
        </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" href="/developmentInProgress">Contact Us</a>
                                    <a class="dropdown-item" href="/developmentInProgress">FAQ?</a>
                                    <a class="dropdown-item" href="/developmentInProgress">Alumni</a>
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
export default Navbar;
