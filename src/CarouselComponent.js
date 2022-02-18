import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Row, Col } from "react-bootstrap";

const CarouselComponent = (props) => {
  const data = props.props;
  const [dataId, setId] = useState([]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const handleClick = (value) => {
    console.log(value);
    setId(value);
  };
  return (
    <>
      <div className="container">
        <div className="carousel">
          <h1>Daytona Trip Gallery</h1>
          <Carousel showDots={true} responsive={responsive}>
            {data?.map((item) => (
              <div key={item.id} onClick={() => handleClick(item.id)}>
                {item.image === "" ? (
                  <img
                    className={item.id === dataId ? "active" : ""}
                    src="assets/img/dummy.jpg"
                    alt={item.title}
                  />
                ) : (
                  <img
                    className={item.id === dataId ? "active" : ""}
                    src={item.image}
                    alt={item.title}
                  />
                )}
              </div>
            ))}
          </Carousel>
        </div>
        <div className="details">
          <h1>Details</h1>
          {data?.map((data) =>
            data.id === dataId ? (
              <div className="cont">
                <Row>
                  <Col lg="4">
                    {data.image === "" ? (
                      <img
                        src="assets/img/dummy.jpg"
                        alt={data.title}
                      />
                    ) : (
                      <img
                        src={data.image}
                        alt={data.title}
                      />
                    )}
                  </Col>
                  <Col lg="8">
                    <h2>{data.title}</h2>
                    <p>{data.quantity}</p>
                    <p>{data.content}</p>
                  </Col>
                </Row>
                <Row>
                  <h3>{data.feature}</h3>
                  <p>{data.pointone}</p>
                  <p>{data.pointtwo}</p>
                  <p>{data.pointthree}</p>
                  <p>{data.pointfour}</p>
                </Row>
                <button>Scan Now</button>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </>
  );
};

export default CarouselComponent;
