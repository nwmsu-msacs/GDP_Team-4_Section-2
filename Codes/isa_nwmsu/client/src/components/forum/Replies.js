import axios from 'axios';
import React, { Component } from 'react';
import AdminNavbar from "../layout/AdminNavbar";
import Navbar from "../layout/Navbar";
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import image from "./user.png"
let navbar = undefined;



const ReplyMap = (replyList, self) => {
  console.log("-----replyList", replyList);

  let res = replyList.map((data) => {
    return (


      <div class="row" key={data._id}>

        {/* <!-- Grid column --> */}
      <Comment.Group>
      
    <Comment>
      
      <Comment.Avatar
      src= {image}>
      </Comment.Avatar>
      <Comment.Content>
        <Comment.Author as='a'>{data.replyBy}</Comment.Author>
        <Comment.Metadata>
          <div>{data.replyTime.substring(0,10)}&nbsp;at&nbsp;{data.replyTime.substring(11,19)} </div>
        </Comment.Metadata>
        <Comment.Text><p style={{fontSize:"1.5em", textAlign:"justify"}}>{data.replyContent}</p></Comment.Text>
      </Comment.Content>
    </Comment>
        
      </Comment.Group>
        
        


      </div>

    );
  });

  console.log(res);

  return res;
}

class ReplyView extends Component {

  constructor(props) {
    super(props);
  }
  state = {
    ReplyData: [],
    self: null,
  }

  componentDidMount() {
    this.setState({
      self: this.props.history
    });

    axios
      .get("http://localhost:5000/api/forum/replies/"+localStorage.getItem("discussionId"))
      .then(res => {
        console.log(res.data.replyData)
        this.setState({
          ReplyData: res.data.replyData
        });
      })
      .catch(err =>
        console.log("err: ", err)
      );
  }



  render() {

    return (

      <div>
        <Header as='h3' dividing>
      Replies
    </Header>

      
          <p>{ReplyMap(this.state.ReplyData, this.state.self)}</p>
          </div>
    );
  }
}
export default ReplyView;
