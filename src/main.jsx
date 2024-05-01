import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import CreateBlog from "./components/CreateBlog.jsx";
import AllBlogs from "./components/AllBlogs.jsx";
import { NotFound } from "./components/NotFound";
import PostContext from "./utils/PostContext";
import { Header } from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<Navigate to="/create-post" />} />
      <Route path="create-post" element={<CreateBlog title="Create Blog" />} />
      <Route path="all-posts" element={<AllBlogs title="All Blogs" />} />
      <Route path="*" element={<NotFound title="404 Page" />} />
    </Route>
  )
);

function App() {
  const [allBlogs, setAllBlogs] = useState([]);

  return (
    <PostContext.Provider
      value={{
        allBlogs,
        setAllBlogs,
      }}
    >
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </PostContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
