import axios from 'axios';
import React, { Component } from 'react';
import AdminNavbar from "../layout/AdminNavbar";
import Navbar from "../layout/Navbar";

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

        {/* <!-- Grid column --> */}
        <div class="col-lg-4 col-md-6 mb-lg-0 mb-5" >
          
          <h5 class="font-weight-bold mt-4 mb-3">{data.firstName}&nbsp;{data.lastName}</h5>
          <p class="text-uppercase blue-text"><strong>Email: {data.email}</strong></p>
          <p class="text-uppercase blue-text"><strong>Contact No: {data.contactNo}</strong></p>
          <p class="text-uppercase blue-text"><strong>919# : {data.non}</strong></p>
          <p class="text-uppercase blue-text"><strong>car Type:  {data.carType}</strong></p>
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
                  onClick={() => {accept(data, self)}}
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
                  onClick={() => {reject(data, self)}}
                >
                  Reject
                </button>      
                <hr/>
        </div>
        

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
        <h2>Volunteer Management</h2>
        <p>{VolunteerMap(this.state.volunteerData, this.state.self)}</p>
        </div>
      </div>
    );
  }
}
export default VolunteerManagement;