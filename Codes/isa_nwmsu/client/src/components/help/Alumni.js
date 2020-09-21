import React, { Component } from "react";
import image from "../layout/assets/isa.jpg";
import Navbar from "../layout/Navbar";

class Alumni extends Component {
    constructor() {
        super();
        this.state = {
            errors: {}
        };
    }

    render() {
        const { errors } = this.state;

        return (
            <div>
                <Navbar/>
                {/* <!-- Section: Team v.1 --> */}
                <section class="team-section text-center my-5">

                    {/* <!-- Section heading --> */}
                    <h2 class="h1-responsive font-weight-bold my-5">Alumni</h2>
                    {/* <!-- Section description --> */}
                    <p class="grey-text w-responsive mx-auto mb-5">Meet the past three years Alumni of Northwest</p>

                    {/* <!-- Section heading --> */}
                    <h3 class="h1-responsive font-weight-bold my-5">2019</h3>

                    {/* <!-- Grid row --> */}
                    <div class="row">

                        {/* <!-- Grid column --> */}
                        {/* member-1 */}
                        <div class="col-lg-4 col-md-6 mb-lg-0 mb-5" >
                            <div class="avatar mx-auto">
                                <img src={image} style={{ height: "15rem", width: "15rem" }} class="rounded-circle z-depth-1"
                                    alt="member-1 pic" />
                            </div>
                            <h5 class="font-weight-bold mt-4 mb-3">Naga Sai Ram Narne</h5>
                            <p class="text-uppercase blue-text"><strong>ISA Advisor</strong></p>
                            <p class="grey-text">About Narne</p>
                            <ul class="list-unstyled mb-0" style={{padding:"1em"}}>
                                <li>
                                    <p style={{ display: "inline-flex" }}><i class="material-icons" style={{ color: "#0080ff", opacity: "90%" }}>phone</i>&nbsp;+1 (123) 456 7890</p>
                                </li>
                                <li>
                                    <p style={{ display: "inline-flex" }}><i class="material-icons" style={{ color: "#0080ff", opacity: "90%" }}>email</i>&nbsp;S123456@nwmissouri.edu</p>
                                </li>
                            </ul>
                        </div>

                        {/* member-2 */}
                        <div class="col-lg-4 col-md-6 mb-lg-0 mb-5" >
                            <div class="avatar mx-auto">
                                <img src={image} style={{ height: "15rem", width: "15rem" }} class="rounded-circle z-depth-1"
                                    alt="member-2 pic" />
                            </div>
                            <h5 class="font-weight-bold mt-4 mb-3">Naga Sai Ram Narne</h5>
                            <p class="text-uppercase blue-text"><strong>ISA Advisor</strong></p>
                            <p class="grey-text">About Narne</p>
                            <ul class="list-unstyled mb-0">
                            <li>
                                    <p style={{ display: "inline-flex" }}><i class="material-icons" style={{ color: "#0080ff", opacity: "90%" }}>phone</i>&nbsp;+1 (123) 456 7890</p>
                                </li>
                                <li>
                                    <p style={{ display: "inline-flex" }}><i class="material-icons" style={{ color: "#0080ff", opacity: "90%" }}>email</i>&nbsp;S123456@nwmissouri.edu</p>
                                </li>
                            </ul>
                        </div>

                        {/* member-3 */}
                        <div class="col-lg-4 col-md-6 mb-lg-0 mb-5" >
                            <div class="avatar mx-auto">
                                <img src={image} style={{ height: "15rem", width: "15rem" }} class="rounded-circle z-depth-1"
                                    alt="member-3 pic" />
                            </div>
                            <h5 class="font-weight-bold mt-4 mb-3">Naga Sai Ram Narne</h5>
                            <p class="text-uppercase blue-text"><strong>ISA Advisor</strong></p>
                            <p class="grey-text">About Narne</p>
                            <ul class="list-unstyled mb-0">
                            <li>
                                    <p style={{ display: "inline-flex" }}><i class="material-icons" style={{ color: "#0080ff", opacity: "90%" }}>phone</i>&nbsp;+1 (123) 456 7890</p>
                                </li>
                                <li>
                                    <p style={{ display: "inline-flex" }}><i class="material-icons" style={{ color: "#0080ff", opacity: "90%" }}>email</i>&nbsp;S123456@nwmissouri.edu</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                        
                    
                    <br/>
                    <br/>
                    

                    {/* <!-- Section heading --> */}
                    <h3 class="h1-responsive font-weight-bold my-5">2018</h3>

                    {/* <!-- Grid row --> */}
                    <div class="row">

                        {/* <!-- Grid column --> */}
                        {/* member-1 */}
                        <div class="col-lg-4 col-md-6 mb-lg-0 mb-5" >
                            <div class="avatar mx-auto">
                                <img src={image} style={{ height: "15rem", width: "15rem" }} class="rounded-circle z-depth-1"
                                    alt="member-1 pic" />
                            </div>
                            <h5 class="font-weight-bold mt-4 mb-3">Naga Sai Ram Narne</h5>
                            <p class="text-uppercase blue-text"><strong>ISA Advisor</strong></p>
                            <p class="grey-text">About Narne</p>
                            <ul class="list-unstyled mb-0" style={{padding:"1em"}}>
                                <li>
                                    <p style={{ display: "inline-flex" }}><i class="material-icons" style={{ color: "#0080ff", opacity: "90%" }}>phone</i>&nbsp;+1 (123) 456 7890</p>
                                </li>
                                <li>
                                    <p style={{ display: "inline-flex" }}><i class="material-icons" style={{ color: "#0080ff", opacity: "90%" }}>email</i>&nbsp;S123456@nwmissouri.edu</p>
                                </li>
                            </ul>
                        </div>

                        {/* member-2 */}
                        <div class="col-lg-4 col-md-6 mb-lg-0 mb-5" >
                            <div class="avatar mx-auto">
                                <img src={image} style={{ height: "15rem", width: "15rem" }} class="rounded-circle z-depth-1"
                                    alt="member-2 pic" />
                            </div>
                            <h5 class="font-weight-bold mt-4 mb-3">Naga Sai Ram Narne</h5>
                            <p class="text-uppercase blue-text"><strong>ISA Advisor</strong></p>
                            <p class="grey-text">About Narne</p>
                            <ul class="list-unstyled mb-0">
                            <li>
                                    <p style={{ display: "inline-flex" }}><i class="material-icons" style={{ color: "#0080ff", opacity: "90%" }}>phone</i>&nbsp;+1 (123) 456 7890</p>
                                </li>
                                <li>
                                    <p style={{ display: "inline-flex" }}><i class="material-icons" style={{ color: "#0080ff", opacity: "90%" }}>email</i>&nbsp;S123456@nwmissouri.edu</p>
                                </li>
                            </ul>
                        </div>

                        {/* member-3 */}
                        <div class="col-lg-4 col-md-6 mb-lg-0 mb-5" >
                            <div class="avatar mx-auto">
                                <img src={image} style={{ height: "15rem", width: "15rem" }} class="rounded-circle z-depth-1"
                                    alt="member-3 pic" />
                            </div>
                            <h5 class="font-weight-bold mt-4 mb-3">Naga Sai Ram Narne</h5>
                            <p class="text-uppercase blue-text"><strong>ISA Advisor</strong></p>
                            <p class="grey-text">About Narne</p>
                            <ul class="list-unstyled mb-0">
                            <li>
                                    <p style={{ display: "inline-flex" }}><i class="material-icons" style={{ color: "#0080ff", opacity: "90%" }}>phone</i>&nbsp;+1 (123) 456 7890</p>
                                </li>
                                <li>
                                    <p style={{ display: "inline-flex" }}><i class="material-icons" style={{ color: "#0080ff", opacity: "90%" }}>email</i>&nbsp;S123456@nwmissouri.edu</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                        

                    <br/>
                    <br/>


                    {/* <!-- Section heading --> */}
                    <h3 class="h1-responsive font-weight-bold my-5">2017</h3>

                    {/* <!-- Grid row --> */}
                    <div class="row">

                        {/* <!-- Grid column --> */}
                        {/* member-1 */}
                        <div class="col-lg-4 col-md-6 mb-lg-0 mb-5" >
                            <div class="avatar mx-auto">
                                <img src={image} style={{ height: "15rem", width: "15rem" }} class="rounded-circle z-depth-1"
                                    alt="member-1 pic" />
                            </div>
                            <h5 class="font-weight-bold mt-4 mb-3">Naga Sai Ram Narne</h5>
                            <p class="text-uppercase blue-text"><strong>ISA Advisor</strong></p>
                            <p class="grey-text">About Narne</p>
                            <ul class="list-unstyled mb-0" style={{padding:"1em"}}>
                                <li>
                                    <p style={{ display: "inline-flex" }}><i class="material-icons" style={{ color: "#0080ff", opacity: "90%" }}>phone</i>&nbsp;+1 (123) 456 7890</p>
                                </li>
                                <li>
                                    <p style={{ display: "inline-flex" }}><i class="material-icons" style={{ color: "#0080ff", opacity: "90%" }}>email</i>&nbsp;S123456@nwmissouri.edu</p>
                                </li>
                            </ul>
                        </div>

                        {/* member-2 */}
                        <div class="col-lg-4 col-md-6 mb-lg-0 mb-5" >
                            <div class="avatar mx-auto">
                                <img src={image} style={{ height: "15rem", width: "15rem" }} class="rounded-circle z-depth-1"
                                    alt="member-2 pic" />
                            </div>
                            <h5 class="font-weight-bold mt-4 mb-3">Naga Sai Ram Narne</h5>
                            <p class="text-uppercase blue-text"><strong>ISA Advisor</strong></p>
                            <p class="grey-text">About Narne</p>
                            <ul class="list-unstyled mb-0">
                            <li>
                                    <p style={{ display: "inline-flex" }}><i class="material-icons" style={{ color: "#0080ff", opacity: "90%" }}>phone</i>&nbsp;+1 (123) 456 7890</p>
                                </li>
                                <li>
                                    <p style={{ display: "inline-flex" }}><i class="material-icons" style={{ color: "#0080ff", opacity: "90%" }}>email</i>&nbsp;S123456@nwmissouri.edu</p>
                                </li>
                            </ul>
                        </div>

                        {/* member-3 */}
                        <div class="col-lg-4 col-md-6 mb-lg-0 mb-5" >
                            <div class="avatar mx-auto">
                                <img src={image} style={{ height: "15rem", width: "15rem" }} class="rounded-circle z-depth-1"
                                    alt="member-3 pic" />
                            </div>
                            <h5 class="font-weight-bold mt-4 mb-3">Naga Sai Ram Narne</h5>
                            <p class="text-uppercase blue-text"><strong>ISA Advisor</strong></p>
                            <p class="grey-text">About Narne</p>
                            <ul class="list-unstyled mb-0">
                            <li>
                                    <p style={{ display: "inline-flex" }}><i class="material-icons" style={{ color: "#0080ff", opacity: "90%" }}>phone</i>&nbsp;+1 (123) 456 7890</p>
                                </li>
                                <li>
                                    <p style={{ display: "inline-flex" }}><i class="material-icons" style={{ color: "#0080ff", opacity: "90%" }}>email</i>&nbsp;S123456@nwmissouri.edu</p>
                                </li>
                            </ul>
                        </div>                        
                    </div>

                </section>
            </div>
            
        );
    }
}

export default Alumni;