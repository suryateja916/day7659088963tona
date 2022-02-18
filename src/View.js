import React, { useState, useEffect } from 'react';
import CarouselComponent from './CarouselComponent';

function View() {
    const [data, setData] = useState([]);

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
console.log(data);
    return (
        <>
        <CarouselComponent props={data}></CarouselComponent>
        </>
    )
}

export default View;