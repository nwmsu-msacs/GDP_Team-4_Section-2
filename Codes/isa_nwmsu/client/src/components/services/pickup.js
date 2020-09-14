import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import pickup from "../../../../models/Pickup";
import classnames from "classnames";
import image from "../layout/assets/carousel_image4.jpg"
import axios from 'axios';
import Navbar from "../layout/Navbar";


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

    axios.post('http://localhost:5000/api/services/pickup', pickupData)
            .then(res => console.log(res.data))
            .then(this.props.history.push("/home"))
  //   // this.props.pickup(pickupData);
    
  };

  render() {
    const { errors } = this.state;

    return (
      <div>
        <Navbar/>
      
      <div class="container">
        <h3>Pickup</h3>
        <form onSubmit={this.onSubmit}>
          {/* name */}
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={this.state.name}
            onChange={this.onChange}
            placeholder="Enter name"
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
          {/* cell */}
          <label htmlFor="cell">Cell Number</label>
          <input
            type="number"
            name="cell"
            id="cell"
            value={this.state.cell}
            onChange={this.onChange}
            placeholder="Enter Cell number"
          />
          {/* luggage */}
          <label htmlFor="luggage">Luggage Count</label>
          <input
            type="number"
            name="luggage"
            id="luggage"
            value={this.state.luggage}
            onChange={this.onChange}
            placeholder="How many luggage are you carrying"
          />
          {/* from */}
          <label htmlFor="from">From</label>
          <input
            type="text"
            name="from"
            id="from"
            value={this.state.from}
            onChange={this.onChange}
            placeholder="Enter from address"
          />
          {/* to */}
          <label htmlFor="to">To</label>
          <input
            type="text"
            name="to"
            id="to"
            value={this.state.to}
            onChange={this.onChange}
            placeholder="Enter to address"
          />
          {/* date */}
          <label htmlFor="date">Date</label>
          <input
            type="datetime-local"
            name="date"
            id="date"
            value={this.state.date}
            onChange={this.onChange}
            placeholder="Select a date"
          />
          {/* airline */}
          <label htmlFor="airline">Airline Name (optional)</label>
          <input
            type="text"
            name="airline"
            id="airline"
            value={this.state.airline}
            onChange={this.onChange}
            placeholder="Enter airline name"
          />
          {/* flightNo */}
          <label htmlFor="flightNo">Flight No(Optional)</label>
          <input
            type="text"
            name="flightNo"
            id="flightNo"
            value={this.state.flightNo}
            onChange={this.onChange}
            placeholder="Enter flight No"
          />

          {/* submit  */}
          <button 
          type="submit"
          value="Request Pickup">Request Pickup</button>
        </form>
      </div>
      </div>
    );
  }


}

export default Pickup;