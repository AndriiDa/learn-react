import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PostItem from "./PostItem";

import { postsOperations } from "../../store/posts";

class PostsList extends Component {
  componentDidMount() {
    const { getAllPosts } = this.props;
    console.log("GrandChild did mount.");
    getAllPosts();
  }

  render() {
    const { isPostsLoading, postsData } = this.props;

    if (isPostsLoading) {
      return <p>Loading…</p>;
    }

    console.log(postsData);
    const list = postsData.map(post => (
      <li key={post.id}>
        <PostItem post={post} />
      </li>
    ));

    return (
      <div className="post">
        <ul>{list}</ul>
      </div>
    );
  }
}

PostsList.propTypes = {
  postsData: PropTypes.array
};

const mapStateToProps = state => {
  return {
    isPostsLoading: state.posts.isLoading,
    postsData: state.posts.postsData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllPosts: () => dispatch(postsOperations.fetchPostsData())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsList);
