import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import AdminNavbar from "../layout/AdminNavbar";
import axios from "axios";
import {Accordion, Card} from 'react-bootstrap';

let navbar = undefined;


const FaqMap = (FaqList, self) => {

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
</Accordion>


      </div>

    
    );
  });

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
            
              <h2 class="text-center" style={{fontFamily:"Arial",
                                        fontStyle:"Italic", 
                                        textShadow:"2px 2px #A9A9A9", 
                                        color:"#585858",
                                        }}>Frequently Asked Questions</h2>
        <div class="container" style={{  width:"100%" }}>
        <p>{FaqMap(this.state.FAQData, this.state.self)}</p>
        </div>
        </div>
      </div>
        );
    }
}

export default Faq;
