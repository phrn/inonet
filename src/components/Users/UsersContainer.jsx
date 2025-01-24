import { connect } from "react-redux";
import Users from "./Users";
import React from "react";
import {
  follow,
  setCurrentPage,
  toggleFollowingProgress,
  unfollow,
} from "../../redux/users-reducer";
import Preloader from "../common/preloader/Preloader";
import { getUsers } from "../../redux/users-reducer";
import { getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingProgress, getUsersSuperSelector } from "../../redux/users-selectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    const {currentPage, pageSize} = this.props
    this.props.getUsers(
      currentPage,
      pageSize
    );
   
  }
  onPageChanged = (pageNumber) => {
    const {pageSize} = this.props

    this.props.getUsers(pageNumber, pageSize);
  };
  render() {
    return (
      <>
        {/* fake zaglushka */}
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          isFetching={this.props.isFetching}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

// reselect 
let mapStateToProps = (state) => {
  return {
    users: getUsersSuperSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingProgress(state),
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers,
})(UsersContainer);
