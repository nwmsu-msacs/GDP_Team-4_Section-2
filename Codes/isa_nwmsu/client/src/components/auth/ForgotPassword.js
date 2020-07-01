import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

class ForgotPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      errors: {}
    };
  }
  

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
    };

    this.props.forgotPassword(userData);
  };

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    const { errors } = this.state;

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
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
              <label htmlFor="email">Email</label>
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                />
                
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
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


export default ForgotPassword;
