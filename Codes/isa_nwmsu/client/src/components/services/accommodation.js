import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import image from "../layout/assets/carousel_image4.jpg"
import axios from 'axios';
import Navbar from "../layout/Navbar";
import AdminNavbar from "../layout/AdminNavbar";
import { Redirect } from "react-router-dom";
import { Input, Button, Form } from 'semantic-ui-react'

const Validator = require("validator");
const isEmpty = require("is-empty");

let navbar = undefined;

const initialErrorState = {
    firstnameError:"",
    lastnameError:"",
    nonError:"",
    daysrequiredError:"",
    genderError:"",
    contactnoError:"",
    emailError:"",
    fromDateError:"",
    toDateError:"",
}

class Accommodation extends Component {

    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            non: "",
            daysRequired: "",
            gender: "Male",
            contactNo: "",
            email: "",
            fromDate:"",
            toDate:"",
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

    validateForm = () =>{
        let firstnameError="";
    let lastnameError="";
    let nonError="";
    let daysrequiredError="";
    let genderError="";
    let contactnoError="";
    let emailError="";
    let fromDateError="";
    let toDateError="";
     
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

         const formFromdate = new Date(this.state.fromDate)
    const fromMilli = formFromdate.getTime();
    if(isEmpty(this.state.fromDate)){
      fromDateError="Select a date for accommodation start"
    }else if(fromMilli < Date.now()+43200000){
      fromDateError = "Accommodation needs to be atleast 12 hrs from now to process"
    }

    const formToDate = new Date(this.state.toDate)
    const toMilli = formToDate.getTime();
    if(isEmpty(this.state.toDate)){
      toDateError="Select a date for accommodation end"
    }else if(toMilli < fromMilli) {
      toDateError = "To date in the past, select a future date than from date"
    }else if(toMilli < fromMilli+(86400000 * Number(this.state.daysRequired))){
        toDateError="To date is invalid, select a valid to date or change days required"
        daysrequiredError= "Days required is invalid please check to date or change days required"
    }

     
         if(isEmpty(this.state.contactNo)){
           contactnoError= "Cell field is required"
         }else if(this.state.contactNo.length != 10 || isNaN(this.state.contactNo)){
           contactnoError= "Phone number is invalid"
         }
     
         if(isEmpty(this.state.daysRequired)){
           daysrequiredError= "No of days field is required"
         }else if(this.state.daysRequired <=0 ){
             daysrequiredError="No of days required should be atleast 1"
         }
     
         if(isEmpty(this.state.gender)){
           genderError= "Error selecting gender"
         }
     
         if(isEmpty(this.state.non)){
           nonError= "To field is required"
         }else if(this.state.non.length != 9 || isNaN(this.state.non)){
            nonError= "Enter full valid 919#"
          }
     
         if(firstnameError || lastnameError || emailError || contactnoError|| daysrequiredError|| nonError|| genderError||fromDateError||toDateError){
           this.setState({firstnameError, lastnameError, emailError, contactnoError, daysrequiredError, nonError,genderError,fromDateError,toDateError});
           return false;
         }
     
         return true;
     
       }
     

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };


    onSubmit = e => {
        e.preventDefault();

        const isFormValid = this.validateForm();
    if (isFormValid){
        const accommodationData = {

            firstName: this.state.firstName,
            lastName: this.state.lastName,
            non: this.state.non,
            daysRequired: this.state.daysRequired,
            gender: this.state.gender,
            contactNo: this.state.contactNo,
            email: this.state.email,
            fromDate: this.state.fromDate,
            toDate: this.state.toDate

        };

        
        this.setState(initialErrorState);

        axios.post('http://localhost:5000/api/services/accommodation', accommodationData)
            .then(res => console.log(res.data))
            .then(this.props.history.push("/individualUser"))
            .then(window.location.reload(false))

            
    }

    
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
        <p class="h3 text-center mb-4">Need Accommodation?</p>
                    <Form onSubmit={this.onSubmit}>
                        
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
                            <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.emailError}
                          </div>
                        </Form.Field>
                        {/* NON */}

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
                        

                        {/* Gender */}
                        <Form.Field>

                        <label>Gender&nbsp;&nbsp;</label>
                                <select class="mdb-select" name="Gender" id="gender" onChange={this.onChange} value= {this.state.gender}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                                
            <div style={{ fontSize: 12, color: "red" }}>
            {this.state.genderError}
          </div>
                        </Form.Field>


                        
                        {/* Days Required */}
                        <Form.Field>
                        <label htmlFor="daysRequired">Days Required</label>
                        <Input transparent
                            type="number"
                            name="daysRequired"
                            id="daysRequired"
                            value={this.state.daysRequired}
                            onChange={this.onChange}
                            placeholder="Number of days"
                            />
                            <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.daysrequiredError}
                          </div>
                        </Form.Field>
                        {/* from date */}
                        <Form.Group>
                        <Form.Field>
          <label htmlFor="fromDate">From Date</label>
          <Input transparent
            type="datetime-local"
            name="fromDate"
            id="fromDate"
            value={this.state.fromDate}
            onChange={this.onChange}
            placeholder="Select a date"
            />
            <div style={{ fontSize: 12, color: "red" }}>
            {this.state.fromDateError}
          </div>
                </Form.Field>
          {/* To date */}
          <Form.Field>
          <label htmlFor="toDate">To Date</label>
          <Input transparent
            type="datetime-local"
            name="toDate"
            id="toDate"
            value={this.state.toDate}
            onChange={this.onChange}
            placeholder="Select a date"
            />
            <div style={{ fontSize: 12, color: "red" }}>
            {this.state.toDateError}
          </div>
                </Form.Field>
                </Form.Group>
          
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

export default Accommodation;
