import axios from 'axios';
import React, { Component } from 'react';
import AdminNavbar from "../layout/AdminNavbar";
import Navbar from "../layout/Navbar";
import Replies from "../forum/Replies";
import {Form, TextArea, Item} from 'semantic-ui-react'
import {Button} from 'react-bootstrap'
let navbar = undefined;
let forumData = undefined

const Validator = require("validator");
const isEmpty = require("is-empty");

const initialErrorState = {
    replyError:"",
}

const ForumMap = (ForumList, self) => {
  
  let res = ForumList.map((data) => {
    return (


      <div class="row" key = {data._id}>

        <Item.Group>
          <Item>
            <Item.Image>
              <p style={{fontSize:"5rem", alignContent:"justify", textAlign:"center"}}>{data.title.substring(0,1)}</p>
            </Item.Image>
            <Item.Content>
              <Item.Header as ='a'><h3 style={{fontSize:"2rem", fontFamily:"Arial",textAlign:"center"}}> {data.title}</h3></Item.Header>
              <Item.Description><p style={{fontSize:"1rem",fontFamily:"Arial", textAlign:"justify"}}>{data.description}</p></Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
        
        

      </div>
      
    );
  });

  return res;
}


class ReplyToIndividualForum extends Component {

    constructor() {
        super();
        this.state = {

    replyContent:"",
    replyBy:"",
    ForumData: [],
            errors: {}
        };
    }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
};

validateForm = () =>{
  let replyError="";
   //reply errors

   if(isEmpty(this.state.replyContent)){
     replyError= "reply cannot be empty"
   }
         


   if(replyError){
     this.setState({replyError});
     return false;
   }

   return true;

 }

  onSubmit = e => {
    e.preventDefault();
    
    const isFormValid = this.validateForm();
    if (isFormValid){
    const newReply = {

        replyContent: this.state.replyContent,
        replyBy: localStorage.getItem("name"),
        forumId: localStorage.getItem("discussionId"),
        userEmail: localStorage.getItem("email")

    }

    this.setState(initialErrorState);
    axios.post('http://localhost:5000/api/forum/reply', newReply)
            .then(res => console.log(res.data))
            .then(this.props.history.go())
    }
  };
    



  componentDidMount() {
    this.setState({
      self: this.props.history
    });

    axios
      .get("http://localhost:5000/api/forum/singleForum/"+localStorage.getItem("discussionId"))
      .then(res => {
        this.setState({
          ForumData: res.data.individualForum
        });
      })
      .catch(err =>
        console.log("err: ", err)
      );

    
  }

  componentWillMount() {
    if (localStorage.getItem('jwtToken') != null) {
      this.setState({ loggedIn: true });
    }
    else{
      this.props.history.push("/login")
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
        <br/><br/>
        <div class="container" style={{width:"70%"}}>
    <p>{ForumMap(this.state.ForumData, this.state.self)}</p>
          <br />

          <Replies/>
        
        <div class ="row">                    
        <div class="col-md-12">
                    <Form onSubmit={this.onSubmit}>
                        
                        {/* Title description */}
                        <Form.Group widths="equal">
                        <Form.Field>
                        
                        <TextArea 
                            style={{minHeight: "3.5rem"}}
                            name="replyContent"
                            id="replyContent"
                            value={this.state.replyContent}
                            onChange={this.onChange}
                            placeholder="Enter your thoughts here..!!"
                            rows="4"
                            cols="50"
                            
                        /><div style={{ fontSize: 12, color: "red" }}>
                        {this.state.replyError}
                      </div>
                        </Form.Field>
                        
                        {/* submit  */}
                        
                        <p class="h4 text-center mb-4">
                          <Button

                  
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Reply
                </Button>
                </p>
                </Form.Group>
                    </Form>
                </div>
                </div>
      </div>
      </div>
    );
  }
}
export default ReplyToIndividualForum;
