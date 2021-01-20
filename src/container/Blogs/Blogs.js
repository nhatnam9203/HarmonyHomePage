import React from "react";
import { Helmet } from "react-helmet";
import Topfooter from "../../components/Footer/TopFooter";
import BlogsBanner from "./BlogsBanner/BlogsBanner";

export default function Blogs() {
  return (
    <>
      <Helmet>
        <title>Harmony | Blogs</title>
        <meta name="Blogs" content="Harmony Blogs" />
      </Helmet>
      <BlogsBanner />
      <Topfooter />
    </>
  );
}
