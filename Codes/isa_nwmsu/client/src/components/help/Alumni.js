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



                </section>
            </div>
            
        );
    }
}

export default Alumni;