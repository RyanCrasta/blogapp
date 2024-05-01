import React, { useContext, useEffect } from "react";
import PostContext from "../utils/PostContext";
import styles from "../styles/AllBlogs.module.css";
import cardData from "../utils/CardsIndo.json";
import { Card } from "./Card";
import Post from "./Post";
import { useNavigate } from "react-router-dom";

const AllBlogs = ({ title }) => {
  const val = useContext(PostContext);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = title;
  }, []);

  return (
    <div>
      <div className={styles["banner"]}>
        <div>
          <h2>I share my learnings and experiences </h2>
          <p>
            You would find everything here from tech to places to visit, from
            finance to movie reviews if that sounds interesting then follow, my
            blog page
          </p>
        </div>
      </div>

      <div className={styles["cardDetails"]}>
        {cardData.map((cardInfo) => {
          return <Card cardInfo={cardInfo} key={cardInfo.id} />;
        })}
      </div>

      <div className={styles["blogContentCtn"]}>
        <main>
          {val.allBlogs.length > 0 && (
            <h2 className={styles["myBlog"]}>My Blogs</h2>
          )}

          {val.allBlogs.map((post) => {
            return <Post post={post} key={post.id} />;
          })}
        </main>

        <aside>
          <div className={styles["aboutMe"]}>
            <em>About</em>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              nesciunt, atque veniam ut tenetur dignissimos blanditiis inventore
              quam unde molestias laboriosam aspernatur possimus fugiat, iusto
              deleniti!
            </p>
          </div>

          <div className={styles["socialLink"]}>
            <em>Elsewhere</em>
            <a target="_blank" href="https://www.linkedin.com/in/ryan-crasta/">
              LinkedIn
            </a>
          </div>

          <button
            onClick={() => {
              navigate("/create-post");
            }}
          >
            Create Blog
          </button>
        </aside>
      </div>
    </div>
  );
};

export default AllBlogs;
