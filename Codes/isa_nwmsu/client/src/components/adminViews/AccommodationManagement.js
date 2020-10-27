import axios from 'axios';
import React, { Component } from 'react';
import AdminNavbar from "../layout/AdminNavbar";
import Navbar from "../layout/Navbar";
import {  Card } from 'react-bootstrap'
import {Button} from 'semantic-ui-react'
let navbar = undefined;

function reject(data, self) {

  axios.post('http://localhost:5000/api/services/accommodationreject', data)
    .then(res => self.go())
    .catch(err => console.log(err));
};

function accept(data, self) {

  axios.post('http://localhost:5000/api/services/accommodationaccept', data)
    .then(res => self.go())
    .catch(err => console.log(err));
};

//pending cards

const AccommodationMap = (accommodationList, self) => {

  let res = accommodationList.map((data) => {
    return (

<div>
    {data.status === "Pending"?
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
          <p class="text-uppercase blue-text"><strong>From Date: {data.fromDate.substring(0,10)}</strong></p>
            <p class="text-uppercase blue-text"><strong>To Date: {data.toDate.substring(0,10)}</strong></p>
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
        {/* </Card.Group> */}
</div>        
:
null
    }
    </div>
    );
  });

  return res;
}

//Accept and reject cards
const ARAccommodationMap = (accommodationList, self) => {

  let res = accommodationList.map((data) => {
    return (

<div>
    {data.status === "Accepted" || data.status === "Rejected"?
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
          <p class="text-uppercase blue-text"><strong>From Date: {data.fromDate.substring(0,10)}</strong></p>
            <p class="text-uppercase blue-text"><strong>To Date: {data.toDate.substring(0,10)}</strong></p>
          <p class="text-uppercase blue-text"><strong>Status:  {data.status}</strong></p>
    </Card.Text>
    
          </Card.Body>
        </Card>
        {/* </Card.Group> */}
</div>        
:
null
    }
    </div>
    );
  });

  return res;
}



class AccommodationManagement extends Component {

  constructor(props) {
    super(props);
  }
  state = {
    AccommodationData: [],
    self: null,
  }

  componentDidMount() {
    this.setState({
      self: this.props.history
    });

    axios
      .get("http://localhost:5000/api/admin/accommodationManagement")
      .then(res => {
        this.setState({
          AccommodationData: res.data.accommodationdata
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
          <h2 class="text-center" style={{fontFamily:"Arial",
                                        fontStyle:"Italic", 
                                        textShadow:"2px 2px #A9A9A9", 
                                        color:"#585858",
                                        }}>Accommodation Management</h2>
<hr style={{border:"1px dotted #0099FF", width:"83%"}}/>
<h4 class="text-center" style={{fontFamily:"Arial",
                                        fontStyle:"Italic", 
                                        textShadow:"2px 2px #A9A9A9", 
                                        color:"#585858",
                                        }}>Accommodations pending action</h4>
                                     
          <div class="container" style={{ columns: "3", width:"100%" }}>
            <p>{AccommodationMap(this.state.AccommodationData, this.state.self)}</p>
          </div>

          <hr style={{border:"1px dotted #0099FF", width:"83%"}}/>
        <h4 class="text-center" style={{fontFamily:"Arial",
                                        fontStyle:"Italic", 
                                        textShadow:"2px 2px #A9A9A9", 
                                        color:"#585858",
                                        }}>Accepted &amp; Rejected accommodations</h4>

        <div class="container" style={{ columns: "3", width:"100%" }}>
        <p>{ARAccommodationMap(this.state.AccommodationData, this.state.self)}</p>
        </div>
        </div>
      </div>
    );
  }
}
export default AccommodationManagement;
