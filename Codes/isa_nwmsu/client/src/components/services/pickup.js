import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import pickup from "../../../../models/Pickup";
import classnames from "classnames";
import image from "../layout/assets/carousel_image4.jpg"
import axios from 'axios';
import Navbar from "../layout/Navbar";
import AdminNavbar from "../layout/AdminNavbar";

let navbar = undefined;

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

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  componentWillMount(){
    if (localStorage.getItem('jwtToken') != null) {
      this.setState({ loggedIn: true });
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
      flightNo: this.state.flightNo
    };
// port for the service
    axios.post('http://localhost:5000/api/services/pickup', pickupData)
            .then(res => console.log(res.data))
            .then(this.props.history.push("/home"))
  //   // this.props.pickup(pickupData);
  
    
  };

  render() {
    const { errors } = this.state;
// function
    return (
      <div >
        {navbar}
      
      <div class="row">
        <div class="col-md-2"></div>
        
        <div class="col-md-4" style={{marginTop: "3rem",borderRadius:"5%", marginBottom: "8rem", boxShadow:"0px 0px 10px 10px #303030", backgroundColor:"white"}}>
        <h3 class="center">Pickup</h3>
        <form class onSubmit={this.onSubmit}>
          {/* Name */}
          
          <label htmlFor="Name">Name</label>
          <input
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
          
          {/* Email */}
          <label htmlFor="email">Email</label>
          <input
            type="text"
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
          
          {/* Cell */}
          <label htmlFor="cell">Cell Number</label>
          <input
            type="number"
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
          
          {/* Luggage */}
          <label htmlFor="luggage">Luggage Count</label>
          <input
            type="number"
            name="luggage"
            id="luggage"
            value={this.state.luggage}
            onChange={this.onChange}
            placeholder="How many luggage are you carrying"
            error={errors.luggage}
                  className={classnames("", {
                    invalid: errors.luggage
                  })}
                />
                
                <span className="red-text">
                  {errors.luggage}
                </span>
          
          {/* From */}
          <label htmlFor="from">From</label>
          <input
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
          
          {/* To */}
          <label htmlFor="to">To</label>
          <input
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
          {/* Date */}
          <label htmlFor="date">Date</label>
          <input
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
          
          {/* Airline */}
          <label htmlFor="airline">Airline Name (optional)</label>
          <input
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
          
          {/* FlightNo */}
          <label htmlFor="flightNo">Flight No(Optional)</label>
          <input
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
          

          {/* Submit  */}
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
                  Request Pickup
                </button>
        </form>
      </div>
      <div class="col-md-3"></div>
      </div>
      
      </div>
    );
  }


}


export default Pickup;