import axios from 'axios';
import React, { Component } from 'react';
import AdminNavbar from "../layout/AdminNavbar";
import Navbar from "../layout/Navbar";
import {  Card, Image } from 'react-bootstrap'
import {Button, FeedDate, Item} from 'semantic-ui-react'
let navbar = undefined;


const pastEventMap = (eventList, self) => {
  console.log("-----eventList", eventList);

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
    </Card.Body>
    </Card>
        

      </div>

    );

  });

  console.log(res);

  return res;
}

class PastEvents extends Component {

  constructor(props) {
    super(props);
  }
  state = {
    PastEventData: [],
    self: null,
  }

  componentDidMount() {
    this.setState({
      self: this.props.history
    });

    axios
      .get("http://localhost:5000/api/events/pastEventsData")
      .then(res => {
        console.log(res.data.eventdata)
        this.setState({
          PastEventData: res.data.eventdata
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
          <h2 class="text-center" style={{fontFamily:"Arial",fontStyle:"Italic", textShadow:"2px 2px #A9A9A9", color:"#585858"}}>Events Successfully Hosted</h2>
          <hr style={{width:"50%"}}/>
          <div class="container" style={{ overflow:"hidden",columns: "2", width:"100%", height:"100%" }}>
            <p>{pastEventMap(this.state.PastEventData, this.state.self)}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default PastEvents;
