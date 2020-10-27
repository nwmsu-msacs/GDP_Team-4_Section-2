import axios from 'axios';
import React, { Component } from 'react';
import AdminNavbar from "../layout/AdminNavbar";
import Navbar from "../layout/Navbar";
import {  Card } from 'react-bootstrap'
import {Button} from 'semantic-ui-react'

let navbar = undefined;


function DeleteEvent(data, self) {

    axios.post('http://localhost:5000/api/events/deleteEvent', data)
      .then(res => self.go())
      .catch(err => console.log(err));
  };

  function ModifyEvent(data, self) {

    localStorage.setItem("eventId", data._id)

    self.push("/modifyEvent");
  };

const EventMap = (eventList, self) => {

  let res = eventList.map((data) => {

    return (


      <div class="row" key={data._id}>

        {/* <!-- Grid column --> */}

        <Card style={{ width: '70rem'}}>
          <Card.Body>
            <Card.Title style={{fontSize:"4rem"}}>{data.eventname}</Card.Title>
            <br/>
            <Card.Subtitle className="mb-2 text-muted"><i class="material-icons" style={{ color: "grey", opacity: "90%" }}>event</i>{data.eventdate.substring(0,10)}&nbsp;{data.eventdate.substring(11,19)}</Card.Subtitle>
            <Card.Text>
                <br/>
            <p class="text-uppercase blue-text"><strong>Venue: {data.eventvenue}</strong></p>
          <p class="text-uppercase blue-text"><strong>About the event:</strong></p>
          <p style={{textAlign:"justify",fontFamily:"Calibri"}}><strong>{data.description}</strong></p>
          <Card.Subtitle className="mb-2 text-muted">Sponsored by: {data.sponsor}</Card.Subtitle>
    </Card.Text>
    <p class="h4 text-center mb-4">
    <Button
            
            type="submit"
            className="btn btn-large waves-effect waves-light hoverable red accent-3"
            onClick={() => { DeleteEvent(data, self) }}
          >
            Delete
                </Button>&nbsp;&nbsp;
                <Button
            
            type="submit"
            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            onClick={() => { ModifyEvent(data, self) }}
          >
            Modify
                </Button>
              </p>
    </Card.Body>
    </Card>
        

      </div>

    );

  });

  return res;
}

class ManageEvent extends Component {


  state = {
    EventData: [],
    self: null,
  }

  componentDidMount() {
    this.setState({
      self: this.props.history
    });

    axios
      .get("http://localhost:5000/api/events/UpcomingEventsData")
      .then(res => {
        this.setState({
          EventData: res.data.eventdata
        });
      })
      .catch(err =>
        console.log("err: ", err)
      );
  }

  componentWillMount() {
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

  render() {

    return (

      <div>
        {navbar}
        <div>
          <br />
          <div class="row">
            <div class="col-md-9" >
          <h2 class="text-center" style={{fontFamily:"Arial",
                                        fontStyle:"Italic", 
                                        textShadow:"2px 2px #A9A9A9", 
                                        color:"#585858",
                                        position:"absolute",
                                        paddingLeft:"37rem"}}>Manage Events</h2>
          </div>
          <div class="col-md-3">
          <p class="h4 text-center mb-4">
    <Button
            
            type="submit"
            href="/createEvent"
            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            
          >
            Create Event
                </Button>
                </p>
                </div>
          </div>
          <hr style={{width:"50%"}}/>
          <div class="container" style={{ overflow:"hidden",columns: "2", width:"100%", height:"100%" }}>
            <p>{EventMap(this.state.EventData, this.state.self)}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default ManageEvent;
