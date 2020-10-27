import axios from 'axios';
import React, { Component } from 'react';
import AdminNavbar from "../layout/AdminNavbar";
import Navbar from "../layout/Navbar";
import {  Card } from 'react-bootstrap'
import {Button} from 'semantic-ui-react'
let navbar =  undefined;

function reject(data, self) {

  axios.post('http://localhost:5000/api/services/volunteerreject', data)
    .then(res => self.go())
    .catch(err => console.log(err));
};

function accept(data, self) {

  axios.post('http://localhost:5000/api/services/volunteeraccept', data)
    .then(res => self.go())
    .catch(err => console.log(err));
};


//pending data
const VolunteerMap = (volunteerList, self) => {
  
  let res = volunteerList.map((data) => {
    return (

<div>
{data.status === "Pending"?
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
      :null}

        

      </div>
      
    );
  });

  return res;
}

//accepted rejected data
const ARVolunteerMap = (volunteerList, self) => {
  
  let res = volunteerList.map((data) => {
    return (

<div>
{data.status === "Accepted" || data.status === "Rejected"?
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
          </Card.Body>
        </Card>
</div>
      :null}

        

      </div>
      
    );
  });

  return res;
}

class VolunteerManagement extends Component {

  constructor(props){
    super(props)
  }

  state = {
    volunteerData: [],
    self: null
  }

  componentDidMount() {

    this.setState({
      self:this.props.history
    });
    axios
      .get("http://localhost:5000/api/admin/volunteerManagement")
      .then(res => {
        this.setState({
          volunteerData: res.data.volunteerdata
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
                                        }}>Volunteer Management</h2>
<hr style={{border:"1px dotted #0099FF", width:"83%"}}/>
<h4 class="text-center" style={{fontFamily:"Arial",
                                        fontStyle:"Italic", 
                                        textShadow:"2px 2px #A9A9A9", 
                                        color:"#585858",
                                        }}>Volunteer's pending action</h4>
          <div class="container" style={{ columns: "3", width:"100%" }}>
        <p>{VolunteerMap(this.state.volunteerData, this.state.self)}</p>
        </div>

        <hr style={{border:"1px dotted #0099FF", width:"83%"}}/>
        <h4 class="text-center" style={{fontFamily:"Arial",
                                        fontStyle:"Italic", 
                                        textShadow:"2px 2px #A9A9A9", 
                                        color:"#585858",
                                        }}>Accepted &amp; Rejected volunteer's</h4>

        <div class="container" style={{ columns: "3", width:"100%" }}>
        <p>{ARVolunteerMap(this.state.volunteerData, this.state.self)}</p>
        </div>
        </div>
      </div>
    );
  }
}
export default VolunteerManagement;
