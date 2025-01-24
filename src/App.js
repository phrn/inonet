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
