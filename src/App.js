import React, { Component, Suspense, lazy, withSuspense } from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/navbar";
import MyFeed from "./components/MyFeed/MyFeed";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route, Routes } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import LoginPage from "./components/Login/Login";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";

// const DialogsContainer = withSuspense(lazy(() => import('./components/Dialogs/DialogsContainer')));
// const ProfileContainer = withSuspense(lazy(() => import('./components/Profile/ProfileContainer')));
const DialogsContainer = lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = lazy(() =>
  import("./components/Profile/ProfileContainer")
);

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar state={this.props.state.profilePage} />
        <div className="app-wrapper-content">
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route
                path="/profile"
                element={
                  <ProfileContainer
                    store={this.props.store}
                    state={this.props.state.profilePage}
                  />
                }
              />
              <Route
                path="/profile/:userId"
                element={
                  <ProfileContainer
                    store={this.props.store}
                    state={this.props.state.profilePage}
                  />
                }
              />
              <Route path="/myFeed" Component={MyFeed} />
              <Route path="/login" Component={LoginPage} />
              <Route
                path="/dialogs"
                element={
                  <DialogsContainer
                    state={this.props.state.dialogsPage}
                    store={this.props.store}
                  />
                }

                
              />
              <Route
                path="/users"
                element={
                  <UsersContainer
                    state={this.props.state.dialogsPage}
                    store={this.props.store}
                  />
                }
              />
              <Route path="/music" Component={Music} />
              <Route path="/settings" Component={Settings} />
            </Routes>
          </Suspense>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initializeApp })(App);


// import React from "react";
// import { connect } from "react-redux";
// import Profile from "./Profile";
// import axios from "axios";
// import { Navigate } from "react-router-dom";
// import { setUserProfile, getStatus, updateStatus } from "../../redux/profile-reducer";

// class ProfileContainer extends React.Component {
//   refreshProfile() {
//     let userId = this.props.userId;

//     if (!userId) {
//       userId = this.props.authorizedUserId;
//       if (!userId) {
//         return false; 
//       }
//     }

//     this.props.getStatus(userId);
//     axios
//       .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
//       .then((response) => {
//         this.props.setUserProfile(response.data);
//       });
//     return true;
//   }

//   componentDidMount() {
//     this.refreshProfile()
//   }

//   componentDidUpdate(prevProps, prevState, snapshot) {
//     debugger;
//     if (this.props.userId != prevProps.userId) {
//       this.refreshProfile()
      
//     }
//   }

//   render() {
//     if (!this.props.isAuth) return <Navigate to="/login" />;

//     return (
//       <div>
//         <Profile
//           {...this.props}
//           profile={this.props.profile}
//           status={this.props.status}
//           updateStatus={this.props.updateStatus}
//         />
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   profile: state.profilePage.profile,
//   status: state.profilePage.status,
//   authorizedUserId: state.auth.userId,
//   isAuth: state.auth.isAuth,
// });

// export default connect(mapStateToProps, { setUserProfile, getStatus, updateStatus })(ProfileContainer);
