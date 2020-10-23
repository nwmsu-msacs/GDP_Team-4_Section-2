import React, { Component } from "react";

class NavRegister extends Component {


    constructor(props) {
        super(props)
    }
    render() {

        return (

            <ul>
                <li>
                    <a className='nav-link' href='/register'>
                        Register
                    </a>
                </li>
            </ul>

        );

    };
}

export default NavRegister;