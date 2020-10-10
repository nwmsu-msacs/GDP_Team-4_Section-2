import React, {Component} from 'react';
import holyimage from '../../assets/carousel_image1.jpg';
import diwaliimage from '../../assets/carousel_image2.jpg';
import independenceimage from '../../assets/carousel_image3.jpg';
import Indiannightimage from '../../assets/carousel_image4.jpg';
import Navbar from "../layout/Navbar";
import AdminNavbar from "../layout/AdminNavbar";

let navbar = undefined;

const eventslist =
    [
        {
            eventname: "HOLY",
            description: "This is a very good event celebrated in North India",
            imagepath: holyimage
        },
        {
            eventname: "DIWALI",
            description: "This is a very good event celebrated in North India",
            imagepath: diwaliimage
        },
        {
            eventname: "INDEPENDENCE DAY",
            description: "This is a very good event celebrated in North India",
            imagepath: independenceimage
        },
        {
            eventname: "INDIAN NIGHT",
            description: "This is a very good event celebrated in North India",
            imagepath: Indiannightimage
        }

    ];



const rendereventslist =
    eventslist.map((event) => {
        console.log(event);
        return (
            <div className="ui divided list" key={event.eventname}>
                <div className="item" >
                    <img className="ui large image" src={event.imagepath} />
                    <div className="content">
                        <a className="header" >{event.eventname}</a>
                        <hr />
                        <br />
                        <div className="description">
                            {event.description}
                        </div>
                    </div>


                </div>
                <br />
            </div>

        );


    }
    );




class PastEvents extends Component {


  componentWillMount(){
      console.log("------events------")
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
        
        <div className="ui container" >
                <h3 style={{ textAlign: 'center' }}>Past Events</h3><br />
                {rendereventslist}
            </div>
        
      </div>
      </div>
    );
  }
}

export default PastEvents;