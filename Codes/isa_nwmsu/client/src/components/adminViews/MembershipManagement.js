import axios from 'axios';
import React, { Component } from 'react';
import AdminNavbar from "../layout/AdminNavbar";
import Navbar from "../layout/Navbar";
import {Button, Table} from 'semantic-ui-react'

let navbar = undefined;

function endMembership(data, self) {

  axios.post('http://localhost:5000/api/services/endmembership', data)
    .then(res => self.go())
    .catch(err => console.log(err));
};

const memberShipMap = (membershipList, self) => {
  let res = membershipList.map((data) => {
    return (
<div>
        {data.status === "Active"?
      <div class="row" key = {data._id}>

<Table celled style={{tableLayout:"fixed", width:"100%" , textAlign:"center"}}>
  
    <Table.Body>
      <Table.Row >
        <Table.Cell>
        {data.firstName}&nbsp;{data.lastName}
        </Table.Cell>
        <Table.Cell>{data.gender}</Table.Cell>
        <Table.Cell>{data.contactNo}</Table.Cell>
        <Table.Cell style={{wordBreak:"break-all"}}>
          <div style={{textJustify:"auto" }}>{data.email}</div>
        </Table.Cell>
        <Table.Cell>{data.major}</Table.Cell>
        <Table.Cell>{data.status}</Table.Cell>
        <Table.Cell><p class="h4 text-center mb-4">
    <Button
            style={{width:"11rem", height:"2.5rem"}}
            type="submit"
            className="btn btn-large waves-effect waves-light hoverable red accent-3"
            onClick={() => { endMembership(data, self) }}
          >
            End Membership
                </Button>

                </p></Table.Cell>
      </Table.Row>

      </Table.Body>
      </Table>
        
      </div>
      :null}
      </div>
    );
  });

  return res;
}

class MembershipManagement extends Component {



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
        <h2 class="text-center" style={{fontFamily:"Arial",
                                        fontStyle:"Italic", 
                                        textShadow:"2px 2px #A9A9A9", 
                                        color:"#585858",
                                        }}>Membership Management</h2>


          <div class="container" style={{  width:"100%"}}>
          <Table celled style={{tableLayout:"fixed", textAlign:"center"}}> 
    <Table.Header>
      <Table.Row >
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Gender</Table.HeaderCell>
        <Table.HeaderCell>Contact No</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.HeaderCell>Major</Table.HeaderCell>
        <Table.HeaderCell>Membership Status</Table.HeaderCell>
        <Table.HeaderCell>Take Action</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    </Table>
    <Table.Row>
        <p>{memberShipMap(this.state.memberShipdata, this.state.self)}</p>
        </Table.Row>
        </div>
        </div>
      </div>
    );
  }
}
export default MembershipManagement;
