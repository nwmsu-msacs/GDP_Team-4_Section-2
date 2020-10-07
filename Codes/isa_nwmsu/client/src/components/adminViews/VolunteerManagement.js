import axios from 'axios';
import React, { Component } from 'react';
import AdminNavbar from "../layout/AdminNavbar";

const VolunteerMap = (volunteerList) => {
  console.log("-----volunteerList", volunteerList);
  
  let res = volunteerList.map((data) => {
    return (


      <div class="row">

        {/* <!-- Grid column --> */}
        <div class="col-lg-4 col-md-6 mb-lg-0 mb-5" >
          
          <h5 class="font-weight-bold mt-4 mb-3">{data.firstName}&nbsp;{data.lastName}</h5>
          <p class="text-uppercase blue-text"><strong>Contact No: {data.contactNo}</strong></p>
          <p class="text-uppercase blue-text"><strong>919# : {data.non}</strong></p>
          <p class="text-uppercase blue-text"><strong>car Type:  {data.carType}</strong></p>
          
          

              <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
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

class VolunteerManagement extends Component {
  state = {
    volunteerData: []
  }

  componentDidMount() {
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

  render() {

    return (

      <div>
        <AdminNavbar/>
        <br/>
        <h2>Volunteer Management</h2>
        <p>{VolunteerMap(this.state.volunteerData)}</p>
        
      </div>
    );
  }
}
export default VolunteerManagement;