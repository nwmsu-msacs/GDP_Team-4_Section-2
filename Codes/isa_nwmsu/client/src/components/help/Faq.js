import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import AdminNavbar from "../layout/AdminNavbar";

let navbar = undefined;

class Faq extends Component {
    constructor() {
        super();
        this.state = {
            errors: {}
        };
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
            
            <div class="container">

{/* <!--Accordion wrapper--> */}
<div class="accordion md-accordion" id="accordionEx1" role="tablist" aria-multiselectable="true">

  {/* <!-- Accordion card --> */}
  <div class="card">

    {/* <!-- Card header --> */}
    <div class="card-header" role="tab" id="headingTwo1">
      <a class="collapsed"  style={{textDecoration:"none"}} data-toggle="collapse" data-parent="#accordionEx1" href="#collapseTwo1"
        aria-expanded="false" aria-controls="collapseTwo1">
        <h5 class="mb-0">
          FAQ - 1 <i class="fas fa-angle-down rotate-icon"></i>
        </h5>
      </a>
    </div>

    {/* <!-- Card body --> */}
    <div id="collapseTwo1" class="collapse" role="tabpanel" aria-labelledby="headingTwo1"
      data-parent="#accordionEx1">
      <div class="card-body">
        FAQ Answer
      </div>
    </div>

  </div>
  {/* <!-- Accordion card --> */}

  {/* <!-- Accordion card --> */}
  <div class="card">

    {/* <!-- Card header --> */}
    <div class="card-header" role="tab" id="headingTwo2">
      <a class="collapsed" style={{textDecoration:"none"}} data-toggle="collapse" data-parent="#accordionEx1" href="#collapseTwo21"
        aria-expanded="false" aria-controls="collapseTwo21">
        <h5 class="mb-0">
          FAQ - 2 <i class="fas fa-angle-down rotate-icon"></i>
        </h5>
      </a>
    </div>

    {/* <!-- Card body --> */}
    <div id="collapseTwo21" class="collapse" role="tabpanel" aria-labelledby="headingTwo21"
      data-parent="#accordionEx1">
      <div class="card-body">
        FAQ Answer
      </div>
    </div>

  </div>
  {/* <!-- Accordion card --> */}

  {/* <!-- Accordion card --> */}
  <div class="card">

    {/* <!-- Card header --> */}
    <div class="card-header" role="tab" id="headingThree31">
      <a class="collapsed" style={{textDecoration:"none"}}  data-toggle="collapse" data-parent="#accordionEx1" href="#collapseThree31"
        aria-expanded="false" aria-controls="collapseThree31">
        <h5 class="mb-0">
          FAQ - 3 <i class="fas fa-angle-down rotate-icon" ></i>
        </h5>
      </a>
    </div>

    {/* <!-- Card body --> */}
    <div id="collapseThree31" class="collapse" role="tabpanel" aria-labelledby="headingThree31"
      data-parent="#accordionEx1">
      <div class="card-body">
        FAQ Answer
      </div>
    </div>

  </div>
  {/* <!-- Accordion card --> */}

</div>
{/* <!-- Accordion wrapper --> */}
            </div>

            </div>

            </div>
        );
    }
}

export default Faq;