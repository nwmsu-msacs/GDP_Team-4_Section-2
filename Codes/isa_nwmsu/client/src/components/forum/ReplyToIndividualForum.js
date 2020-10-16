import axios from 'axios';
import React, { Component } from 'react';
import AdminNavbar from "../layout/AdminNavbar";
import Navbar from "../layout/Navbar";
import Replies from "../forum/Replies";
import {Form, TextArea, Item} from 'semantic-ui-react'
import {Button} from 'react-bootstrap'
let navbar = undefined;
let forumData = undefined

function reply(data, self) {

  
};



const discussionTitle = axios.get()

// const replyMap = (replyList, self) => {
//   console.log("-----replyList", replyList);

//   let res = replyList.map((data) => {
//     return (


//       <div class="row" key={data._id}>

//         {/* <!-- Grid column --> */}

//         <div class="col-lg-4 col-md-6 mb-lg-0 mb-5" >

//           <p class="font-weight-bold mt-4 mb-3">{data.replyContent}</p>
//           <i>By:{data.replyBy} on {data.replyTime}</i>

//           {/* <button
//             style={{
//               width: "150px",
//               borderRadius: "3px",
//               letterSpacing: "1.5px",
//               marginTop: "1rem"
//             }}
//             type="submit"
//             className="btn btn-large waves-effect waves-light hoverable blue accent-3"
//             onClick={() => { reply(data, self) }}
//           >
//             View Discussion
//                 </button>&nbsp;&nbsp; */}

                
//           <hr />
//         </div>


//       </div>

//     );
//   });

//   console.log(res);

//   return res;
// }


const ForumMap = (ForumList, self) => {
  console.log("-----ForumList", ForumList);
  
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
        
        {/* <!-- Grid column --> */}
        {/* <div class="col-lg-4 col-md-6 mb-lg-0 mb-5" >
         
          <h5 class="font-weight-bold mt-4 mb-3">{data.name}</h5>
          <p class="text-uppercase blue-text"><strong>Pickup Date: {data.date.substring(0,10)}</strong></p>
          <p class="text-uppercase blue-text"><strong>Pickup Time: {data.date.substring(11,19)}</strong></p>
          <p class="text-uppercase blue-text"><strong>Email:  {data.email}</strong></p>
          <p class="text-uppercase blue-text"><strong>Cell:  {data.cell}</strong></p>
          <p class="text-uppercase blue-text"><strong>From:  {data.from} &nbsp; &nbsp; To: {data.to}</strong></p>
          <p class="text-uppercase blue-text"><strong>Airline:  {data.airline} &nbsp;&nbsp; FlightNo: {data.flightNo}</strong></p>
          <p class="text-uppercase blue-text"><strong>Luggage:  {data.luggage}</strong></p>
          <p class="text-uppercase blue-text"><strong>Status:  {data.status}</strong></p>
          <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                  onClick = {() => {accept(data,self)}}
                >
                  Accept
                </button>&nbsp;&nbsp;

                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable red accent-3"
                  onClick = {() => {reject(data,self)}}
                >
                  Reject
                </button>   
                <hr/>
        </div> */}
        

      </div>
      
    );
  });

  console.log(res);

  return res;
}


class ReplyToIndividualForum extends Component {

    constructor() {
        super();
        this.state = {
    //         ReplyData: [],
    // self: null,
    replyContent:"",
    replyBy:"",
    ForumData: [],
            errors: {}
        };
    }
//   state = {
//     ReplyData: [],
//     self: null,
//     replyContent:"",
//     replyBy:"",
//   }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
};

  onSubmit = e => {
    e.preventDefault();
    

    const newReply = {

        replyContent: this.state.replyContent,
        replyBy: localStorage.getItem("name"),
        forumId: localStorage.getItem("discussionId")

    }

    console.log("reply content in submit --> ", newReply)

    axios.post('http://localhost:5000/api/forum/reply', newReply)
            .then(res => console.log(res.data))
            .then(this.props.history.go())
            // .then(this.props.history.push("/individualReply"))
    };
    



  componentDidMount() {
    this.setState({
      self: this.props.history
    });

    axios
      .get("http://localhost:5000/api/forum/singleForum/"+localStorage.getItem("discussionId"))
      .then(res => {
        console.log("--->> in front",res.data.individualForum)
        this.setState({
          ForumData: res.data.individualForum
        });
      })
      .catch(err =>
        console.log("err: ", err)
      );

    // axios
    //   .get("http://localhost:5000/api/forum/replies/"+localStorage.getItem("discussionId"))
    //   .then(res => {
    //     console.log(res.data.replyData)
    //     this.setState({
    //       ReplyData: res.data.replyData
    //     });
    //   })
    //   .catch(err =>
    //     console.log("err: ", err)
    //   );
  }

  componentWillMount() {
    if (localStorage.getItem('jwtToken') != null) {
      this.setState({ loggedIn: true });
    }
    if (localStorage.getItem('role') === null || localStorage.getItem('role') === '50') {
      navbar = <Navbar />
    }
    if (localStorage.getItem('role') === '100') {
      navbar = <AdminNavbar />
    }

    

      // console.log("after axios -->.", forumData)
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
        
        {/* <div class="col-md-4" style={{marginTop: "3rem",borderRadius:"5%", marginBottom: "8rem", boxShadow:"0px 0px 10px 10px #303030", backgroundColor:"white"}}> */}
        <div>                    
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
                            
                        />
                        </Form.Field>
                        {/* submit  */}
                        <p class="h4 text-center mb-4">
                          <Button

                  // style={{
                  //   width: "250px",
                  //   borderRadius: "3px",
                  //   letterSpacing: "1.5px",
                  //   marginTop: "1rem"
                    
                  // }}
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
    );
  }
}
export default ReplyToIndividualForum;