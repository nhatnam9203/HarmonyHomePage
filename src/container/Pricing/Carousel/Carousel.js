import React from "react";
import { Card } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Carousell() {
  return (
    <main className="carousel">
      <h1 className="carousel__title text-uppercase font-weight-bold text-center">
        Digital Web Marketing
      </h1>
      <p className="carousel__text text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <Carousel
        additionalTransfrom={0}
        arrows
        // autoPlay
        // autoPlaySpeed={1500}
        centerMode={false}
        className="carouesl__container w-75 m-auto"
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={true}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable
      >
        <Card className="carousel__card mx-4 ">
          <Card.Img variant="top" src="https://picsum.photos/200/100" />
          <Card.Body className="p-4">
            <Card.Title className="carousel__card-title text-capitalize font-weight-bold">
              Website template Tittle
            </Card.Title>
            <Card.Text className="carousel__card-text">Descrtiption</Card.Text>
            <Card.Text className="carousel__card-pricing">
              From $ 49.00/year
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="carousel__card mx-4">
          <Card.Img variant="top" src="https://picsum.photos/200/100" />
          <Card.Body className="p-4">
            <Card.Title className="carousel__card-title text-capitalize font-weight-bold">
              Website template Tittle
            </Card.Title>
            <Card.Text className="carousel__card-text">Descrtiption</Card.Text>
            <Card.Text className="carousel__card-pricing">
              From $ 49.00/year
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="carousel__card mx-4">
          <Card.Img variant="top" src="https://picsum.photos/200/100" />
          <Card.Body className="p-4">
            <Card.Title className="carousel__card-title text-capitalize font-weight-bold">
              Website template Tittle
            </Card.Title>
            <Card.Text className="carousel__card-text">Descrtiption</Card.Text>
            <Card.Text className="carousel__card-pricing">
              From $ 49.00/year
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="carousel__card mx-4">
          <Card.Img variant="top" src="https://picsum.photos/200/100" />
          <Card.Body className="p-4">
            <Card.Title className="carousel__card-title text-capitalize font-weight-bold">
              Website template Tittle
            </Card.Title>
            <Card.Text className="carousel__card-text">Descrtiption</Card.Text>
            <Card.Text className="carousel__card-pricing">
              From $ 49.00/year
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="carousel__card mx-4">
          <Card.Img variant="top" src="https://picsum.photos/200/100" />
          <Card.Body className="p-4">
            <Card.Title className="carousel__card-title text-capitalize font-weight-bold">
              Website template Tittle
            </Card.Title>
            <Card.Text className="carousel__card-text">Descrtiption</Card.Text>
            <Card.Text className="carousel__card-pricing">
              From $ 49.00/year
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="carousel__card mx-4">
          <Card.Img variant="top" src="https://picsum.photos/200/100" />
          <Card.Body className="p-4">
            <Card.Title className="carousel__card-title text-capitalize font-weight-bold">
              Website template Tittle
            </Card.Title>
            <Card.Text className="carousel__card-text">Descrtiption</Card.Text>
            <Card.Text className="carousel__card-pricing">
              From $ 49.00/year
            </Card.Text>
          </Card.Body>
        </Card>
      </Carousel>
    </main>
  );
}
