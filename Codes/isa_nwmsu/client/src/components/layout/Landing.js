import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import image from "../layout/assets/adminblock.jpg"
import isa from "../layout/assets/isa.jpg"
import n from "../layout/assets/N.png"
import facebook from "../layout/assets/facebook.png"
import instagram from "../layout/assets/instagram.png"
import { List } from 'semantic-ui-react'
class Landing extends Component {


  getNavBar=()=>{
    return(
    <Navbar/>
    );
  }
  render() {
    return (
      <div>
        <Navbar/>
        <div class="row"> 
        <img src = {image} style={{width:"100%", filter:"brightness(55%)"}}/>
        <div class="container" style={{textAlign:'right', position:"absolute",marginLeft:"6rem",marginTop:"13rem"}}>
        <h1 style={{fontFamily:"Times New Roman", 
                    fontSize:"8rem",color:"white", 
                    fontStyle:"Italic", 
                    fontWeight:"bold", 
                    textShadow:"4px 4px 2px #606060"}}>
                      Indian Student</h1>
        </div>
        <div class="container" style={{textAlign:'right', position:"absolute",marginLeft:"8rem",marginTop:"21rem"}}>
        <h1 style={{fontFamily:"Times New Roman", 
                    fontSize:"8rem",
                    color:"white",
                    fontStyle:"italic",
                    fontWeight:"bold",
                    textShadow:"4px 4px 2px #606060"}}>
                      Association</h1>
        <h4 style={{fontFamily:"Times New Roman", 
                    fontSize:"1.5rem",
                    color:"white",
                    fontStyle:"italic",
                    fontWeight:"bold",
                    textShadow:"4px 4px 2px #606060"}}>- Northwest Missouri State University</h4>                      
        </div>
        </div>

        <div class="row">
          <div class="col-md-7">
            <div class="container">
              <h3 class="center-align" style={{fontFamily:"calibri",
                                        fontSize:"4rem",
                                        fontStyle:"Oblique"}}>
                                          Who are we?
                                          </h3>
              <p style={{fontSize:"1.4rem",fontFamily:"calibri", textAlign:"justify"}}>
              Indian Student Association (ISA) is an organization that works for 
              the Indian student welfare. As an organization we help students with 
              all woes they face during their stay here at Northwest as an international student. 
              </p>
              <p style={{fontSize:"1.4rem",fontFamily:"calibri", textAlign:"justify"}}>
              We also work to bring our home nation closer to us while we are miles apart,
              by celebrating Indian festivals and other important days in a timely and organized 
              manner. We take care of incoming first time graduate students. Pick them up from airport,
               arrange temporary accommodation and arrange food while also helping them in their search for the
                further accommodation.
              </p>
              <p style={{fontSize:"1.4rem",fontFamily:"calibri", textAlign:"justify"}}>
              We serve to represent and promote the common interests of the Indian students, create a spirit of
               togetherness, showcase India's rich cultural heritage in variety of international events and help
                the new students get oriented to Northwest Missouri State University
              </p>

            </div>
          </div>
        <div class="col-md-4">
          <img src={isa} style={{borderRadius:"50%", height:"30rem",position:"absolute", marginTop:"4rem"}}/>
        </div>
        </div>
        <br/>
        <footer style={{backgroundColor:"black"}}>
          <br/><br/>
          <div class="row">
            <div class="container col-md-4">
              <h5 style={{color:"white"}}>About the website:</h5>
              <p style={{color:"white", textAlign:"justify"}}>This website is developed by graduate students of the university.
                 The sole purpose of this website is to help Team-ISA better manage their services.
                 This website also helps students better know about the organization and the team here
                 at Northwest. </p>
                 <p style={{color:"white"}}>Development Team: </p>
                 <List bulleted style={{color:"white"}}>
                   <List.Item>Bharat Reddy</List.Item>
                   <List.Item>Bhavya Deepthi</List.Item>
                   <List.Item>Mahalakshmi</List.Item>
                   <List.Item>Sai Jyothsna</List.Item>
                   <List.Item>Dheeraj</List.Item>
                   <List.Item>Jeevan</List.Item>
                 </List>    
            </div>
            <div class="col-md-3">
            <h5 style={{color:"white"}}>Quick Links</h5>
            <List style={{color:"white"}}>
                    <List.Item><a href="/contact" style={{textDecoration:"none", color:"white"}}>Contact us</a></List.Item>
                   <List.Item><a href="/pickup" style={{textDecoration:"none", color:"white"}}>Request Pickup</a></List.Item>
                   <List.Item><a href="/accommodation" style={{textDecoration:"none", color:"white"}}>Request Accommodation</a></List.Item>
                   <List.Item><a href="/Volunteer" style={{textDecoration:"none", color:"white"}}>Become a volunteer</a></List.Item>
                   <List.Item><a href="/isaForum" style={{textDecoration:"none", color:"white"}}>ISA Forum</a></List.Item>
                   <List.Item><a href="/upcomingEvents" style={{textDecoration:"none", color:"white"}}>Upcoming Events</a></List.Item>
                 </List> 
            </div>
            <div class="col-md-3">
            <h5 style={{color:"white"}}>Connect with us</h5>
            <p> <a href="https://www.instagram.com/isa_nwmsu/"><img src = {instagram} style={{height:"2em"}}></img></a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.facebook.com/Indian-Student-AssociationISA-of-Northwest-Missouri-State-University-203948312972686/"><img src = {facebook} style={{height:"2em"}}></img></a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://nwmissouri.presence.io/organization/indian-student-association"><img src = {n} style={{height:"2em"}}></img></a></p>
            </div>

          </div>
          <hr style={{borderTop:"1px solid white", width:"83%"}}/>
          <div class="row">
            <div class="col center-align"> <p style={{color:"white"}}>© 2020 Team ISA</p></div>
          </div>
          <br/><br/>
        </footer>

      </div>
    );
  }
}
export default Landing;
