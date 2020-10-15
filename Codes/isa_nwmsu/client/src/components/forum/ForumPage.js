import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import image from "../layout/assets/carousel_image4.jpg"
import axios from 'axios';
import Navbar from "../layout/Navbar";
import AdminNavbar from "../layout/AdminNavbar";
import { Redirect } from "react-router-dom";

let navbar = undefined;
// let randomId =  Math.random(22,12345)*Math.random(22,12345);
class ForumPage extends Component {

    constructor() {
        super();
        this.state = {
            title:"",
            description:"",
            createdBy:localStorage.getItem("name"),
            errors: {}
        };
    }
    componentWillMount(){

        if (localStorage.getItem('jwtToken') != null) {
            this.setState({ loggedIn: true });
          }else{
              this.props.history.push('/login')
          }
          if (localStorage.getItem('role') === null || localStorage.getItem('role') === '50') {
            navbar = <Navbar />
          }
          if (localStorage.getItem('role') === '100') {
            navbar = <AdminNavbar />
          }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    

    onSubmit = e => {
        e.preventDefault();

        const forumData = {

            title: this.state.title,
            description: this.state.description,
            createdBy: this.state.createdBy

        };

        

        axios.post('http://localhost:5000/api/forum/newForum', forumData)
            .then(res => console.log(res.data))
            .then(this.props.history.push("/createForum"))
    };

    render() {
        const { errors } = this.state;

        return (
            <div>
                {navbar}

                <div class="row">
        <div class="col-md-2"></div>
        
        <div class="col-md-4" style={{marginTop: "3rem",borderRadius:"5%", marginBottom: "8rem", boxShadow:"0px 0px 10px 10px #303030", backgroundColor:"white"}}>
                    <h3>Create a new discussion..!!</h3>
                    <form onSubmit={this.onSubmit}>
                        {/* Forum Title */}
                        <label htmlFor="title">Title: </label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            value={this.state.title}
                            onChange={this.onChange}
                            placeholder="Enter a title for the discussion"
                        />
                        {/* Title description */}
                        <label htmlFor="description">Description: </label>
                        <textarea
                            
                            name="description"
                            id="description"
                            value={this.state.description}
                            onChange={this.onChange}
                            placeholder="Enter your thoughts here..!!"
                            rows="4"
                            cols="50"
                        />

                        {/* submit  */}
                        <button
                  style={{
                    width: "250px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                    
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Submit
                </button>
                    </form>
                </div>
                </div>
            </div>
        );
    }


}

export default ForumPage;
