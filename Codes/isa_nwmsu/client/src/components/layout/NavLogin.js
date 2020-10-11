import React, { Component } from "react";

class NavLogin extends Component {


    constructor(props) {
        super(props)
    }
    render() {

        return (

            <ul>
                <li>
                    <a className='nav-link' href='/login'>
                        Login
                    </a>
                </li>
            </ul>

        );

    };
}

export default NavLogin;