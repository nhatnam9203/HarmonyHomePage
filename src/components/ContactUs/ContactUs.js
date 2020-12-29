import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { GoMail } from "react-icons/go";

export default function ContactUs() {
  return (
    <main className="contact m-auto">
      <Row className="contact__container mx-0">
        <Col xs={12} md={6} className="contact__form bg-white">
          <h1 className="contact__form-title text-uppercase font-weight-bold">
            contact us
          </h1>
          <p className="contact__form-text">
            Contact us about thing related to our company or service
          </p>
          <Form>
            <Form.Group>
              <Form.Label>
                Full name <span className="form_required">*</span>
              </Form.Label>
              <Form.Control type="text" placeholder="First and Last name" />
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Email <span className="form_required">*</span>
              </Form.Label>
              <Form.Control type="email" placeholder="Email address" />
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Mesage <span className="form_required">*</span>
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Message"
                className="mb-4"
              />
            </Form.Group>
            <Button
              type="submit"
              className="submit_btn text-center font-weight-bold"
            >
              Send message
            </Button>
          </Form>
        </Col>
        <Col xs={12} md={6} className="contact__info">
          <div className="contact__info-item d-flex flex-column justify-content-center align-items-center">
            <span className="p-2 rounded-circle contact__info-icon mb-3">
              {" "}
              <GoMail className=" " size={30} color="white" />
            </span>
            <p className="contact__info-text text-center">
              djnguyen@harmonypayment.com
            </p>
            <div className="contact__info-divider"></div>
          </div>
          <div className="contact__info-item d-flex flex-column justify-content-center align-items-center">
            <span className="p-2 rounded-circle contact__info-icon mb-3">
              {" "}
              <GoMail className=" " size={30} color="white" />
            </span>
            <p className="contact__info-text text-center">
              800-531-3126
              <br />
              Text: 813-534-0055
              <br />
              Fax: 888-316-8164
            </p>
            <div className="contact__info-divider"></div>
          </div>
          <div className="contact__info-item d-flex flex-column justify-content-center align-items-center pb-4">
            <span className="p-2 rounded-circle contact__info-icon mb-3">
              {" "}
              <GoMail className=" " size={30} color="white" />
            </span>
            <p className="contact__info-text text-center mb-4">
              Harmony Payment System LLC, 35246 US Hwy 19 N.Suite 189 Palm
              Harbor,FL 34684
            </p>
            {/* <div className="contact__info-divider"></div> */}
          </div>
        </Col>
      </Row>
    </main>
  );
}
