import axios from 'axios';
import React, { Component } from 'react';
import AdminNavbar from "../layout/AdminNavbar";
import Navbar from "../layout/Navbar";

let navbar = undefined;

function viewDiscussion(data, self) {

  localStorage.setItem("discussionId",data._id)

    self.push("/individualReply")
};




const discussionMap = (discussionList, self) => {
  console.log("-----discussionList", discussionList);

  let res = discussionList.map((data) => {
    return (


      <div class="row" key={data._id}>

        {/* <!-- Grid column --> */}

        <div class="col-lg-4 col-md-6 mb-lg-0 mb-5" >

          <h5 class="font-weight-bold mt-4 mb-3">{data.title}</h5>
          <p class="text-uppercase blue-text"><strong>{data.description}</strong></p>
          <button
            style={{
              width: "150px",
              borderRadius: "3px",
              letterSpacing: "1.5px",
              marginTop: "1rem"
            }}
            type="submit"
            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            onClick={() => { viewDiscussion(data, self) }}
          >
            View Discussion
                </button>&nbsp;&nbsp;

                
          <hr />
        </div>


      </div>

    );
  });

  console.log(res);

  return res;
}

class ISAForum extends Component {

  constructor(props) {
    super(props);
  }
  state = {
    ForumData: [],
    self: null,
  }

  componentDidMount() {
    this.setState({
      self: this.props.history
    });

    axios
      .get("http://localhost:5000/api/forum/forumDiscussions")
      .then(res => {
        console.log(res.data.forumData)
        this.setState({
          ForumData: res.data.forumData
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
        <div>
          <br />
          <h2>ISA Forum</h2>
          <p>{discussionMap(this.state.ForumData, this.state.self)}</p>
        </div>
      </div>
    );
  }
}
export default ISAForum;