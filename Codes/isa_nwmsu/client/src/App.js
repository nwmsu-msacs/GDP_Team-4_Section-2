import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-routes/PrivateRoute";
import Home from "./components/home/home";
import ForgotPassword from "./components/auth/ForgotPassword";
import ResetPassword from "./components/auth/ResetPassword";
import developmentInProgress from "./components/developmentInProgress";
import ContactUs from "./components/help/ContactUs";
import Faq from "./components/help/Faq";
import Alumni from "./components/help/Alumni";
import PastEvents from './components/events/pastevents';
import UpcomingEvents from './components/events/upcomingevents';
import Pickup from './components/services/pickup';
import Membership from "./components/services/membership";
import Accommodation from "./components/services/accommodation";
import Volunteer from "./components/services/volunteer";
import PickupManagement from "./components/adminViews/PickupManagement";
import MembershipManagement from "./components/adminViews/MembershipManagement";
import AccommodationManagement from "./components/adminViews/AccommodationManagement";
import VolunteerManagement from "./components/adminViews/VolunteerManagement";
import CreateEvent from "./components/events/createEvent";
import createForum from "./components/forum/ForumPage";
import ISAForum from "./components/forum/IsaForum";
import IndividualReply from "./components/forum/ReplyToIndividualForum";
import RepliesView from "./components/forum/Replies"
import IndividualUser from "./components/user/IndividualUser";
import ManageEvents from "./components/adminViews/ManageEvent";
import ModifyEvent from "./components/adminViews/ModifyExistingEvent";
import AddFAQ from "./components/adminViews/AddFAQ";
import ManageFAQ from "./components/adminViews/FAQManagement";
import ModifyFAQ from "./components/adminViews/ModifyFAQ";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  //logging test
  constructor(props) {
    super(props);
    this.state = {};
  }
  

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            {/* {navbar} */}
            
            <Switch>

              <PrivateRoute exact path="/home" component={Home} />

              <Route exact path="/" component={Landing} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/forgotPassword" component={ForgotPassword} />
              <Route exact path="/reset/:token" component={ResetPassword} />
              <Route exact path="/developmentInProgress" component={developmentInProgress} />
              <Route exact path="/contact" component={ContactUs} />
              <Route exact path="/faq" component={Faq} />
              <Route exact path="/alumni" component={Alumni} />
              <Route exact path="/pastEvents" component={PastEvents} />
              <Route exact path="/upcomingEvents" component={UpcomingEvents} />
              <Route exact path="/pickup" component={Pickup} />
              <Route exact path="/membership" component={Membership} />
              <Route exact path="/accommodation" component={Accommodation} />
              <Route exact path="/volunteer" component={Volunteer} />
              <Route exact path="/pickupManagement" component={PickupManagement} />
              <Route exact path="/accommodationManagement" component={AccommodationManagement} />
              <Route exact path="/volunteerManagement" component={VolunteerManagement} />
              <Route exact path="/membershipManagement" component={MembershipManagement} />
              <Route exact path="/createEvent" component={CreateEvent} />
              <Route exact path="/createForum" component={createForum} />
              <Route exact path="/isaForum" component={ISAForum} />
              <Route exact path="/individualReply" component={IndividualReply} />
              <Route exact path="/repliesView" component={RepliesView} />
              <Route exact path="/individualUser" component={IndividualUser} />
              <Route exact path="/manageEvents" component={ManageEvents} />
              <Route exact path="/modifyEvent" component={ModifyEvent} />
              <Route exact path="/addFaq" component={AddFAQ} />
              <Route exact path="/manageFaq" component={ManageFAQ} />
              <Route exact path="/modifyFaq" component={ModifyFAQ} />

              {this.state.loggedIn === true ? <Route exact path='/logout' component={developmentInProgress} /> : null}
            </Switch>


          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
