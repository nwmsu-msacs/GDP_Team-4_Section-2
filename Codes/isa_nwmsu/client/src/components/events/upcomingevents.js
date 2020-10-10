import React, { Component } from 'react';

import Navbar from "../layout/Navbar";
import AdminNavbar from "../layout/AdminNavbar";
import { renderCustomComponent } from 'react-chat-widget';

let navbar = undefined;

class UpcomingEvents extends Component{

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


render(){
    return(
        <div>
            {navbar}
        <div className="ui container">
            <br/>
            <button class="ui primary right floated button">Create Event</button>
            </div>
        
           
        </div>

    );
}
}

export default UpcomingEvents;