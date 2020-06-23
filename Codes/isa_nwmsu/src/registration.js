import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './CSS/registration.css';
// import img from react;

function Registration() {
    return (
        <body>
             {/* <img class="page_container"></img> */}
            <div class="signup__container">
                <div class="container__child signup__thumbnail">
                    {/* <div class="thumbnail__logo">
                        <img src ="nw_image.png" ></img>
                        <h1 class="logo__text">ISA</h1>
                    </div> */}
                    <div class="thumbnail__content text-center">
                        <h1 class="heading--primary">Welcome to Indian student association.</h1>
                        <h2 class="heading--secondary">Are you ready to join the ISA?</h2>
                    </div>
                    <div class="thumbnail__links">
                        <ul class="list-inline m-b-0 text-center">
                            <li><a href="http://alexdevero.com/" target="_blank"><i class="fa fa-globe"></i></a></li>
                            <li><a href="https://www.behance.net/alexdevero" target="_blank"><fa class="fa fa-behance"></fa></a></li>
                            <li><a href="https://github.com/alexdevero" target="_blank"><i class="fa fa-github"></i></a></li>
                            <li><a href="https://twitter.com/alexdevero" target="_blank"><i class="fa fa-twitter"></i></a></li>
                        </ul>
                    </div>
                    <div class="signup__overlay "></div>
                </div>
                <div class="container__child signup__form " >
                    <form action="#">
                        <div class="form-group">
                            <label for="username">Username</label>
                            <input class="form-control" type="text" name="username" id="username" placeholder="james.bond" required />
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input class="form-control" type="text" name="email" id="email" placeholder="james.bond@spectre.com" required />
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input class="form-control" type="password" name="password" id="password" placeholder="********" required />
                        </div>
                        <div class="form-group">
                            <label for="passwordRepeat">Repeat Password</label>
                            <input class="form-control" type="password" name="passwordRepeat" id="passwordRepeat" placeholder="********" required />
                        </div><br />
                        <div class="form-group">
                            <input class="btn btn--form" type="submit" value="Register" /><br />
                            <a class="signup__link" href="#">I am already a member</a>
                        </div>

                    </form>

                </div>
            </div>
        </body>

    );
}

export default Registration;