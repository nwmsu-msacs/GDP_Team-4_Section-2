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
    majorError:"",
    genderError:"",
    contactnoError:"",
    emailError:"",
}

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

    validateForm = () =>{
        let firstnameError="";
    let lastnameError="";
    let majorError="";
    let genderError="";
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
         }else if(this.state.contactNo.length !== 10){
           contactnoError= "Phone number is invalid"
         }
     
         if(isEmpty(this.state.gender)){
           genderError= "Error selecting gender"
         }
     
         if(isEmpty(this.state.major)){
           majorError= "To field is required"
         }
     
         
     
     
         if(firstnameError || lastnameError || emailError || contactnoError|| majorError|| genderError){
           this.setState({firstnameError, lastnameError, emailError, contactnoError, majorError,genderError});
           return false;
         }
     
         return true;
     
       }
    
    onSubmit = e => {
        e.preventDefault();

        const isFormValid = this.validateForm();
        if (isFormValid){
        const membershipData = {

            firstName: this.state.firstName,
            lastName: this.state.lastName,
            major: this.state.major,
            email: this.state.email,
            gender: this.state.gender,
            contactNo: this.state.contactNo

        };


        this.setState(initialErrorState);
        
        axios.post('http://localhost:5000/api/services/membership', membershipData)
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
                    <div class="col-md-4" >
                        
                    </div>

                    <div class="col-md-4" >
                        <p class="h3 text-center mb-4">Get a membership</p>

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
                                <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.majorError}
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

export default Membership;
