import axios from 'axios';
import React, { Component } from 'react';
import AdminNavbar from "../layout/AdminNavbar";

const pickUpMap = (pickupList) => {
  console.log("-----pickupList", pickupList);
  
  let res = pickupList.map((data) => {
    return (


      <div class="row">

        {/* <!-- Grid column --> */}
        <div class="col-lg-4 col-md-6 mb-lg-0 mb-5" >
         
          <h5 class="font-weight-bold mt-4 mb-3">{data.name}</h5>
          <p class="text-uppercase blue-text"><strong>Pickup Date: {data.date.substring(0,10)}</strong></p>
          <p class="text-uppercase blue-text"><strong>Pickup Time: {data.date.substring(11,19)}</strong></p>
          <p class="text-uppercase blue-text"><strong>Email:  {data.email}</strong></p>
          <p class="text-uppercase blue-text"><strong>Cell:  {data.cell}</strong></p>
          <p class="text-uppercase blue-text"><strong>From:  {data.from} &nbsp; &nbsp; To: {data.to}</strong></p>
          <p class="text-uppercase blue-text"><strong>Airline:  {data.airline} &nbsp;&nbsp; FlightNo: {data.flightNo}</strong></p>
          <p class="text-uppercase blue-text"><strong>Luggage:  {data.luggage}</strong></p>
          
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

class PickupManagement extends Component {
  state = {
    pickUpdata: []
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/admin/pickupManagement")
      .then(res => {
        console.log(res.data.pickupdata)
        this.setState({
          pickUpdata: res.data.pickupdata
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
        <h2>Pickup Management</h2>
        <p>{pickUpMap(this.state.pickUpdata)}</p>
        
      </div>
    );
  }
}
export default PickupManagement;