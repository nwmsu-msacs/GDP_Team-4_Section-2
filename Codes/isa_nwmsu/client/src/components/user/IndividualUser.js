import axios from 'axios';
import React, { Component } from 'react';
import AdminNavbar from "../layout/AdminNavbar";
import Navbar from "../layout/Navbar";
import {  Card } from 'react-bootstrap'
import {Button} from 'semantic-ui-react'
let navbar =  undefined;

function cancelPickup(data, self) {

  axios.post('http://localhost:5000/api/home/cancelPickup', data)
    .then(res => self.go())
    .catch(err => console.log(err));
};

function cancelAccommodation(data, self) {

  axios.post('http://localhost:5000/api/home/cancelAccommodation', data)
    .then(res => self.go())
    .catch(err => console.log(err));
};

function cancelVolunteer(data, self) {

    axios.post('http://localhost:5000/api/home/cancelVolunteer', data)
      .then(res => self.go())
      .catch(err => console.log(err));
  };

//get individual volunteer 
const VolunteerMap = (volunteerList, self) => {
  console.log("-----volunteerList", volunteerList);
  
  let res = volunteerList.map((data) => {
      
    return (

        


      <div class="row" key={data._id}>

<Card style={{ width: '50rem'}}>
          <Card.Body>
            <Card.Title>{data.firstName}&nbsp;{data.lastName}</Card.Title>
            <br/>
            <Card.Subtitle className="mb-2 text-muted"><i class="material-icons" style={{ color: "grey", opacity: "90%" }}>phone</i>{data.contactNo}</Card.Subtitle>
            <Card.Text>
            <p class="text-uppercase blue-text"><strong>Email: {data.email}</strong></p>
          <p class="text-uppercase blue-text"><strong>919# : {data.non}</strong></p>
          <p class="text-uppercase blue-text"><strong>car Type:  {data.carType}</strong></p>
          <p class="text-uppercase blue-text"><strong>Status:  {data.status}</strong></p>
    </Card.Text>
    <p class="h4 text-center mb-4">
    <Button
            
            type="submit"
            className="btn btn-large waves-effect waves-light hoverable red accent-3"
            onClick={() => { cancelVolunteer(data, self) }}
          >
            Cancel Request
                </Button></p>
          </Card.Body>
        </Card>

        
        

      </div>
      
    );
  });

  console.log(res);

  return res;
}

//get pickup data for single user

const pickUpMap = (pickupList, self) => {
    console.log("-----pickupList", pickupList);
    
    let res = pickupList.map((data) => {
      return (
  
  
        <div class="row" key = {data._id}>
  
  <Card style={{ width: '50rem'}}>
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <br/>
              <Card.Subtitle className="mb-2 text-muted"><i class="material-icons" style={{ color: "grey", opacity: "90%" }}>phone</i>{data.cell}</Card.Subtitle>
              <Card.Text>
              <p class="text-uppercase blue-text"><strong>Pickup Date: {data.date.substring(0,10)}</strong></p>
            <p class="text-uppercase blue-text"><strong>Pickup Time: {data.date.substring(11,19)}</strong></p>
            <p class="text-uppercase blue-text"><strong>Email:  {data.email}</strong></p>
            <p class="text-uppercase blue-text"><strong>From:  {data.from} &nbsp; &nbsp; To: {data.to}</strong></p>
            <p class="text-uppercase blue-text"><strong>Airline:  {data.airline} &nbsp;&nbsp; FlightNo: {data.flightNo}</strong></p>
            <p class="text-uppercase blue-text"><strong>Luggage:  {data.luggage}</strong></p>
            <p class="text-uppercase blue-text"><strong>Status:  {data.status}</strong></p>
      </Card.Text>
      <p class="h4 text-center mb-4">
      <Button
              
              type="submit"
              className="btn btn-large waves-effect waves-light hoverable red accent-3"
              onClick={() => { cancelPickup(data, self) }}
            >
              Cancel Request
                  </Button></p>
            </Card.Body>
          </Card>
  
          
          
  
        </div>
        
      );
    });
  
    console.log(res);
  
    return res;
  }

  //get individual accommodation
  const accommodationMap = (accommodationList, self) => {
    console.log("-----accommodationList", accommodationList);
  
    let res = accommodationList.map((data) => {
      return (
  
  
        <div class="row" key={data._id}>
  
          {/* <!-- Grid column --> */}
  
          {/* <Card.Group> */}
          <Card style={{ width: '50rem'}}>
            <Card.Body>
              <Card.Title>{data.firstName}&nbsp;{data.lastName}</Card.Title>
              <br/>
              <Card.Subtitle className="mb-2 text-muted"><i class="material-icons" style={{ color: "grey", opacity: "90%" }}>phone</i>{data.contactNo}</Card.Subtitle>
              <Card.Text>
              <p class="text-uppercase blue-text"><strong>Email: {data.email}</strong></p>
            <p class="text-uppercase blue-text"><strong>919#: {data.non}</strong></p>
            <p class="text-uppercase blue-text"><strong>Gender: {data.gender}</strong></p>
            <p class="text-uppercase blue-text"><strong>Days Required:  {data.daysRequired}</strong></p>
            <p class="text-uppercase blue-text"><strong>Status:  {data.status}</strong></p>
      </Card.Text>
      <p class="h4 text-center mb-4">
      <Button
              
              type="submit"
              className="btn btn-large waves-effect waves-light hoverable red accent-3"
              onClick={() => { cancelAccommodation(data, self) }}
            >
              Cancel Request
                  </Button></p>
            </Card.Body>
          </Card>
          {/* </Card.Group> */}
          
  
        </div>
  
      );
    });
  
    console.log(res);
  
    return res;
  }
  
  

class individualUser extends Component {

  constructor(props){
    super(props)
  }

  state = {
    volunteerData: [],
    pickupData: [],
    accommodationData: [],
    self: null
  }

  componentDidMount() {

    this.setState({
      self:this.props.history
    });
    axios
      .get("http://localhost:5000/api/home/userVolunteer/"+localStorage.getItem("email"))
      .then(res => {
        console.log(res.data.uservolunteerdata)
        this.setState({
          volunteerData: res.data.uservolunteerdata
        });
      })
      .catch(err =>
        console.log("err: ", err)
      );

      //get pickup
      axios
      .get("http://localhost:5000/api/home/userPickups/"+localStorage.getItem("email"))
      .then(res => {
        console.log(res.data.userpickupdata)
        this.setState({
          pickupData: res.data.userpickupdata
        });
      })
      .catch(err =>
        console.log("err: ", err)
      );

      //get accommodation

      axios
      .get("http://localhost:5000/api/home/userAccommodation/"+localStorage.getItem("email"))
      .then(res => {
        console.log(res.data.useraccommodationdata)
        this.setState({
          accommodationData: res.data.useraccommodationdata
        });
      })
      .catch(err =>
        console.log("err: ", err)
      );
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

  render() {

    return (

      <div>
        {navbar}
        <div>
        <br/>
        <h2 class="text-center" style={{fontFamily:"Arial", fontStyle:"oblique"}}>Request's You have created</h2>
        <hr style={{border:"1px dotted #0099FF", width:"45%"}}/>
        <h4 style={{fontFamily:"Arial", marginLeft:"8.5rem", fontStyle:"oblique"}}>Volunteer Requests's</h4>
          <div class="container" style={{ columns: "3", width:"100%" }}>
        <p>{VolunteerMap(this.state.volunteerData, this.state.self)}</p>
        </div>
        <hr style={{border:"1px dotted #0099FF", width:"83%"}}/>
        <h4 style={{fontFamily:"Arial", marginLeft:"8.5rem", fontStyle:"oblique"}}>Pickup Request's</h4>
        <div class="container" style={{ columns: "3", width:"100%" }}>
        <p>{pickUpMap(this.state.pickupData, this.state.self)}</p>
        </div>
        <hr style={{border:"1px dotted #0099FF", width:"83%"}}/>
        <h4 style={{fontFamily:"Arial", marginLeft:"8.5rem", fontStyle:"oblique"}}>Accommodation Request's</h4>
        <div class="container" style={{ columns: "3", width:"100%" }}>
        <p>{accommodationMap(this.state.accommodationData, this.state.self)}</p>
        </div>
        </div>
      </div>
    );
  }
}
export default individualUser;
