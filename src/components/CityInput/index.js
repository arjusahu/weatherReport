import { Button, Container } from 'react-bootstrap';
import React,{useState} from 'react';
import {Form} from "react-bootstrap";

const CityInput = ({city,setCity,weatherinfo}) => {

    const [err,setErr]=useState("");

   const handleInputChange=(event)=>{
        setCity(event.target.value);
    }
    let handleSubmit=()=>{
        if (!city)
        {
            setErr("Please Enter City")
        }
        else
        {
            weatherinfo();
        }
    }
    return (
       <Container>
            <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>City</Form.Label>
    <Form.Control type="text" value={city} placeholder="Enter city" 
    onChange={handleInputChange} weatherinfo={weatherinfo}/>
    <Form.Text className="text-danger">
        {err}
    </Form.Text>
  </Form.Group>

  
  <Button variant="primary" onClick={handleSubmit}>
    Submit
  </Button>
</Form>
</Container>
        
    );
};

export default CityInput;