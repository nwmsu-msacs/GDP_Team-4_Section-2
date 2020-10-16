import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import image from "../layout/assets/carousel_image4.jpg"
import axios from 'axios';
import Navbar from "../layout/Navbar";
import AdminNavbar from "../layout/AdminNavbar";
import { Input, Button, Form } from 'semantic-ui-react'

let navbar = undefined;
let randomId = Math.random(22, 12345) * Math.random(22, 12345);

// const genderOptions = [
//     { key: 'm', text: 'Male', value: 'male' },
//     { key: 'f', text: 'Female', value: 'female' },
//     { key: 'o', text: 'Other', value: 'other' },
// ]
class Membership extends Component {

    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            major: "",
            email: "",
            gender: "Male",
            contactNo: "",
            membershipId: randomId.toString().substring(2),
            errors: {}
        };
    }


    onChange = e => {
        
        this.setState({ [e.target.id]: e.target.value });
        
    };

    

    componentWillMount() {
        if (localStorage.getItem('jwtToken') != null) {
            this.setState({ loggedIn: true });
        } else {
            this.props.history.push('/login')
        }

        if (localStorage.getItem('role') === null || localStorage.getItem('role') === '50') {
            navbar = <Navbar />
        }
        if (localStorage.getItem('role') === '100') {
            navbar = <AdminNavbar />
        }
    }
    onSubmit = e => {
        e.preventDefault();

        const membershipData = {

            firstName: this.state.firstName,
            lastName: this.state.lastName,
            major: this.state.major,
            email: this.state.email,
            gender: this.state.gender,
            contactNo: this.state.contactNo,
            membershipId: this.state.membershipId

        };



        axios.post('http://localhost:5000/api/services/membership', membershipData)
            .then(res => console.log(res.data))
            .then(this.props.history.push("/home"))
    };

    render() {
        const { errors } = this.state;

        return (
            <div>
                {navbar}
                <br/><br/>

                <div class="row">
                    <div class="col-md-4" >
                        
                    </div>

                    <div class="col-md-4" >
                        <p class="h3 text-center mb-4">Get a membership</p>

                        <Form onSubmit={this.onSubmit}>
                            {/* Membership Id */}
                            {/* <Label htmlFor="membershipId">Membership Id</Label>
                        <Input
                            type="text"
                            name="membershipId"
                            id="membershipId"
                            value={randomId.toString().substring(2)}
                            disabled
                        /> */}

                            {/* first name */}
                            <Form.Group widths="equal">
                            <Form.Field>
                                <label htmlFor="firstName">First Name</label>
                                <Input transparent
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    value={this.state.firstName}
                                    onChange={this.onChange}
                                    placeholder="Enter first name"
                                />
                            </Form.Field>
                            {/* last name */}
                            <Form.Field>
                                <label htmlFor="lastName">last Name</label>
                                <Input transparent
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    value={this.state.lastName}
                                    onChange={this.onChange}
                                    placeholder="Enter last name"
                                />
                            </Form.Field>
                            </Form.Group>
                            {/* email */}
                            <Form.Field>
                                <label htmlFor="email">Email</label>
                                <Input transparent
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    placeholder="Enter email"
                                />
                            </Form.Field>

                            {/* Gender */}

                            <Form.Field>
                                <label>Gender&nbsp;&nbsp;</label>
                                <select class="mdb-select" name="Gender" id="gender" onChange={this.onChange} value= {this.state.gender}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </Form.Field>
                            {/* <label htmlFor="male">
                            <input class="with-gap" onChange={this.onChange}
                                value="Male"
                                name="gender"
                                type="radio" checked={this.state.gender === "Male"}
                                checked={true}
                            />
                            <span>Male</span>
                        </label> */}
                            {/* &nbsp;&nbsp;
                                <label>
                            <input class="with-gap" onChange={this.onChange}
                                value="Female"
                                name="gender"
                                type="radio" checked={this.state.gender === "Female"}
                            />
                            <span>Female</span>
                        </label> */}

                            <br />
                            {/* major */}
                            <Form.Field>
                            <label htmlFor="major">Major</label>
                            <Input transparent
                                type="text"
                                name="major"
                                id="major"
                                value={this.state.major}
                                onChange={this.onChange}
                                placeholder="Enter Major"
                            />
                            </Form.Field>
                            {/* contact no */}
                            <Form.Field>
                            <label htmlFor="contactNo">Contact Number</label>
                            <Input transparent
                                type="tel"
                                name="contactNo"
                                id="contactNo"
                                value={this.state.contactNo}
                                onChange={this.onChange}
                                placeholder="Enter Cell number"
                            />
                            </Form.Field>


                            {/* submit  */}
                            <p class="h4 text-center mb-4">
                            <Button 
                                // style={{
                                //     width: "250px",
                                //     borderRadius: "3px",
                                //     letterSpacing: "1.5px",
                                //     marginTop: "1rem"

                                // }}
                                type="submit"
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                            >
                                Submit
                </Button></p>
                
                        </Form>
                    </div>
                </div>
            </div>
        );
    }


}

export default Membership;