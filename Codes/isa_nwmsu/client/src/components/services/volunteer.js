import React, { Component } from "react";
import axios from 'axios';
import Navbar from "../layout/Navbar";
import AdminNavbar from "../layout/AdminNavbar";
import { Input, Button, Form } from 'semantic-ui-react'

const Validator = require("validator");
const isEmpty = require("is-empty");

let navbar = undefined;

const initialErrorState = {
    firstnameError:"",
    lastnameError:"",
    nonError:"",
    cartypeError:"",
    contactnoError:"",
    emailError:"",
}

class Volunteer extends Component {

    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            non: "",
            carType:"sedan",
            contactNo: "",
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

    validateForm = () =>{
        let firstnameError="";
    let lastnameError="";
    let nonError="";
    let cartypeError="";
    let contactnoError="";
    let emailError="";
     
         //name errors
     
         if(isEmpty(this.state.firstName)){
           firstnameError= "First name field is required"
         }
         if(isEmpty(this.state.lastName)){
            lastnameError= "Last name field is required"
          }
     
       
         if(isEmpty(this.state.email)){
           emailError= "Email field is required"
         }else if(!Validator.isEmail(this.state.email)){
           emailError= "Email entered is invalid"
         }
     
         if(isEmpty(this.state.contactNo)){
           contactnoError= "Cell field is required"
         }else if(this.state.contactNo.length !== 10 || isNaN(this.state.contactNo)){
           contactnoError= "Phone number is invalid"
         }
     
         if(isEmpty(this.state.carType)){
           cartypeError= "Error selecting car type"
         }
     
         if(isEmpty(this.state.non)){
           nonError= "To field is required"
         }else if(this.state.non.length !== 9 || isNaN(this.state.non)){
            nonError= "Enter full valid 919#"
          }
     
         if(firstnameError || lastnameError || emailError || contactnoError|| cartypeError|| nonError){
           this.setState({firstnameError, lastnameError, emailError, contactnoError, cartypeError, nonError});
           return false;
         }
     
         return true;
     
       }

    onSubmit = e => {
        e.preventDefault();
        const isFormValid = this.validateForm();
        if (isFormValid){
        const volunteerData = {

            firstName: this.state.firstName,
            lastName: this.state.lastName,
            non: this.state.non,
            carType: this.state.carType,
            contactNo: this.state.contactNo,
            email: this.state.email
        };

        this.setState(initialErrorState);
        
        axios.post('http://localhost:5000/api/services/volunteer', volunteerData)
            .then(res => console.log(res.data))
            .then(this.props.history.push("/individualUser"))
            .then(window.location.reload(false))
    }
};

    render() {

        return (
            <div>
                {navbar}
                <br/><br/>
                <div class="row">
        <div class="col-md-4"></div>
        
        <div class="col-md-4" >
        <p class="h3 text-center mb-4">Become a volunteer</p>
                    <Form onSubmit={this.onSubmit}>
                        
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
                            <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.firstnameError}
                          </div>
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
                            <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.lastnameError}
                          </div>
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
                            <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.emailError}
                          </div>
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
                            <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.nonError}
                          </div>
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
                                
                                    <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.cartypeError}
                                  </div>
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
                            <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.contactnoError}
                          </div>
                        </Form.Field>
                        {/* submit  */}
                        <p class="h4 text-center mb-4">
                            <Button 
                                
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
