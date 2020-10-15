// import axios from 'axios';
// import React, { Component } from 'react';
// import AdminNavbar from "../layout/AdminNavbar";
// import Navbar from "../layout/Navbar";

// let navbar = undefined;

// function reply(data, self) {

//   localStorage.setItem("discussionId"= data._id)

//     self.push("/individualReply")
// };



// const discussionTitle = axios.get()

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

// class individualReply extends Component {

//   constructor(props) {
//     super(props);
//   }
//   state = {
//     replyData: [],
//     self: null,
//   }

//   componentDidMount() {
//     this.setState({
//       self: this.props.history
//     });

//     axios
//       .get("http://localhost:5000/api/forum/replies/"+localStorage.getItem("discussionId"))
//       .then(res => {
//         console.log(res.data.replyData)
//         this.setState({
//           replyData: res.data.replyData
//         });
//       })
//       .catch(err =>
//         console.log("err: ", err)
//       );
//   }

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

//   render() {

//     return (

//       <div>
//         {navbar}
//         <div>
//           <br />
//           <h2></h2>
//           <p>{replyMap(this.state.replyData, this.state.self)}</p>
//         </div>
//       </div>
//     );
//   }
// }
// export default individualReply;