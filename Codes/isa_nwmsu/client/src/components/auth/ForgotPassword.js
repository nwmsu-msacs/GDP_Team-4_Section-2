import React, { Component } from 'react';

import axios from 'axios';
import classnames from "classnames";
import image from "../layout/assets/carousel_image4.jpg"
import Navbar from "../layout/Navbar";

const title = {
  pageTitle: 'Forgot Password Screen',
};


class ForgotPassword extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      showError: false,
      messageFromServer: '',
      showNullError: false,
      errors: {}
    };
  }
  
 

  onChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  sendEmail = async (e) => {
    e.preventDefault();
    const { email } = this.state;
    if (email === '') {
      this.setState({
        showError: false,
        messageFromServer: '',
        showNullError: true,
      });
    } else {
      try {
        const response = await axios.post(
          'http://localhost:5000/api/users/forgotPassword',
          {
            email: this.state.email,
          },
        );
        if (response.data === 'recovery email sent') {
          this.setState({
            showError: false,
            messageFromServer: 'recovery email sent',
            showNullError: false,
          });
        }
      } catch (error) {
        if (error.response.data === 'email not in database') {
          this.setState({
            showError: true,
            messageFromServer: '',
            showNullError: false,
          });
        }
      }
    }
  };

  render() {
    const {
      email, messageFromServer, showNullError, showError, errors
    } = this.state;

    return (
      <div>
        <Navbar/>
      <div style={{ height: "100vh",  backgroundImage: `url(${image})`, backgroundRepeat:"no-repeat",backgroundSize:"cover"}} className="row">
          <div className="col-md-6" ></div>
          <div className=" col-md-3" style={{marginTop: "7rem",borderRadius:"5%", marginBottom: "12rem", boxShadow:"0px 0px 10px 10px #303030", backgroundColor:"white",}}>
          <div className="mainbox col-md-12" style={{marginTop: "1rem"}}>
          <p style={{ display:"inline-flex"}}><i class="material-icons" style={{color:"#0080ff", opacity:"90%", paddingLeft: "11.250px"}}>home</i><a href="/" >&nbsp;Home</a></p>
        
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h5>
                <b>Retrieve your password here..</b>
              </h5>
            </div>
            <form noValidate onSubmit={this.sendEmail}>
              <div className="input-field col s12">
                <label htmlFor="email">Email</label>
                <input
                  onChange={this.onChange('email')}
                  value={email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                />

                <span className="red-text">
                  {showNullError && (
                    <div>
                      <p>The email address is required</p>
                    </div>
                  )}
                  {showError && (
                    <div>
                      <p>
                        That email address isn&apos;t recognized. Please try again or&nbsp;
                        <a href="/register">Register</a> for a new account.
                      </p>
                    </div>
                  )}
                  {messageFromServer === 'recovery email sent' && (
                    <div style={{height:"2rem"}}>
                      <p style={{fontSize:"12px"}}>Password Reset Email Successfully Sent! Check Email for further instructions</p>
                    </div>
                  )}
                </span>
              </div>

              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "200px",
                    borderRadius: "3px",
                    // marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Retrieve password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    );
  }
}


export default ForgotPassword;
