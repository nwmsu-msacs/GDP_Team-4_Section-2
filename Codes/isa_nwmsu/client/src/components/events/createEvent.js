import React from 'react';
import axios from 'axios';
import Navbar from "../layout/Navbar";
import AdminNavbar from "../layout/AdminNavbar";
import {Input, TextArea, Form} from 'semantic-ui-react';
import classnames from "classnames";
import {Button} from 'react-bootstrap';


let navbar = undefined;
class CreateEvent extends React.Component {

  constructor() {
    super();
    this.state = {
      eventname: "",
      eventdate: "",
      eventvenue: "",
      description: "",
      // eventimage:"",
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

  onSubmit = (e) => {
    e.preventDefault();

    const newevent = {
      eventname: this.state.eventname,
      eventdate: this.state.eventdate,
      eventvenue: this.state.eventvenue,
      description: this.state.description,
      sponsor: this.state.sponsor

    };
    axios.post('http://localhost:5000/api/events/createEvent', newevent)
      .then(res => console.log(res.data))
      .then(this.props.history.push("/upcomingEvents"))
  }

  render() {
    const { errors } = this.state;
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
            error={errors.eventname}
                  className={classnames("", {
                    invalid: errors.eventname
                  })}
                />
                
                <span className="red-text">
                  {errors.eventname}
                </span>
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
            error={errors.eventdate}
                  className={classnames("", {
                    invalid: errors.eventdate
                  })}
                />
                
                <span className="red-text">
                  {errors.eventdate}
                </span>
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
            error={errors.eventvenue}
                  className={classnames("", {
                    invalid: errors.eventvenue
                  })}
                />
                
                <span className="red-text">
                  {errors.eventvenue}
                </span>
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
            error={errors.eventvenue}
                  className={classnames("", {
                    invalid: errors.sponsor
                  })}
                />
                
                <span className="red-text">
                  {errors.sponsor}
                </span>
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
            error={errors.description}
                  className={classnames("", {
                    invalid: errors.description
                  })}
                />
                
                <span className="red-text">
                  {errors.description}
                </span>
                </Form.Field>
                {/* <Form.Field>
                <label htmlFor="eventimage">Event Image</label>
                  <Input 
                  type="file"
                  name="eventimage"
                  id="eventimage"
                  value={this.state.eventimage}
                  onChange={this.onChange}
                  />
                </Form.Field> */}

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
