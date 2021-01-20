import React from "react";
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player";

export default function BlogsBanner() {
  return (
    <main className="blogs_banner-container">
      <div className="blogs_banner w-100 text-uppercase">
        <div className="blogs_banner-overlay w-100 h-100 d-flex justify-content-center align-items-center">
          <h1 className="blogs_banner-title font-weight-bold text-white text-center m-0">
            blogs
          </h1>
        </div>
      </div>
      <Container>
        <div className="blogs_banner-video">
          <ReactPlayer
            url="https://www.facebook.com/risewithaurora/videos/171867597241231"
            controls
            width="100%"
            height="auto"
          />
        </div>
      </Container>
    </main>
  );
}
