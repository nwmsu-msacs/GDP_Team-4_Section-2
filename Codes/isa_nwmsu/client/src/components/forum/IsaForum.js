import axios from 'axios';
import React, { Component } from 'react';
import AdminNavbar from "../layout/AdminNavbar";
import Navbar from "../layout/Navbar";
import {  Card } from 'react-bootstrap'
import {Button} from 'semantic-ui-react'

let navbar = undefined;

function viewDiscussion(data, self) {

  localStorage.setItem("discussionId",data._id)

    self.push("/individualReply")
};

function deleteDiscussion(data, self){
  axios.post('http://localhost:5000/api/forum/deleteForum', data)
    .then(res => self.go())
    .catch(err => console.log(err));

    axios.post('http://localhost:5000/api/forum/deleteReplies', data)
    .catch(err => console.log(err));

}



const discussionMap = (discussionList, self,role,user) => {

  let res = discussionList.map((data) => {
    return (
<div>
      {role === true || user === data.userEmail ?
      
        //render for admin
      <div class="row" key={data._id}>

        {/* <!-- Grid column --> */}

        <Card style={{ width: '50rem'}}>
          <Card.Body>
            <Card.Title class="blue-text"><h3 style={{fontSize:"3rem"}}>{data.title}</h3></Card.Title>
            <br/>
            <Card.Subtitle className="mb-2 text-muted">Posted by: {data.createdBy}</Card.Subtitle>
            <Card.Text>
            <p style={{fontSize:"1rem", textAlign:"justify"}}><strong>{data.description}</strong></p>
          
    </Card.Text>
   
    
     <p class="h4 text-center mb-4">
                <Button
            
                type="submit"
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                onClick={() => { viewDiscussion(data, self) }}
              >
                View Discussion
                    </Button>&nbsp;&nbsp;
                    <Button
            
                type="submit"
                className="btn btn-large waves-effect waves-light hoverable red accent-3"
                onClick={() => { deleteDiscussion(data, self) }}
              >
                Delete Discussion
                    </Button>
                </p>
                
    

                
              
          </Card.Body>
        </Card>

        


      </div>
      :
        //render for user
      <div class="row" key={data._id}>

        {/* <!-- Grid column --> */}

        <Card style={{ width: '50rem'}}>
          <Card.Body>
            <Card.Title class="blue-text"><h3 style={{fontSize:"3rem"}}>{data.title}</h3></Card.Title>
            <br/>
            <Card.Subtitle className="mb-2 text-muted">Posted by: {data.createdBy}</Card.Subtitle>
            <Card.Text>
            <p style={{fontSize:"1rem", textAlign:"justify"}}><strong>{data.description}</strong></p>
          
    </Card.Text>
   
    
     <p class="h4 text-center mb-4">
                <Button
            
                type="submit"
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                onClick={() => { viewDiscussion(data, self) }}
              >
                View Discussion
                    </Button>
                </p>
                
    

                
              
          </Card.Body>
        </Card>
        </div>}

        </div>

      
    );
  });

return res;
}

class ISAForum extends Component {

 
  state = {
    ForumData: [],
    role: null,
    self: null,
    user: null,
  }

  componentDidMount() {
    this.setState({
      self: this.props.history,
      role: this.state.role,
      user: this.state.user
    });

    axios
      .get("http://localhost:5000/api/forum/forumDiscussions")
      .then(res => {
        this.setState({
          ForumData: res.data.forumData,
          
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
    
    if (localStorage.getItem('role') === null || localStorage.getItem('role') === '50') {
      this.setState({role: false})
      navbar = <Navbar />
    }
    if (localStorage.getItem('role') === '100') {
      this.setState({role:true})
      navbar = <AdminNavbar />
    }
    if(localStorage.getItem('email')!= null){
      this.setState({user: localStorage.getItem('email')})
    }
  }

  render() {

    return (

      <div>
        {navbar}
        <div>
          <br />
          <div class="row">
            <div class="col-md-9">
            <h2 class="text-center" style={{fontFamily:"Arial"}}>ISA FORUM </h2>
            </div>
            <div class="col-md-3 text-center">
          <a href="/createForum"><button class="btn btn-large waves-effect waves-light hoverable blue accent-3">New Discussion</button></a>
          </div>
              
              </div>
          <div class="container" style={{ columns: "1" }}>
          <p>{discussionMap(this.state.ForumData, this.state.self,this.state.role, this.state.user)}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default ISAForum;
