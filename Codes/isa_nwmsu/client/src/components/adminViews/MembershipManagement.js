import axios from 'axios';
import React, { Component } from 'react';
import AdminNavbar from "../layout/AdminNavbar";
import Navbar from "../layout/Navbar";
import {  Card } from 'react-bootstrap'
import {Button} from 'semantic-ui-react'

let navbar = undefined;

function endMembership(data, self) {

  axios.post('http://localhost:5000/api/services/endmembership', data)
    .then(res => self.go())
    .catch(err => console.log(err));
};

const memberShipMap = (membershipList, self) => {
  console.log("-----membershipList", membershipList);
  let res = membershipList.map((data) => {
    return (

        
      <div class="row" key = {data._id}>

<Card style={{ width: '70rem'}}>
          <Card.Body>
            <Card.Title>{data.firstName}&nbsp;{data.lastName}</Card.Title>
            <br/>
            <Card.Subtitle className="mb-2 text-muted"><i class="material-icons" style={{ color: "grey", opacity: "90%" }}>phone</i>{data.contactNo}</Card.Subtitle>
            <Card.Text>
          <p class="text-uppercase blue-text"><strong>Major: {data.major}</strong></p>
          <p class="text-uppercase blue-text"><strong>Email:  {data.email}</strong></p>
          <p class="text-uppercase blue-text"><strong>Membership Status:  {data.status}</strong></p>
    </Card.Text>
    <p class="h4 text-center mb-4">
    <Button
            
            type="submit"
            className="btn btn-large waves-effect waves-light hoverable red accent-3"
            onClick={() => { endMembership(data, self) }}
          >
            End Membership
                </Button>

                </p>
          </Card.Body>
        </Card>

        
      </div>
      
    );
  });

  console.log(res);

  return res;
}

class MembershipManagement extends Component {

  constructor(props){
    super(props);
  }

  state = {
    memberShipdata: [],
    self: null
  }

  componentDidMount() {

    this.setState({
      self: this.props.history
    }); 

    axios
      .get("http://localhost:5000/api/admin/membershipManagement")
      .then(res => {
        console.log(res.data.memberShipdata)
        this.setState({
          memberShipdata: res.data.membershipdata
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
        <h2 class="text-center" style={{fontFamily:"Arial"}}>Membership Management</h2>
          <div class="container" style={{ columns: "3", width:"100%"}}>
        <p>{memberShipMap(this.state.memberShipdata, this.state.self)}</p>
        </div>
        </div>
      </div>
    );
  }
}
export default MembershipManagement;
