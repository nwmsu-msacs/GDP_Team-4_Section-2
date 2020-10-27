import axios from 'axios';
import React, { Component } from 'react';
import AdminNavbar from "../layout/AdminNavbar";
import Navbar from "../layout/Navbar";
import {  Card } from 'react-bootstrap'
import {Button} from 'semantic-ui-react'
let navbar = undefined;

function reject(data, self) {

  axios.post('http://localhost:5000/api/services/pickupreject', data)
    .then(res => self.go())
    .catch(err => console.log(err));
};

function accept(data, self) {

  axios.post('http://localhost:5000/api/services/pickupaccept', data)
    .then(res => self.go())
    .catch(err => console.log(err));
};

const pickUpMap = (pickupList, self) => {
  
  let res = pickupList.map((data) => {
    return (

<div>
  {data.status === "Pending"?
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
            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            onClick={() => { accept(data, self) }}
          >
            Accept
                </Button>&nbsp;&nbsp;

                <Button
           
            type="submit"
            className="btn btn-large waves-effect waves-light hoverable red accent-3"
            onClick= {() => {reject(data, self)}}
          >
            Reject
                </Button></p>
          </Card.Body>
        </Card>
        </div>
:
null
}
        
        
        
      </div>
      
    );
  });

  return res;
}


  //Send accepted and rejeted requests

  const ARpickUpMap = (pickupList, self) => {

    let res = pickupList.map((data) => {
      return (
  
  <div>
    {data.status === "Rejected" || data.status === "Accepted"?
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
            
                  </Card.Body>
                </Card>
                </div>
  :
  null
  
  }
          
          
          
        </div>
        
      );
    });
  

  return res;
}

class PickupManagement extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    pickUpdata: [],
    self: null
  }

  componentDidMount() {

    this.setState({
      self: this.props.history
    });


    axios
      .get("http://localhost:5000/api/admin/pickupManagement")
      .then(res => {
        this.setState({
          pickUpdata: res.data.pickupdata
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
        <h2 class="text-center" style={{fontFamily:"Arial",
                                        fontStyle:"Italic", 
                                        textShadow:"2px 2px #A9A9A9", 
                                        color:"#585858",
                                        }}>Pickup Management</h2>
<hr style={{border:"1px dotted #0099FF", width:"83%"}}/>
<h4 class="text-center" style={{fontFamily:"Arial",
                                        fontStyle:"Italic", 
                                        textShadow:"2px 2px #A9A9A9", 
                                        color:"#585858",
                                        }}>Pickups pending action</h4>

          <div class="container" style={{ columns: "3", width:"100%" }}>
        <p>{pickUpMap(this.state.pickUpdata, this.state.self)}</p>
        </div>
        <hr style={{border:"1px dotted #0099FF", width:"83%"}}/>
        <h4 class="text-center" style={{fontFamily:"Arial",
                                        fontStyle:"Italic", 
                                        textShadow:"2px 2px #A9A9A9", 
                                        color:"#585858",
                                        }}>Accepted &amp; Rejected pickups</h4>

        <div class="container" style={{ columns: "3", width:"100%" }}>
        <p>{ARpickUpMap(this.state.pickUpdata, this.state.self)}</p>
        </div>
        </div>
      </div>
    );
  }
}
export default PickupManagement;
