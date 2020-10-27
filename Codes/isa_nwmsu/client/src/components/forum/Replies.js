import axios from 'axios';
import React, { Component } from 'react';
import { Button, Comment, Header } from 'semantic-ui-react'
import image from "./user.png"


function deleteReply(data, self){
  axios.post('http://localhost:5000/api/forum/deleteSingleReply', data)
    .then(res => self.go())
    .catch(err => console.log(err));
    window.location.reload(false);

}

const ReplyMap = (replyList, self, role, user) => {

  let res = replyList.map((data) => {
    return (
<div>
    {role === true || user === data.userEmail ?
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
        <Comment.Metadata>
          <Button color="red" style={{fontSize:"0.5rem"}}onClick= {() => { deleteReply(data, self) }}>Delete Reply</Button>
          
        </Comment.Metadata>
      </Comment.Content>
    </Comment>
        
      </Comment.Group>
        
        


      </div>
      :

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
  }
      </div>
    );
  });


  return res;
}

class ReplyView extends Component {


  state = {
    ReplyData: [],
    role:null,
    user:null,
    self: null,
  }

  componentDidMount() {
    this.setState({
      self: this.props.history,
      role:this.state.role,
      user:this.state.user
    });

    axios
      .get("http://localhost:5000/api/forum/replies/"+localStorage.getItem("discussionId"))
      .then(res => {
        this.setState({
          ReplyData: res.data.replyData
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

    }
    if (localStorage.getItem('role') === '100') {
      this.setState({role:true})
    }
    if(localStorage.getItem('email')!= null){
      this.setState({user: localStorage.getItem('email')})
    }
  }



  render() {

    return (

      <div>
        <Header as='h3' dividing>
      Replies
    </Header>

      
          <p>{ReplyMap(this.state.ReplyData, this.state.self, this.state.role, this.state.user)}</p>
          </div>
    );
  }
}
export default ReplyView;
