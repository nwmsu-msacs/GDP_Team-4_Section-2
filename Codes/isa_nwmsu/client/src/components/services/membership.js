import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import image from "../layout/assets/carousel_image4.jpg"
import axios from 'axios';
import Navbar from "../layout/Navbar";


class Membership extends Component {

    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            major: "",
            email: "",
            gender: "",
            contactNo: "",
            errors: {}
        };
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    // onRadioChange = (e) => {
    //         this.setState({
    //           gender: e.target.value
    //         });
    //       }


    onSubmit = e => {
        e.preventDefault();

        const membershipData = {

            firstName: this.state.firstName,
            lastName: this.state.lastName,
            major: this.state.major,
            email: this.state.email,
            gender: this.state.gender,
            contactNo: this.state.contactNo,

        };

        

        axios.post('http://localhost:5000/api/services/membership', membershipData)
            .then(res => console.log(res.data))
            .then(this.props.history.push("/home"))
    };

    render() {
        const { errors } = this.state;

        return (
            <div>
                <Navbar />

                <div class="container">
                    <h3>Become A Member</h3>
                    <form onSubmit={this.onSubmit}>
                        {/* first name */}
                        <label htmlFor="Name">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            value={this.state.firstName}
                            onChange={this.onChange}
                            placeholder="Enter first name"
                        />

                        {/* last name */}
                        <label htmlFor="Name">last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            value={this.state.lastName}
                            onChange={this.onChange}
                            placeholder="Enter last name"
                        />
                        {/* email */}
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            value={this.state.email}
                            onChange={this.onChange}
                            placeholder="Enter email"
                        />
                </div>
            </div>
        );
    }


}

export default Membership;