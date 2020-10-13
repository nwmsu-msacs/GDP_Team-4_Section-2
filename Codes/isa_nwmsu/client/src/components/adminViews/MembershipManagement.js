import axios from 'axios';
import React, { Component } from 'react';
import AdminNavbar from "../layout/AdminNavbar";
import Navbar from "../layout/Navbar";

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

        {/* <!-- Grid column --> */}
        <div class="col-lg-4 col-md-6 mb-lg-0 mb-5" >
          
          <h5 class="font-weight-bold mt-4 mb-3">{data.firstName}&nbsp;{data.lastName}</h5>
          <p class="text-uppercase blue-text"><strong>Contact No: {data.contactNo}</strong></p>
          <p class="text-uppercase blue-text"><strong>Major: {data.major}</strong></p>
          <p class="text-uppercase blue-text"><strong>Email:  {data.email}</strong></p>
          <p class="text-uppercase blue-text"><strong>Membership Status:  {data.status}</strong></p>
          

                <button
                  style={{
                    width: "250px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable red accent-3"
                  onClick = {() => { endMembership(data, self) }}
                >
                  End Membership
                </button>   
                <hr/>
        </div>
        

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
        <h2>Active Members</h2>
        <p>{memberShipMap(this.state.memberShipdata, this.state.self)}</p>
        </div>
      </div>
    );
  }
}
export default MembershipManagement;