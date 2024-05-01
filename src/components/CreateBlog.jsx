import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import styles from "../styles/CreateBlog.module.css";
import { useNavigate } from "react-router-dom";
import JoditEditor from "jodit-react";
import PostContext from "../utils/PostContext";
import { v4 as uuidv4 } from "uuid";

const CreateBlog = ({ title }) => {
  const [authorName, setAuthorName] = useState("");
  const [content, setContent] = useState("");
  const [isAuthorNameValid, setIsAuthorNameValid] = useState(true);
  const [isPostContentValid, setIsPostContentValid] = useState(true);
  const [isBtnClicked, setIsBtnClicked] = useState(false);

  const editor = useRef(null);
  const navigate = useNavigate();
  const { setAllBlogs } = useContext(PostContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = title;
  }, []);

  const editorConfig = useMemo(() => {
    return {
      height: "30rem",
      hidePoweredByJodit: true,
      allowResizeY: false,
    };
  }, []);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const trimmedAuthorName = authorName.trim();

    let span = document.createElement("span");
    span.innerHTML = content.trim();
    let actualContent = span.textContent || span.innerText;

    if (trimmedAuthorName.length === 0) {
      setIsAuthorNameValid(false);
      setIsBtnClicked(false);
    }

    if (actualContent.length === 0) {
      setIsPostContentValid(false);
      setIsBtnClicked(false);
    }

    if (!(trimmedAuthorName.length === 0) && !(actualContent.length === 0)) {
      const date = new Date().toDateString().split(" ");

      setAllBlogs((currentPost) => {
        return [
          ...currentPost,
          {
            authorName: trimmedAuthorName,
            content,
            id: uuidv4(),
            date: `${date[1]} ${date[2]}, ${date[3]}`,
          },
        ];
      });

      setAuthorName("");
      setContent("");
      setIsBtnClicked(true);
    }
  };

  const authorNameChangeHandler = (e) => {
    setAuthorName(e.target.value);
    setIsAuthorNameValid(true);
    setIsBtnClicked(false);
  };

  return (
    <div id={styles["main"]}>
      <div className={styles["formCtn"]}>
        <h1 className={styles["mainTitle"]}>Share your experience!!</h1>

        <form onSubmit={formSubmitHandler}>
          <label htmlFor="author-name">Author name</label>
          {!isAuthorNameValid && (
            <span className={styles["errormsg"]}>Please enter author name</span>
          )}
          <input
            type="text"
            id="author-name"
            className={styles["author"]}
            onChange={authorNameChangeHandler}
            value={authorName}
          />

          <label htmlFor="post-content">Blog content</label>
          {!isPostContentValid && (
            <span className={styles["errormsg"]}>
              Please enter Blog content
            </span>
          )}
          <JoditEditor
            id="post-content"
            config={editorConfig}
            className={styles["richTextEditor"]}
            ref={editor}
            value={content}
            tabIndex={0} // tabIndex of textarea
            onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            onChange={(newContent) => {
              setIsPostContentValid(true);

              let span = document.createElement("span");
              span.innerHTML = newContent.trim();
              let actualContent = span.textContent || span.innerText;

              if (!(actualContent.length === 0)) {
                setIsBtnClicked(false);
              }
            }}
          />

          <input
            type="submit"
            value="Post Blog"
            className={styles["postBlog"]}
          />
        </form>

        <button
          className={styles["myBlogBtn"]}
          onClick={() => navigate("/all-posts")}
        >
          My Blogs
        </button>

        {
          <span
            className={
              isBtnClicked
                ? styles["successMsgShow"]
                : styles["successMsgShowHide"]
            }
          >
            Blog Posted
          </span>
        }
      </div>
    </div>
  );
};

export default CreateBlog;
