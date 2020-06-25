import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            male:true,
            female: false,
            password: "",
            password2: "",
            errors: {}
        };
    }

    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/home");
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            male: this.state.male,
            female: this.state.female,
            password: this.state.password,
            password2: this.state.password2

        };
        this.props.registerUser(newUser, this.props.history);
    };
    render() {
        const { errors } = this.state;
        return (
            <div className="container">
                <div style={{ marginTop: "2rem" }} className="row">
                    <div className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                        <a href="/home">Go back to home</a>
                        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                            <h4>
                                <b>Register</b>
                            </h4>

                        </div>
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="input-field col s12">
                                <label htmlFor="name">Name</label>
                                <input
                                    onChange={this.onChange}
                                    value={this.state.name}
                                    error={errors.name}
                                    id="name"
                                    type="text"
                                    className={classnames("", {
                                        invalid: errors.name
                                    })}
                                />

                                <span className="red-text">{errors.name}</span>
                            </div>
                            <div className="input-field col s12">
                                <label htmlFor="email">Email</label>
                                <input
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    error={errors.email}
                                    id="email"
                                    type="email"
                                    className={classnames("", {
                                        invalid: errors.email
                                    })}
                                />

                                <span className="red-text">{errors.email}</span>
                            </div>


                            <div className="col s12">
                                <label>Gender&nbsp;&nbsp;</label>
                                <label htmlFor="male">
                                    <input class="with-gap"  onChange={this.onChange}
                                    value={this.state.male}
                                    error={errors.male}
                                    id="male"
                                    name="gender"
                                    value="male"
                                    type="radio" checked
                                    className={classnames("", {
                                        invalid: errors.male
                                    })} />
                                    <span>Male</span>
                                </label>
                                &nbsp;&nbsp;
                                <label>
                                <input class="with-gap"  onChange={this.onChange}
                                    value={this.state.female}
                                    error={errors.female}
                                    id="female"
                                    name="gender"
                                    value="female"
                                    type="radio" 
                                    className={classnames("", {
                                        invalid: errors.female
                                    })} />
                                    <span>Female</span>
                                </label>
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
                                        invalid: errors.password
                                    })}
                                />

                                <span className="red-text">{errors.password}</span>
                            </div>
                            <div className="input-field col s12">
                                <label htmlFor="password2">Confirm Password</label>
                                <input
                                    onChange={this.onChange}
                                    value={this.state.password2}
                                    error={errors.password2}
                                    id="password2"
                                    type="password"
                                    className={classnames("", {
                                        invalid: errors.password2
                                    })}
                                />

                                <span className="red-text">{errors.password2}</span>
                            </div>
                            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                                <p className="grey-text text-darken-1">
                                    Already have an account? <Link to="/login">Log in</Link>
                                </p>
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
                                    Sign up
                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(Register));