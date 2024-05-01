import { createContext } from "react";

const PostContext = createContext({
  allBlogs: [],
  setAllBlogs: function () {},
});

export default PostContext;
