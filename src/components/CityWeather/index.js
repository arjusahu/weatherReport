import React,{useState} from 'react';
import { Container } from 'react-bootstrap';
import "./CityWeather.css"

const CityWeather= ({info}) => {
   console.log(info,"info");
    return (
        <Container className="text-center main" style={{fontSize:"30px"}}>
        <div>
        {info.map((data)=><div className="report">{data}</div>)}
        </div>
        </Container>
    );
};

export default CityWeather;