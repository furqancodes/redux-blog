import React, { useEffect } from "react";
import { connect } from "react-redux";
import sendGetRequest from "../actions";
const Postlist = (props) => {
  const { sendGetRequest } = props;
  useEffect(() => {
    sendGetRequest();
  }, [sendGetRequest]);
  if (props.posts) {
    return props.posts.map((post) => <h3 key={post.id}>{post.title}</h3>);
  }
  return <div></div>;
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};
export default connect(mapStateToProps, { sendGetRequest })(Postlist);
