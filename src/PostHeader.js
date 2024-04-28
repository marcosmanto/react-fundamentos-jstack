import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

export default function PostHeader({ post, onRemove, onToggleMarkAsRead }) {
  return (
    <>
      <strong>{post.read ? <s>{post.title}</s> : post.title}</strong>
      &nbsp;<Button onClick={() => onRemove(post.id)}>Remover</Button>
      &nbsp;
      <Button onClick={() => onToggleMarkAsRead(post.id)}>
        {post.read ? "Mark as UnRead" : "Mark as Read"}
      </Button>
    </>
  );
}

PostHeader.propTypes = {
  onRemove: PropTypes.func.isRequired,
  onToggleMarkAsRead: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired,
};
