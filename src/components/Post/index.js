import React, { useState } from "react";
import PropTypes from "prop-types";
import PostHeader from "./PostHeader";
import * as postStyles from "./post.scss";

function Post({ post, onRemove, onToggleMarkAsRead }) {
  return (
    <article
      className={
        post.removed
          ? `${postStyles.post} ${postStyles.deleted}`
          : postStyles.post
      }
    >
      <PostHeader
        onRemove={onRemove}
        onToggleMarkAsRead={onToggleMarkAsRead}
        post={post}
      />
      <small>{post.subtitle}</small>
      Likes: {post.likes / 2}
    </article>
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
    removed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Post;
