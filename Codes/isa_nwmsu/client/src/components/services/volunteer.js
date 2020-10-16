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
// let randomId = Math.random(22,12345) * Math.random(22,12345);
class Volunteer extends Component {

    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            non: "",
            carType:"",
            contactNo: "",
            // volunteerId: randomId.toString().substring(2),
            email: "",
            errors: {}
        };
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

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

    onSubmit = e => {
        e.preventDefault();

        const volunteerData = {

            firstName: this.state.firstName,
            lastName: this.state.lastName,
            non: this.state.non,
            carType: this.state.carType,
            contactNo: this.state.contactNo,
            // volunteerId: this.state.volunteerId,
            email: this.state.email
        };
        
        axios.post('http://localhost:5000/api/services/volunteer', volunteerData)
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
        <div class="col-md-4"></div>
        
        <div class="col-md-4" >
        <p class="h3 text-center mb-4">Become a volunteer</p>
                    <Form onSubmit={this.onSubmit}>
                        {/* Volunteer id

                        <label htmlFor="volunteerId">Volunteer Id</label>
          <input
            type="text"
            name="volunteerId"
            id="volunteerId"
            value={randomId.toString().substring(2)}
            disabled
            /> */}
                        {/* first name */}
                        <Form.Group>
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
                        {/* Email */}
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
                        {/* non */}
                        <Form.Field>
                        <label htmlFor="non">919#</label>
                        <Input transparent
                            type="tel"
                            name="non"
                            id="non"
                            value={this.state.non}
                            onChange={this.onChange}
                            placeholder="Enter 919#"
                        />
                        </Form.Field>
                        {/* car type */}

                        <Form.Field>

                        <label>Car Type&nbsp;&nbsp;</label>
                                <select class="mdb-select" name="carType" id="carType" onChange={this.onChange} value= {this.state.carType}>
                                    <option value="sedan">Sedan</option>
                                    <option value="suv">SUV</option>
                                    <option value="hatchback">Hatchback</option>
                                    <option value="other">Other</option>
                                </select>
                        </Form.Field>
                        {/* <label htmlFor="carType">Car Type</label>
                        <input
                            type="text"
                            name="carType"
                            id="carType"
                            value={this.state.carType}
                            onChange={this.onChange}
                            placeholder="Enter car type"
                        /> */}
                        
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

export default Volunteer;