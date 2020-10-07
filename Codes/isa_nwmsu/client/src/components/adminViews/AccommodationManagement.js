import axios from 'axios';
import React, { Component } from 'react';
import Navbar from "../layout/Navbar";

const AccommodationMap = (accommodationList) => {
  console.log("-----accommodationList", accommodationList);
  
  let res = accommodationList.map((data) => {
    return (


      <div class="row">

        {/* <!-- Grid column --> */}
        <div class="col-lg-4 col-md-6 mb-lg-0 mb-5" >
          
          <h5 class="font-weight-bold mt-4 mb-3">{data.firstName}&nbsp;{data.lastName}</h5>
          <p class="text-uppercase blue-text"><strong>Contact No: {data.contactNo}</strong></p>
          <p class="text-uppercase blue-text"><strong>919#: {data.non}</strong></p>
          <p class="text-uppercase blue-text"><strong>Days Required:  {data.daysRequired}</strong></p>
          
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

  render() {

    return (

      <div>
        
        <br/>
        <h2>Accommodation Management</h2>
        <p>{AccommodationMap(this.state.AccommodationData)}</p>
        
      </div>
    );
  }
}
export default AccommodationManagement;