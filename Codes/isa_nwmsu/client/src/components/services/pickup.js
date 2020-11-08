import React, { Component } from "react";
import axios from 'axios';
import Navbar from "../layout/Navbar";
import AdminNavbar from "../layout/AdminNavbar";
import { Input, Button, Form } from 'semantic-ui-react'
let navbar = undefined;

const Validator = require("validator");
const isEmpty = require("is-empty");


const initialErrorState = {
    nameError:"",
    dateError:"",
    emailError:"",
    cellError:"",
    luggageError:"",
    fromError:"",
    toError:"",
    airlineError:"",
    flightNoError:"",
}

class Pickup extends Component {

  

  constructor() {
    super();
    this.state = {
      name: "",
      date: "",
      email: "",
      cell: "",
      luggage: "",
      from: "",
      to: "",
      airline: "",
      flightNo: "",
      errors: {}
    };
  }

  validateForm = () =>{
   let nameError="";
    let dateError="";
    let emailError="";
    let cellError="";
    let luggageError="";
    let fromError="";
    let toError="";
    let airlineError="";
    let flightNoError="";

    //name errors

    if(isEmpty(this.state.name)){
      nameError= "Name field is required"
    }

    const formdate = new Date(this.state.date)
    const milli = formdate.getTime();
    if(isEmpty(this.state.date)){
      dateError="Select a date for pickup"
    }else if(milli < Date.now()+43200000){
      dateError = "Pickup time needs to be atleast 12 hrs from now to process"
    }

  
    if(isEmpty(this.state.email)){
      emailError= "Email field is required"
    }else if(!Validator.isEmail(this.state.email)){
      emailError= "Email entered is invalid"
    }

    if(isEmpty(this.state.cell)){
      cellError= "Cell field is required"
    }else if(this.state.cell.length !== 10){
      cellError= "Phone number is invalid"
    }

    if(isEmpty(this.state.luggage)){
      luggageError= "Luggage field is required"
    }

    if(isEmpty(this.state.from)){
      fromError= "From field is required"
    }

    if(isEmpty(this.state.to)){
      toError= "To field is required"
    }

    if(isEmpty(this.state.airline)){
      airlineError= "Airline field is required"
    }

    if(isEmpty(this.state.flightNo)){
      flightNoError= "Flight number field is required"
    }


    if(nameError || dateError || emailError || cellError|| luggageError|| fromError|| toError|| airlineError||flightNoError){
      this.setState({nameError, dateError, emailError, cellError, luggageError, flightNoError,fromError, toError, airlineError});
      return false;
    }

    return true;

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

    const isFormValid = this.validateForm();
    if (isFormValid){

    const pickupData = {
      name: this.state.name,
      date: this.state.date,
      email: this.state.email,
      cell: this.state.cell,
      luggage: this.state.luggage,
      from: this.state.from,
      to: this.state.to,
      airline: this.state.airline,
      flightNo: this.state.flightNo,
      pickupId: this.state.pickupId
    };
    this.setState(initialErrorState);
// port for the service
    axios.post('http://localhost:5000/api/services/pickup', pickupData)
            .then(res => console.log(res.data))
            .then(this.props.history.push("/individualUser"))
            .then(window.location.reload(false))    
  }
};

  render() {

   
    return (
      <div >
        {navbar}
        <br/><br/>
      <div class="row">
      <div class="col-md-4" >
                        
                        </div>
        
        <div class="col-md-4" >
        <p class="h3 text-center mb-4">Need a pickup?</p>
        <Form class onSubmit={this.onSubmit}>
          
          {/* Name */}
          <Form.Field>
          <label htmlFor="name">Name</label>
          <Input transparent
            type="text"
            name="name"
            id="name"
            value={this.state.name}
            onChange={this.onChange}
            placeholder="Enter name"
            />
            <div style={{ fontSize: 12, color: "red" }}>
            {this.state.nameError}
          </div>
                </Form.Field>

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
          {/* Cell */}
          <Form.Field>
          <label htmlFor="cell">Cell Number</label>
          <Input transparent
            type="tel"
            name="cell"
            id="cell"
            value={this.state.cell}
            onChange={this.onChange}
            placeholder="Enter Cell number"
            />
            <div style={{ fontSize: 12, color: "red" }}>
            {this.state.cellError}
          </div>
                </Form.Field>
          {/* Luggage */}
          <Form.Group widths="equal">
          <Form.Field>
          <label htmlFor="luggage">Luggage Count</label>
          <Input transparent
            type="number"
            name="luggage"
            id="luggage"
            value={this.state.luggage}
            onChange={this.onChange}
            placeholder="How many bags?"
            />
            <div style={{ fontSize: 12, color: "red" }}>
            {this.state.luggageError}
          </div>
                </Form.Field>
          {/* From */}
          <Form.Field>
          <label htmlFor="from">From</label>
          <Input transparent
            type="text"
            name="from"
            id="from"
            value={this.state.from}
            onChange={this.onChange}
            placeholder="Enter from address"
            />
            <div style={{ fontSize: 12, color: "red" }}>
            {this.state.fromError}
          </div>
                </Form.Field>
          {/* To */}
          <Form.Field>
          <label htmlFor="to">To</label>
          <Input transparent
            type="text"
            name="to"
            id="to"
            value={this.state.to}
            onChange={this.onChange}
            placeholder="Enter to address"
            />
            <div style={{ fontSize: 12, color: "red" }}>
            {this.state.toError}
          </div>

                </Form.Field>
                </Form.Group>
          {/* Date */}
          <Form.Field>
          <label htmlFor="date">Date</label>
          <Input transparent
            type="datetime-local"
            name="date"
            id="date"
            value={this.state.date}
            onChange={this.onChange}
            placeholder="Select a date"
            />
            <div style={{ fontSize: 12, color: "red" }}>
            {this.state.dateError}
          </div>
                </Form.Field>
          {/* Airline */}
          <Form.Field>
          <label htmlFor="airline">Airline Name</label>
          <Input transparent
            type="text"
            name="airline"
            id="airline"
            value={this.state.airline}
            onChange={this.onChange}
            placeholder="Enter airline name"
            />
            <div style={{ fontSize: 12, color: "red" }}>
            {this.state.airlineError}
          </div>
                </Form.Field>
          {/* FlightNo */}
          <Form.Field>
          <label htmlFor="flightNo">Flight No</label>
          <Input transparent
            type="text"
            name="flightNo"
            id="flightNo"
            value={this.state.flightNo}
            onChange={this.onChange}
            placeholder="Enter flight No"
            />
            <div style={{ fontSize: 12, color: "red" }}>
            {this.state.flightNoError}
          </div>
                </Form.Field>

          {/* Submit  */}
          <p class="h4 text-center mb-4">
                            <Button 
                                
                                type="submit"
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                            >
                                Submit
                </Button>
                &nbsp;&nbsp;
                <a href="/home"><Button 
                                
                                type="button"
                                className="btn btn-large waves-effect waves-light hoverable red accent-3"
                            >
                                Cancel
                </Button></a></p>
        </Form>
      </div>
      <div class="col-md-3"></div>
      </div>
      
      </div>
    );
  }


}


export default Pickup;
