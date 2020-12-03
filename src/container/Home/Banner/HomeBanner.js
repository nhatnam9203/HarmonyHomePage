import React from "react";
import { Button, Container } from "react-bootstrap";

export default function HomeBanner() {
  return (
    <main className="banner">
      <Container>
        <div className="banner_wrapper">
          <h1 className="banner_title">
            click, save and pay the harmony way ;)
          </h1>
          <p className="banner_text">
            Whether you&apos;re a small business, a growing business, or a
            struggling business, with the Harmony Pay app, you&apos;ll be a
            great business. Newbies welcomed :)
          </p>
          <p>
            <Button className="banner_button">Request info</Button>
          </p>
        </div>
      </Container>
    </main>
  );
}
