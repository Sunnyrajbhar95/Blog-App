import React, { useEffect } from "react";
import { blogData } from "../utilities/Slice";
import { useDispatch } from "react-redux";
import BlogBanner from "./BlogBanner";
import Filterpage from "./Filterpage";
import Blogpage from "./Blogpage";
import { filterdata } from "../utilities/FilterSlice";
import Pagination from "./Pagination";
import { useLocation, Outlet } from "react-router-dom";

function Blog() {
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location);

  const getdata = async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/mdalmamunit427/modern-react-js-blog-starter-files/master/api/blogsData.json"
    );
    const res = await response.json();
    dispatch(blogData(res));
    dispatch(filterdata(res));
  };

  useEffect(() => {
    getdata();
  }, []);

  const isNestedRouteActive = location.pathname !== "/body/blog";

  return (
    <div>
      <BlogBanner />
      <Outlet />
      {!isNestedRouteActive && (
        <div className="w-[70%] m-auto overflow-x-hidden outline-none">
          <Filterpage />
          <Blogpage />
          <Pagination />
        </div>
      )}
    </div>
  );
}

export default Blog;
