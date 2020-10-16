import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import image from "../layout/assets/carousel_image4.jpg"
import axios from 'axios';
import Navbar from "../layout/Navbar";
import AdminNavbar from "../layout/AdminNavbar";
import { Redirect } from "react-router-dom";
import { Input, TextArea, Form } from 'semantic-ui-react'
import {Button} from 'react-bootstrap'

let navbar = undefined;
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
            .then(this.props.history.push("/isaForum"))
    };

    render() {
        const { errors } = this.state;

        return (
            <div>
                {navbar}
                <br/><br/>
                <div class="row">
        <div class="col-md-4"></div>
        
        <div class="col-md-4" >
        <p class="h3 text-center mb-4">Create a new discussion..!!</p>
                    <Form onSubmit={this.onSubmit}>
                        {/* Forum Title */}
                        <Form.Field>
                        <label htmlFor="title">Title: </label>
                        <Input transparent
                            type="text"
                            name="title"
                            id="title"
                            value={this.state.title}
                            onChange={this.onChange}
                            placeholder="Enter a title for the discussion"
                        />
                        </Form.Field>
                        {/* Title description */}
                        <Form.Field>
                        <label htmlFor="description">Description: </label>
                        <TextArea
                            
                            name="description"
                            id="description"
                            value={this.state.description}
                            onChange={this.onChange}
                            placeholder="Enter your thoughts here..!!"
                            rows="4"
                            cols="50"
                        />
                        </Form.Field>

                        {/* submit  */}
                        <p class="h4 text-center mb-4">
                            <Button 
                                
                                type="submit"
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                            >
                                Submit
                </Button></p>
                    </Form>
                </div>
                </div>
            </div>
        );
    }


}

export default ForumPage;
