import axios from 'axios';
import React, { Component } from 'react';
import AdminNavbar from "../layout/AdminNavbar";
import Navbar from "../layout/Navbar";

let navbar = undefined;

function accept(data){

  // e.preventDefault();
  console.log("-----inside accept----")

  const accommodationdata = data;

  axios.post('http://localhost:5000/api/services/accommodationaccept', accommodationdata)
          .then(res => console.log(res.data))
          .then("/accommodationManagement")


};

const AccommodationMap = (accommodationList) => {
  console.log("-----accommodationList", accommodationList);
  
  let res = accommodationList.map((data) => {
    return (

      
      <div class="row">
        
        {/* <!-- Grid column --> */}
        <div class="col-lg-4 col-md-6 mb-lg-0 mb-5" >
          
          <h5 class="font-weight-bold mt-4 mb-3">{data.firstName}&nbsp;{data.lastName}</h5>
          <p class="text-uppercase blue-text"><strong>Email: {data.email}</strong></p>
          <p class="text-uppercase blue-text"><strong>Contact No: {data.contactNo}</strong></p>
          <p class="text-uppercase blue-text"><strong>919#: {data.non}</strong></p>
          <p class="text-uppercase blue-text"><strong>Days Required:  {data.daysRequired}</strong></p>
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
                  onClick = {accept(data)}
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

class AccommodationManagement extends Component {
  state = {
    AccommodationData: []
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/admin/accommodationManagement")
      .then(res => {
        console.log(res.data.accommodationdata)
        this.setState({
          AccommodationData: res.data.accommodationdata
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
        <h2>Accommodation Management</h2>
        <p>{AccommodationMap(this.state.AccommodationData)}</p>
        </div>
      </div>
    );
  }
}
export default AccommodationManagement;