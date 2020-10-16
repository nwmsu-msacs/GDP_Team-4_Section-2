import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import pickup from "../../../../models/Pickup";
import classnames from "classnames";
import image from "../layout/assets/carousel_image4.jpg"
import axios from 'axios';
import Navbar from "../layout/Navbar";
import AdminNavbar from "../layout/AdminNavbar";
import { Input, Button, Form } from 'semantic-ui-react'
let navbar = undefined;
// let randomId =  Math.random(22,12345)*Math.random(22,12345);
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
      // pickupId: randomId.toString().substring(2),
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
// port for the service
    axios.post('http://localhost:5000/api/services/pickup', pickupData)
            .then(res => console.log(res.data))
            .then(this.props.history.push("/home"))
  //   // this.props.pickup(pickupData);
  
    
  };

  render() {

    //getting random id for form

   
    const { errors } = this.state;
// function
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

        {/* <label htmlFor="pickupId">Pickup Id</label>
          <input
            type="text"
            name="pickupId"
            id="pickupId"
            value={randomId.toString().substring(2)}
            disabled
            /> */}
          
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
            error={errors.name}
                  className={classnames("", {
                    invalid: errors.name
                  })}
                />
                
                <span className="red-text">
                  {errors.name}
                </span>
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
            error={errors.email}
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                />
                
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
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
            error={errors.cell}
                  className={classnames("", {
                    invalid: errors.cell
                  })}
                />
                
                <span className="red-text">
                  {errors.cell}
                </span>
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
            error={errors.luggage}
                  className={classnames("", {
                    invalid: errors.luggage
                  })}
                />
                
                <span className="red-text">
                  {errors.luggage}
                </span>
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
            error={errors.from}
                  className={classnames("", {
                    invalid: errors.from
                  })}
                />
                
                <span className="red-text">
                  {errors.from}
                </span>
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
            error={errors.to}
                  className={classnames("", {
                    invalid: errors.to
                  })}
                />
                
                <span className="red-text">
                  {errors.to}
                </span>

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
            error={errors.date}
                  className={classnames("", {
                    invalid: errors.date
                  })}
                />
                
                <span className="red-text">
                  {errors.date}
                </span>
                </Form.Field>
          {/* Airline */}
          <Form.Field>
          <label htmlFor="airline">Airline Name (optional)</label>
          <Input transparent
            type="text"
            name="airline"
            id="airline"
            value={this.state.airline}
            onChange={this.onChange}
            placeholder="Enter airline name"
            error={errors.airline}
                  className={classnames("", {
                    invalid: errors.airline
                  })}
                />
                
                <span className="red-text">
                  {errors.airline}
                </span>
                </Form.Field>
          {/* FlightNo */}
          <Form.Field>
          <label htmlFor="flightNo">Flight No(Optional)</label>
          <Input transparent
            type="text"
            name="flightNo"
            id="flightNo"
            value={this.state.flightNo}
            onChange={this.onChange}
            placeholder="Enter flight No"
            error={errors.flightNo}
                  className={classnames("", {
                    invalid: errors.flightNo
                  })}
                />
                
                <span className="red-text">
                  {errors.flightNo}
                </span>
                </Form.Field>

          {/* Submit  */}
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
      <div class="col-md-3"></div>
      </div>
      
      </div>
    );
  }


}


export default Pickup;