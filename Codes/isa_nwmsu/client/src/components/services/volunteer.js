import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import image from "../layout/assets/carousel_image4.jpg"
import axios from 'axios';
import Navbar from "../layout/Navbar";


class Volunteer extends Component {

    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            non: "",
            carType:"",
            contactNo: "",
            errors: {}
        };
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };


    onSubmit = e => {
        e.preventDefault();

        const volunteerData = {

            firstName: this.state.firstName,
            lastName: this.state.lastName,
            non: this.state.non,
            carType: this.state.carType,
            contactNo: this.state.contactNo,

        };

        

        axios.post('http://localhost:5000/api/services/volunteer', volunteerData)
            .then(res => console.log(res.data))
            .then(this.props.history.push("/home"))
    };

    render() {
        const { errors } = this.state;

        return (
            <div>
                <Navbar />

                <div class="container">
                    <h3>Become a Volunteer</h3>
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
                        {/* non */}
                        <label htmlFor="non">919#</label>
                        <input
                            type="number"
                            name="non"
                            id="non"
                            value={this.state.non}
                            onChange={this.onChange}
                            placeholder="Enter 919#"
                        />

                        {/* car type */}
                        <label htmlFor="carType">Car Type</label>
                        <input
                            type="text"
                            name="carType"
                            id="carType"
                            value={this.state.carType}
                            onChange={this.onChange}
                            placeholder="Enter car type"
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
                            value="Request Pickup">Become Volunteer</button>
                    </form>
                </div>
            </div>
        );
    }


}

export default Volunteer;