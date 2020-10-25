import React from 'react';
import axios from 'axios';
import Navbar from "../layout/Navbar";
import AdminNavbar from "../layout/AdminNavbar";
import {Input, TextArea, Form} from 'semantic-ui-react';
import classnames from "classnames";
import {Button} from 'react-bootstrap';


const Validator = require("validator");
const isEmpty = require("is-empty");

let navbar = undefined;

const initialErrorState = {
    questionError:"",
    answerError:"",
}

class ModifyFAQ extends React.Component {

  constructor() {
    super();
    this.state = {
      question:"",
      answer:"",
      errors:{}

    };
  }
  // To track the changes
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
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

  componentDidMount() {
    this.setState({
      self: this.props.history
    });

    axios
      .get("http://localhost:5000/api/admin/getFaq/"+localStorage.getItem("faqId"))
      .then(res => {
        console.log(res.data.faq)
        this.setState({
            question: res.data.faq[0].question,
            answer: res.data.faq[0].answer,
        });
      })
      .catch(err =>
        console.log("err: ", err)
      );
  }


  validateForm = () =>{
    let questionError="";
    let answerError="";

 
 
     if(isEmpty(this.state.question)){
       questionError= "Question field is required"
     }
     if(isEmpty(this.state.answer)){
        answerError= "Answer field is required"
      }
 
     if(questionError || answerError){
       this.setState({questionError, answerError});
       return false;
     }
 
     return true;
 
   }

  onSubmit = (e) => {
    e.preventDefault();
    const isFormValid = this.validateForm();
    if (isFormValid){
    const updatedFaq = {
      question: this.state.question,
      answer: this.state.answer,
    };

    this.setState(initialErrorState);
    axios.put('http://localhost:5000/api/admin/modifyFaq/'+localStorage.getItem("faqId"), updatedFaq)
      .then(res => console.log(res.data))
      .then(this.props.history.push("/faq"))
      .then(window.location.reload(false))
  }
};

  render() {
    const { errors } = this.state;
    return (
      <div >
        {navbar}
        <br/><br/>
      <div class="row">
      <div class="col-md-4" >
                        
                        </div>
        
        <div class="col-md-4" >
        <p class="h3 text-center mb-4">Modify FAQ</p>
        <Form class onSubmit={this.onSubmit}>
          
          {/* Question */}
          <Form.Field>
          <label htmlFor="question">Question</label>
          <Input transparent
            type="text"
            name="question"
            id="question"
            value={this.state.question}
            onChange={this.onChange}
            placeholder="Enter question"
            />
            <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.questionError}
                          </div>
                </Form.Field>

          {/* Answer */}
          <Form.Field>
          <label htmlFor="answer">Answer</label>
          <TextArea
                            
                            name="answer"
                            id="answer"
                            value={this.state.answer}
                            onChange={this.onChange}
                            placeholder="Enter answer"
                            rows="4"
                            cols="50"
                            />
                            <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.answerError}
                          </div>
                </Form.Field>
                {/* <Form.Field>
                <label htmlFor="eventimage">Event Image</label>
                  <Input 
                  type="file"
                  name="eventimage"
                  id="eventimage"
                  value={this.state.eventimage}
                  onChange={this.onChange}
                  />
                </Form.Field> */}

          {/* Submit  */}
          <p class="h4 text-center mb-4">
                            <Button 
                                
                                type="submit"
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                            >
                                Modify FAQ
                </Button></p>
        </Form>
      </div>
      <div class="col-md-3"></div>
      </div>
      
      </div>
    );
  }
}


export default ModifyFAQ;
