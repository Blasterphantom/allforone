import { Button, Container, Form, FormControl, Row } from "react-bootstrap";
import { useState } from "react";
import { GetReverseItData} from "../Services/DataService";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

export default function ReverseItComponent(){

    const [inputField, setInputField] = useState('Output');

    const handleKeyDown = async (event) => {
        if (event.key === 'Enter'){
            const response = await GetReverseItData(event.target.value);
            console.log(response);
            setInputField(response);
        }


    };

    return (
        <div className="divBackSayHello">
        <Container fluid className="containerBackReverseIt">
            <Row className="titleRowSayHello">
                <div className="titleBoxReverseIt">
                    <h1 className="titleTextSayHello">Reverse It</h1>
                </div>
            </Row>

            <Row className="inputRowSayHello">
                <Form.Control className="inputReverseIt" type="input" placeholder="Enter Number or Word : " onKeyDown={handleKeyDown}/>
            </Row>

            <Row className="outputRowSayHello">
                <div className="outputBoxReverseIt">
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