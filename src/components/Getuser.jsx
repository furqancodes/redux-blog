import React, { useEffect } from "react";
import { connect } from "react-redux";

import { GetUserRequest } from "../actions";

const Getuser = (props) => {
  const found = props.user.find((us) => {
    return us.userId === props.id;
  });
  const { GetUserRequest, id } = props;
  useEffect(() => {
    GetUserRequest(id);
  }, [GetUserRequest, id]);
  if (found) {
    return null;
  }
  return <div>{found.name}</div>;
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps, { GetUserRequest })(Getuser);
