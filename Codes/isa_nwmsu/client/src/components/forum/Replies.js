import axios from 'axios';
import React, { Component } from 'react';
import AdminNavbar from "../layout/AdminNavbar";
import Navbar from "../layout/Navbar";
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import image from "./user.png"
let navbar = undefined;

// function reject(data, self) {

//   axios.post('http://localhost:5000/api/services/accommodationreject', data)
//     .then(res => self.go())
//     .catch(err => console.log(err));
// };

// function accept(data, self) {

//   axios.post('http://localhost:5000/api/services/accommodationaccept', data)
//     .then(res => self.go())
//     .catch(err => console.log(err));
// };

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
        
        {/* <div class="col-lg-4 col-md-6 mb-lg-0 mb-5" >

        <p class="font-weight-bold mt-4 mb-3">{data.replyContent}</p>
          <i>By:{data.replyBy} on {data.replyTime}</i>
          {/* <button
            style={{
              width: "150px",
              borderRadius: "3px",
              letterSpacing: "1.5px",
              marginTop: "1rem"
            }}
            type="submit"
            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            // onClick={() => { accept(data, self) }}
          >
            Accept
                </button>&nbsp;&nbsp; */}

                {/* <button
            style={{
              width: "150px",
              borderRadius: "3px",
              letterSpacing: "1.5px",
              marginTop: "1rem"
            }}
            type="submit"
            className="btn btn-large waves-effect waves-light hoverable red accent-3"
            onClick= {() => {reject(data, self)}}
          >
            Reject
                </button> */}
          {/* <hr />
        </div> */} 


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

//   componentWillMount() {
//     if (localStorage.getItem('jwtToken') != null) {
//       this.setState({ loggedIn: true });
//     }
//     if (localStorage.getItem('role') === null || localStorage.getItem('role') === '50') {
//       navbar = <Navbar />
//     }
//     if (localStorage.getItem('role') === '100') {
//       navbar = <AdminNavbar />
//     }
//   }

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