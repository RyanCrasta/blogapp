import React from "react";
import DOMPurify from "dompurify";
import styles from "../styles/Post.module.css";

const Post = ({ post }) => {
  return (
    <div className={styles["postDetail"]}>
      <div
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
      />

      <p className={styles["authorDetails"]}>
        Post by {post.authorName} on {post.date}
      </p>
    </div>
  );
};

export default Post;
