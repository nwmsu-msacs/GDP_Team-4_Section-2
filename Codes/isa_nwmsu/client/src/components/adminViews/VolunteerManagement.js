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
      
    );
  });

  console.log(res);

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
        console.log(res.data.volunteerData)
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
        <h2 class="text-center" style={{fontFamily:"Arial"}}>Volunteer Management</h2>
          <div class="container" style={{ columns: "3", width:"100%" }}>
        <p>{VolunteerMap(this.state.volunteerData, this.state.self)}</p>
        </div>
        </div>
      </div>
    );
  }
}
export default VolunteerManagement;
