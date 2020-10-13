import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import image from "../layout/assets/carousel_image4.jpg"
import axios from 'axios';
import Navbar from "../layout/Navbar";
import AdminNavbar from "../layout/AdminNavbar";
import { Redirect } from "react-router-dom";

let navbar = undefined;
let randomId =  Math.random(22,12345)*Math.random(22,12345);
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
            email: "",
            accommodationId: randomId.toString().substring(2),
            errors: {}
        };
    }
    componentWillMount(){

        if (localStorage.getItem('jwtToken') != null) {
            this.setState({ loggedIn: true });
          }else{
              this.props.history.push('/login')
          }
          if (localStorage.getItem('role') === null || localStorage.getItem('role') === '50') {
            navbar = <Navbar />
          }
          if (localStorage.getItem('role') === '100') {
            navbar = <AdminNavbar />
          }
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
            email: this.state.email,
            accommodationId: this.state.accommodationId,

        };

        

        axios.post('http://localhost:5000/api/services/accommodation', accommodationData)
            .then(res => console.log(res.data))
            .then(this.props.history.push("/home"))
    };

    render() {
        const { errors } = this.state;

        return (
            <div>
                {navbar}

                <div class="row">
        <div class="col-md-2"></div>
        
        <div class="col-md-4" style={{marginTop: "3rem",borderRadius:"5%", marginBottom: "8rem", boxShadow:"0px 0px 10px 10px #303030", backgroundColor:"white"}}>
                    <h3>Temporary Accommodation</h3>
                    <form onSubmit={this.onSubmit}>
                        {/* Accommodation Id */}
                        <label htmlFor="accommodationId">Accommodation Id</label>
                        <input
                            type="text"
                            name="accommodationId"
                            id="accommodationId"
                            value={randomId.toString().substring(2)}
                            disabled
                        />
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
                        {/* NON */}
                        <label htmlFor="non">919#</label>
                        <input
                            type="number"
                            name="non"
                            id="non"
                            value={this.state.non}
                            onChange={this.onChange}
                            placeholder="Enter 919#"
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
                        <label htmlFor="daysRequired">Days Required</label>
                        <input
                            type="number"
                            name="daysRequired"
                            id="daysRequired"
                            value={this.state.daysRequired}
                            onChange={this.onChange}
                            placeholder="Number of days"
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
                  style={{
                    width: "250px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                    
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Submit
                </button>
                    </form>
                </div>
                </div>
            </div>
        );
    }


}

export default Accommodation;