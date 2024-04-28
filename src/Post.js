import React, { useState } from "react";
import PropTypes from "prop-types";
import PostHeader from "./PostHeader";

function Post({ post, onRemove, onToggleMarkAsRead }) {
  return (
    <>
      <article>
        <PostHeader
          onRemove={onRemove}
          onToggleMarkAsRead={onToggleMarkAsRead}
          post={post}
        />
        <br />
        <small>{post.subtitle}</small>
        <br />
        Likes: {post.likes / 2}
      </article>

      <br />
    </>
  );
}

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  onToggleMarkAsRead: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Post;
