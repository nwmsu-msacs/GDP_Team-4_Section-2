import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import AdminNavbar from "../layout/AdminNavbar";
import axios from "axios";
import {Accordion, Card} from 'react-bootstrap';
import {Button} from 'semantic-ui-react';

let navbar = undefined;

function modify(data, self) {

    localStorage.setItem("faqId", data._id)
    self.push("/modifyFaq");
  };
  
  function deleteFaq(data, self) {
  
    axios.post('http://localhost:5000/api/admin/deleteFaq', data)
      .then(res => self.go())
      .catch(err => console.log(err));
  };
  
const FaqMap = (FaqList, self) => {
  console.log("-----FaqList", FaqList);

  let count = 0;
  let res = FaqList.map((data) => {
    return (


      <div class="row" key={data._id}>

<Accordion defaultActiveKey="0"style={{width:"100%"}}>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey={count}>
      {data.question}
    </Accordion.Toggle>
    <Accordion.Collapse eventKey={count}>
      <Card.Body>{data.answer}</Card.Body>
    </Accordion.Collapse>
  </Card>
  <p class="h4 text-center mb-4">
    <Button
            
            type="submit"
            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            onClick={() => { modify(data, self) }}
          >
            Modify
                </Button>&nbsp;&nbsp;

                <Button
            
            type="submit"
            className="btn btn-large waves-effect waves-light hoverable red accent-3"
            onClick= {() => {deleteFaq(data, self)}}
          >
            Delete
                </Button></p>
</Accordion>



      </div>

    
    );
  });

  console.log(res);

  return res;
}


class Faq extends Component {
    constructor() {
        super();
        
    }

    state = {
      FAQData: [],
      self: null,
    }


    componentDidMount() {
      this.setState({
        self: this.props.history
      });
  
      axios
        .get("http://localhost:5000/api/admin/getFaq")
        .then(res => {
          console.log(res.data.allFaq)
          this.setState({
            FAQData: res.data.allFaq
          });
        })
        .catch(err =>
          console.log("err: ", err)
        );
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

    render() {
        const { errors } = this.state;

        return (
          <div>
            {navbar}
            <div>
              <br/>
              <div class="row">
            <div class="col-md-9" >
              <h2 class="text-center" style={{fontFamily:"Arial",
                                        fontStyle:"Italic", 
                                        textShadow:"2px 2px #A9A9A9", 
                                        color:"#585858",
                                        position:"absolute",
                                        paddingLeft:"37rem"
                                        }}>Manage FAQ's</h2>
            </div>
          <div class="col-md-3">
          <p class="h4 text-center mb-4">
    <Button
            
            type="submit"
            href="/addFaq"
            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            
          >
            Add FAQ
                </Button>
                </p>
                </div>   
                </div>                                     
        <div class="container" style={{  width:"100%" }}>
        <p>{FaqMap(this.state.FAQData, this.state.self)}</p>
        </div>
        </div>
      </div>
        );
    }
}

export default Faq;