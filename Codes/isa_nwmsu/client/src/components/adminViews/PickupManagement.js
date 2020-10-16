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
            // style={{
            //   width: "150px",
            //   borderRadius: "3px",
            //   letterSpacing: "1.5px",
            //   marginTop: "1rem"
            // }}
            type="submit"
            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            onClick={() => { accept(data, self) }}
          >
            Accept
                </Button>&nbsp;&nbsp;

                <Button
            // style={{
            //   width: "150px",
            //   borderRadius: "3px",
            //   letterSpacing: "1.5px",
            //   marginTop: "1rem"
            // }}
            type="submit"
            className="btn btn-large waves-effect waves-light hoverable red accent-3"
            onClick= {() => {reject(data, self)}}
          >
            Reject
                </Button></p>
          </Card.Body>
        </Card>

        {/* <!-- Grid column --> */}
        {/* <div class="col-lg-4 col-md-6 mb-lg-0 mb-5" >
         
          <h5 class="font-weight-bold mt-4 mb-3">{data.name}</h5>
          <p class="text-uppercase blue-text"><strong>Pickup Date: {data.date.substring(0,10)}</strong></p>
          <p class="text-uppercase blue-text"><strong>Pickup Time: {data.date.substring(11,19)}</strong></p>
          <p class="text-uppercase blue-text"><strong>Email:  {data.email}</strong></p>
          <p class="text-uppercase blue-text"><strong>Cell:  {data.cell}</strong></p>
          <p class="text-uppercase blue-text"><strong>From:  {data.from} &nbsp; &nbsp; To: {data.to}</strong></p>
          <p class="text-uppercase blue-text"><strong>Airline:  {data.airline} &nbsp;&nbsp; FlightNo: {data.flightNo}</strong></p>
          <p class="text-uppercase blue-text"><strong>Luggage:  {data.luggage}</strong></p>
          <p class="text-uppercase blue-text"><strong>Status:  {data.status}</strong></p>
          <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                  onClick = {() => {accept(data,self)}}
                >
                  Accept
                </button>&nbsp;&nbsp;

                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable red accent-3"
                  onClick = {() => {reject(data,self)}}
                >
                  Reject
                </button>   
                <hr/>
        </div> */}
        

      </div>
      
    );
  });

  console.log(res);

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
        console.log(res.data.pickupdata)
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
        <h2 class="text-center" style={{fontFamily:"Arial"}}>Pickup Management</h2>
          <div class="container" style={{ columns: "3", width:"100%" }}>
        <p>{pickUpMap(this.state.pickUpdata, this.state.self)}</p>
        </div>
        </div>
      </div>
    );
  }
}
export default PickupManagement;