import React from 'react';
import axios from 'axios';
import Navbar from "../layout/Navbar";
import AdminNavbar from "../layout/AdminNavbar";


let navbar = undefined;
class CreateEvent extends React.Component {

  constructor() {
    super();
    this.state = {
      eventname: "",
      eventdate: "",
      eventvenue: "",
      timings: "",
      description: ""


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
      timings: this.state.timings,
      description: this.state.description

    };
    axios.post('http://localhost:5000/api/events/createEvent', newevent)
      .then(res => console.log(res.data))
      .then(this.props.history.push("/adminHome"))
  }

  render() {
    return (
      <div>
        {navbar}
        <div>
      <form style={{ marginTop: '50px', marginLeft: '50px' }} onSubmit={this.onSubmit}>
        <div className="form-group col">
          <label className="col-sm-2 col-form-label font-weight-bold text-dark ">Event Name</label>
          <div className="col-sm-4">
            <input type="text" className="form-control-plaintext border border-primary rounded" id="eventname" name="eventname" value={this.state.eventname} onChange={this.onChange} placeholder="Diwali 2020/Holy 2020" />
          </div>
        </div>
        <div className="form-group col">
          <label className="col-sm-2 col-form-label font-weight-bold text-dark ">Event Date</label>
          <div className="col-sm-4">
            <input type="text" className="form-control-plaintext border border-primary rounded" id="eventdate" name="eventdate" value={this.state.eventdate} onChange={this.onChange} placeholder="10/25/2020" />
          </div>
        </div>
        <div className="form-group col">
          <label className="col-sm-2 col-form-label font-weight-bold text-dark ">Timings</label>
          <div className="col-sm-4">
            <input type="text" className="form-control-plaintext border border-primary rounded" id="timings" name="timings" value={this.state.timings} onChange={this.onChange} placeholder="10.30 a.m. - 12.30 p.m." />
          </div>
        </div>
        <div className="form-group col">
          <label className="col-sm-2 col-form-label font-weight-bold text-dark ">Venue</label>
          <div className="col-sm-4">
            <input type="text" className="form-control-plaintext border border-primary rounded" id="eventvenue" name="venue" value={this.state.eventvenue} onChange={this.onChange} placeholder="Ball Room" />
          </div>
        </div>
        <div className="form-group col">
          <label className="col-sm-2 col-form-label font-weight-bold text-dark ">Description</label>
          <div className="col-sm-4">
            <textarea className="form-control-plaintext border border-primary rounded" id="description" name="description" value={this.state.description} onChange={this.onChange} placeholder="Something about the event" />
          </div>
        </div>
        <br />
        <div style={{ marginLeft: "150px" }}>
          <button className=" btn btn-primary font-weight-bold text-dark mx-auto" type="submit">Add Event</button>
        </div>

      </form>
      </div>
      </div>
    );
  }
}


export default CreateEvent;