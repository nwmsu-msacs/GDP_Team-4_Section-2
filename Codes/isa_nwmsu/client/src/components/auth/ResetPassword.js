import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


const loading = {
    margin: '1em',
    fontSize: '24px',
};

const title = {
    pageTitle: 'Password Reset Screen',
};


class ResetPassword extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            updated: false,
            isLoading: true,
            error: false,
        };
    }

    async componentDidMount() {
        const {
            match: {
                params: { token },
            },
        } = this.props;
        try {
            const response = await axios.get('http://localhost:5000/api/users/reset/' + token);
            if (response.data.message === 'password reset link a-ok') {
                this.setState({
                    email: response.data.email,
                    updated: false,
                    isLoading: false,
                    error: false,
                });
            }
        } catch (error) {
            console.log(error.response.data);
            this.setState({
                updated: false,
                isLoading: false,
                error: true,
            });
        }
    }

    handleChange = name => (event) => {
        this.setState({
            [name]: event.target.value,
        });
    };

    updatePassword = async (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        const {
            match: {
                params: { token },
            },
        } = this.props;
        try {
            const response = await axios.put(
                'http://localhost:5000/api/users/updatePasswordViaEmail',
                {
                    email,
                    password,
                    resetPasswordToken: token,
                },
            );
            if (response.data.message === 'password updated') {
                this.setState({
                    updated: true,
                    error: false,
                });
            } else {
                this.setState({
                    updated: false,
                    error: true,
                });
            }
        } catch (error) {
            console.log(error.response.data);
        }
    };

    render() {
        const {
            password, error, isLoading, updated
        } = this.state;

        if (error) {
            return (
                <div>

                    <div style={loading}>
                        <h4>Problem resetting password. Please send another reset link.</h4>
                        <p> <a href="/">Go back home</a></p>
                        <p> <a href="/forgotPassword">Forgot Password</a></p>
                    </div>
                </div>
            );
        }
        if (isLoading) {
            return (
                <div>
                    <div>
                        <span class="red-text">
                            Loading User Data...</span></div>
                </div>
            );
        }
        return (
            
            <div className="container">
                <div style={{ marginTop: "2rem" }} className="row">
          <div className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
          <a href="/">Go Back Home</a>
                <h5>
                <b>Enter your new password..</b>
              </h5>
                <div className="input-field col s12">
                <form noValidate onSubmit={this.updatePassword}>
                    {/* <label htmlFor="password">Password</label> */}
                    <input
                        onChange={this.handleChange('password')}
                        value={password}
                        id="password"
                        type="password"
                        placeholder="enter new password"
                    />
                    <button
                        style={{
                            width: "250px",
                            borderRadius: "3px",
                            letterSpacing: "1.5px",
                            marginTop: "1rem"
                        }}
                        type="submit"
                        className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                    >
                        Update Password
                </button>
                </form>

                {updated && (
                    <div>
                        <p>
                            Your password has been successfully reset, please try logging in
                            again.
            </p>
                        <p> <a href="/login">Login</a></p>
                    </div>
                )}
                
            </div>
            </div>
            </div>
            </div>
        );
    }
}

ResetPassword.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            token: PropTypes.string.isRequired,
        }),
    }),
};

export default ResetPassword;
