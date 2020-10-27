import React from 'react';
import axios from 'axios';
import Navbar from "../layout/Navbar";
import AdminNavbar from "../layout/AdminNavbar";
import {Input, TextArea, Form} from 'semantic-ui-react';
import {Button} from 'react-bootstrap';

const isEmpty = require("is-empty");

let navbar = undefined;

const initialErrorState = {
    eventnameError:"",
    eventdateError:"",
    eventvenueError:"",
    descriptionError:"",
    sponsorError:"",
    
}

class CreateEvent extends React.Component {

  constructor() {
    super();
    this.state = {
      eventname: "",
      eventdate: "",
      eventvenue: "",
      description: "",
      sponsor:"",
      errors:{}

    };
  }
  // To track the changes
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }

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

  validateForm = () =>{
    let eventnameError="";
let eventdateError="";
let eventvenueError="";
let descriptionError="";
let sponsorError="";

 
     //name errors
 
     if(isEmpty(this.state.eventname)){
       eventnameError= "Event name field is required"
     }
     if(isEmpty(this.state.eventvenue)){
        eventvenueError= "Event venue field is required"
      }
 
     if(isEmpty(this.state.description)){
       descriptionError= "Event description is required"
     }
 
     if(isEmpty(this.state.sponsor)){
       sponsorError= "Sponsor field is required"
     }

     const formdate = new Date(this.state.eventdate)
    const milli = formdate.getTime();
    if(isEmpty(this.state.eventdate)){
      eventdateError="Select a date for event"
    }else if(milli < Date.now()){
      eventdateError = "Event cannot be in the past..!!"
    } 
 
     if(eventnameError || eventvenueError || eventdateError || descriptionError|| sponsorError){
       this.setState({eventdateError, eventnameError, eventvenueError, descriptionError, sponsorError});
       return false;
     }
 
     return true;
 
   }

  onSubmit = (e) => {
    e.preventDefault();
    const isFormValid = this.validateForm();
    if (isFormValid){
    const newevent = {
      eventname: this.state.eventname,
      eventdate: this.state.eventdate,
      eventvenue: this.state.eventvenue,
      description: this.state.description,
      sponsor: this.state.sponsor

    };

    this.setState(initialErrorState);
    axios.post('http://localhost:5000/api/events/createEvent', newevent)
      .then(res => console.log(res.data))
      .then(this.props.history.push("/upcomingEvents"))
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
        <p class="h3 text-center mb-4">Add an event</p>
        <Form class onSubmit={this.onSubmit}>
          
          {/* event Name */}
          <Form.Field>
          <label htmlFor="eventname">Event Name</label>
          <Input transparent
            type="text"
            name="eventname"
            id="eventname"
            value={this.state.eventname}
            onChange={this.onChange}
            placeholder="Enter event name"
            />
            <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.eventnameError}
                          </div>
                </Form.Field>

          {/* Date */}
          <Form.Field>
          <label htmlFor="eventdate">Event Date</label>
          <Input transparent
            type="datetime-local"
            name="eventdate"
            id="eventdate"
            value={this.state.date}
            onChange={this.onChange}
            placeholder="Select a date"
            />
            <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.eventdateError}
                          </div>
                </Form.Field>
          {/* event venue */}
          <Form.Field>
          <label htmlFor="eventvenue">Event Venue</label>
          <Input transparent
            type="text"
            name="eventvenue"
            id="eventvenue"
            value={this.state.eventvenue}
            onChange={this.onChange}
            placeholder="Enter venue details"
            />
            <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.eventvenueError}
                          </div>
                </Form.Field>

                {/* Event sponsor */}
                <Form.Field>
          <label htmlFor="sponsor">Event sponsor</label>
          <Input transparent
            type="text"
            name="sponsor"
            id="sponsor"
            value={this.state.sponsor}
            onChange={this.onChange}
            placeholder="Enter sponsor details"
            />
            <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.sponsorError}
                          </div>
                </Form.Field>
          {/* Event description */}
          <Form.Field>
          <label htmlFor="description">Event Descritpion</label>
          <TextArea
                            
                            name="description"
                            id="description"
                            value={this.state.description}
                            onChange={this.onChange}
                            placeholder="Enter your thoughts here..!!"
                            rows="4"
                            cols="50"
                            />
                            <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.descriptionError}
                          </div>
                </Form.Field>
               
          {/* Submit  */}
          <p class="h4 text-center mb-4">
                            <Button 
                                
                                type="submit"
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                            >
                                Add Event
                </Button></p>
        </Form>
      </div>
      <div class="col-md-3"></div>
      </div>
      
      </div>
    );
  }
}


export default CreateEvent;
