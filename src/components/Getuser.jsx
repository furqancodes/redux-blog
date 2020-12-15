import React from "react";
import { connect } from "react-redux";

const Getuser = (props) => {
  const { user } = props;

  if (!user) {
    return <div className="header">name not found</div>;
  }
  return <div className="header">{user.name}</div>;
};
const mapStateToProps = (state, ownProps) => {
  // console.log(state.user);
  return {
    user: state.user.find((us) => {
      return us.id === ownProps.id;
    }),
  };
};
export default connect(mapStateToProps)(Getuser);
