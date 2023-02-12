import { Button, Container, Form, FormControl, Row } from "react-bootstrap";
import { useState } from "react";
import { GetRestaurantPickerData} from "../Services/DataService";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

export default function RestaurantPickerComponent(){

    const [inputField, setInputField] = useState('Output');

    const handleKeyDown = async (event) => {
        if (event.key === 'Enter' && event.target.value.toLowerCase() === 'mexican' || event.target.value.toLowerCase() === 'chinese' || event.target.value.toLowerCase() === 'american'){
            const response = await GetRestaurantPickerData(event.target.value.toLowerCase());
            console.log(response);
            setInputField(response);
        }
        else if(event.key ==='Enter'){
            setInputField("Enter a valid response")
        }


    };

    return (
        <div className="divBackSayHello">
        <Container fluid className="containerBackRestaurantPicker">
            <Row className="titleRowSayHello">
                <div className="titleBoxRestaurantPicker">
                    <h1 className="titleTextSayHello">Restaurant Picker</h1>
                </div>
            </Row>

            <Row className="inputRowSayHello">
                <Form.Control className="inputRestaurantPicker" type="input" placeholder="mexican, american, or chinese?" onKeyDown={handleKeyDown}/>
            </Row>

            <Row className="outputRowSayHello">
                <div className="outputBoxRestaurantPicker">
                    <h1 className="outputTextSayHello">{inputField}</h1>
                </div>
            </Row>

            <Row className="homeButtonRow">
                <Link className="linkHome" to={"/"}>
                    <Button className="homeButton">Home</Button>
                </Link>
            </Row>

        </Container>
    </div>
    );
}