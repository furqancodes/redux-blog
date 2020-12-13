import React, { useEffect } from "react";
import { connect } from "react-redux";
import { GetPostRequest } from "../actions";
import Getuser from "./Getuser";
const Postlist = (props) => {
  const { GetPostRequest } = props;
  useEffect(() => {
    GetPostRequest();
  }, [GetPostRequest]);
  if (props.posts) {
    const newpost = props.posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.title}</p>
            </div>
            <Getuser id={post.userId} />
          </div>
        </div>
      );
    });
    return <div className="ui relaxed divided list">{newpost}</div>;
  }
  return <div></div>;
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};
export default connect(mapStateToProps, { GetPostRequest })(Postlist);
