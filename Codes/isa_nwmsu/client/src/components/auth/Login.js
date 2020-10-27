import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import image from "../layout/assets/carousel_image4.jpg"
import classnames from "classnames";
import Navbar from "../layout/Navbar";


const Validator = require("validator");
const isEmpty = require("is-empty");

const initialErrorState = {
  emailError:"",
  passwordError:"",
}

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {

      this.props.history.push("/home");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {

      this.props.history.push("/home")

    }

    if (nextProps.errors) {
      
      this.setState({
        errors: nextProps.errors
      });
      console.log(this.state.errors)
      this.state.passwordError="invalid Credentials, check your email/password "
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  validateForm = () =>{
    let passwordError="";
let emailError="";
 
     //name errors 
   
     if(isEmpty(this.state.email)){
       emailError= "Email field is required"
     }else if(!Validator.isEmail(this.state.email)){
       emailError= "Email entered is invalid"
     }
 
     
     if(isEmpty(this.state.password)){
       passwordError= "Password cannot be empty"
     }

     if(emailError || passwordError){
       this.setState({emailError, passwordError});
       return false;
     }
 
     return true;
 
   }


  onSubmit = e => {
    e.preventDefault();
    const isFormValid = this.validateForm();
    if (isFormValid){
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    
    this.setState(initialErrorState);
    this.props.loginUser(userData);
  }
};

  render() {
    const { errors } = this.state;

    return (
      <div >
        <Navbar/>
        <div style={{ height: "100vh", backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className="row">
          <div className="col-md-6" ></div>
          <div className=" col-md-3" style={{ marginTop: "3rem", borderRadius: "5%", marginBottom: "8rem", boxShadow: "0px 0px 10px 10px #303030", backgroundColor: "white", }}>
            <div className="mainbox col-md-12" style={{ marginTop: "1rem" }}>
              <p style={{ display: "inline-flex" }}><i class="material-icons" style={{ color: "#0080ff", opacity: "90%", paddingLeft: "11.250px" }}>home</i><a href="/" >&nbsp;Home</a></p>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <h4>
                  <b>Login</b>
                </h4>
                <p className="grey-text text-darken-1">
                  Don't have an account? <a href="/register">Register</a>
                </p>
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
                  <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.emailError}
                          </div>
                </div>
                <div className="input-field col s12">
                  <label htmlFor="password">Password</label>
                  <input
                    onChange={this.onChange}
                    value={this.state.password}
                    error={errors.password}
                    id="password"
                    type="password"
                    className={classnames("", {
                      invalid: errors.password || errors.passwordincorrect
                    })}
                  />

                  <span className="red-text">
                    {errors.password}
                    {errors.passwordincorrect}
                  </span>
                  <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.passwordError}
                          </div>
                </div>
                <div className="col s12"><a href="/forgotPassword">Forgot Password?</a></div>
                <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                  <button
                    style={{
                      width: "150px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px",
                      marginTop: "1rem"
                    }}
                    type="submit"
                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                  >
                    Login
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
