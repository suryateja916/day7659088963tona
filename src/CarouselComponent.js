import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Row, Col } from 'react-bootstrap';

function CarouselComponent() {
    const [data, setData] = useState([]);
    const [dataId, setId] = useState([]);
    const getData = () => {
        fetch('./assets/api/details.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                setData(myJson)
            });
    }
    useEffect(() => {
        getData()
    }, [])
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const handleClick = (value) => {
        console.log(value);
        setId(value);
    };
    return (
        <>
            <div className="container">
                <div className="carousel">
                    <h1>Daytona Trip gallery</h1>
                    <Carousel showDots={true} responsive={responsive}>
                        {
                            data.map((item) =>
                                <div key={item.id} onClick={() => handleClick(item.id)}>
                                    <img src={item.image} />
                                </div>
                            )
                        }
                    </Carousel>
                </div>
                <div className="details">
                    <h1>Details</h1>
                    {
                        data.map((data) =>
                            data.id === dataId ?
                                <div className="cont">
                                    <Row>
                                        <Col lg="4">
                                        <img src={data.image} />
                                        </Col>
                                        <Col lg="8">
                                            <h2>{data.title}</h2>
                                            <p>{data.content}</p>
                                        </Col>
                                    </Row>
                                    <button>Scan Now</button>
                                </div> : ''
                        )
                    }
                </div>
            </div>
        </>

    );


}

export default CarouselComponent;