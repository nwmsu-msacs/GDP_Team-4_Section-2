import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import image from "../layout/assets/carousel_image4.jpg"
import axios from 'axios';
import Navbar from "../layout/Navbar";


class Accommodation extends Component {

    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            non: "",
            daysRequired: "",
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

        const accommodationData = {

            firstName: this.state.firstName,
            lastName: this.state.lastName,
            non: this.state.non,
            daysRequired: this.state.daysRequired,
            gender: this.state.gender,
            contactNo: this.state.contactNo,

        };

        

        axios.post('http://localhost:5000/api/services/accommodation', accommodationData)
            .then(res => console.log(res.data))
            .then(this.props.history.push("/home"))
    };

    render() {
        const { errors } = this.state;

        return (
            <div>
                <Navbar />

                <div class="container">
                    <h3>Temporary Accommodation</h3>

                </div>
            </div>
        );
    }


}

export default Accommodation;