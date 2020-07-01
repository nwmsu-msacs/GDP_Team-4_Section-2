import React, { Component } from 'react';

import axios from 'axios';
import classnames from "classnames";

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
        console.log(response.data);
        if (response.data === 'recovery email sent') {
          this.setState({
            showError: false,
            messageFromServer: 'recovery email sent',
            showNullError: false,
          });
        }
      } catch (error) {
        console.error(error.response.data);
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
      <div className="container">
        <div style={{ marginTop: "2rem" }} className="row">
          <div className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
            <a href="/login">Back to login</a>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h5>
                <b>Retrieve your password here..</b>
              </h5>
            </div>
            <form noValidate onSubmit={this.sendEmail}>
              <div className="input-field col s12">
                {/* <label htmlFor="email">Email</label> */}
                <input
                  onChange={this.onChange('email')}
                  value={email}
                  error={errors.email}
                  id="email"
                  type="email"
                  placeholder="Email Address"
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
                    <div>
                      <h3>Password Reset Email Successfully Sent!</h3>
                    </div>
                  )}
                </span>
              </div>

              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "200px",
                    borderRadius: "3px",
                    marginTop: "1rem"
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
    );
  }
}

<<<<<<< HEAD
export default ForgotPassword;
=======

export default ForgotPassword;
>>>>>>> ba3da6c534b3125c9a34fa3610b51f9b2a291dd7
