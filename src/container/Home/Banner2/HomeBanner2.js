import React, { useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import Modal from "react-bootstrap/Modal";
import { useMediaQuery } from "react-responsive";

export default function HomeBanner2() {
  const [show, setShow] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 576px)" });

  return (
    <main>
      {isMobile ? (
        <>
          <div className="home_banner2 d-flex flex-column justify-content-start align-items-center w-100 ">
            <div className="position-absolute d-flex justify-content-center align-items-center flex-column home_banner2__content">
              <button
                className="border-0 rounded-circle home_banner2-btn"
                onClick={() => setShow(true)}
              >
                <AiFillPlayCircle className="home_banner2-icon" />
              </button>
            </div>
            <Modal
              show={show}
              onHide={() => setShow(false)}
              size="xl"
              aria-labelledby="video-modal1"
              centered
              className="video-modal text-center"
            >
              <Modal.Body className="video-modal-body">
                <iframe
                  title="HarmonyPay Salon POS"
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/UgJuD4ZC1Lk"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Modal.Body>
            </Modal>
          </div>
          <div>
            <div className="d-flex justify-content-center align-items-center flex-column home_banner2__content">
              <h1 className="home_banner2-title text-uppercase font-weight-bold text-center ">
                salon 4-in-1 pos system
              </h1>
              <p className="home_banner2-text1 text-md-center mb-1 ">
                HarmonyPay is a module POS system which included many Apps
                working with each other through an API (Application Programing
                Interface), allowing for mobile interactive booking, On-demand
                marketing, and mobile payment.
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="home_banner2 d-flex flex-column justify-content-start align-items-center w-100 ">
          <div className="position-absolute d-flex justify-content-center align-items-center flex-column home_banner2__content">
            <h1 className="home_banner2-title text-uppercase font-weight-bold text-center ">
              salon 4-in-1 pos system
            </h1>
            <p className="home_banner2-text text-center mb-2 ">
              HarmonyPay is a module POS system which included many Apps working
              with each other through an API (Application Programing Interface),
              allowing for mobile interactive booking, On-demand marketing, and
              mobile payment.
            </p>
            <button
              className="border-0 rounded-circle home_banner2-btn"
              onClick={() => setShow(true)}
            >
              <AiFillPlayCircle className="home_banner2-icon" />
            </button>
          </div>
          <Modal
            show={show}
            onHide={() => setShow(false)}
            size="xl"
            aria-labelledby="video-modal2"
            centered
            className="video-modal text-center"
          >
            <Modal.Body className="video-modal-body">
              <iframe
                title="HarmonyPay Salon POS"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/UgJuD4ZC1Lk"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Modal.Body>
          </Modal>
        </div>
      )}
    </main>
  );
}
