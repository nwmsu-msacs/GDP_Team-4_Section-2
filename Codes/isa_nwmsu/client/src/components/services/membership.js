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
                        

                        {/* Gender */}


                        <label>Gender&nbsp;&nbsp;</label><br />
                        <label htmlFor="male">
                            <input class="with-gap" onChange={this.onChange}
                                value="Male"
                                name="gender"
                                type="radio" checked={this.state.gender === "Male"}
                                checked={true}
                            />
                            <span>Male</span>
                        </label>
                                &nbsp;&nbsp;
                                <label>
                            <input class="with-gap" onChange={this.onChange}
                                value="Female"
                                name="gender"
                                type="radio" checked={this.state.gender === "Female"}
                            />
                            <span>Female</span>
                        </label>

                        <br />
                        {/* major */}
                        <label htmlFor="major">Major</label>
                        <input
                            type="text"
                            name="major"
                            id="major"
                            value={this.state.major}
                            onChange={this.onChange}
                            placeholder="Enter Major"
                        />
                        {/* contact no */}
                        <label htmlFor="contactNo">Contact Number</label>
                        <input
                            type="number"
                            name="contactNo"
                            id="contactNo"
                            value={this.state.contactNo}
                            onChange={this.onChange}
                            placeholder="Enter Cell number"
                        />


                        {/* submit  */}
                        <button
                            type="submit"
                            value="Request Pickup">Request Membership</button>
                    </form>
                </div>
            </div>
        );
    }


}

export default Membership;