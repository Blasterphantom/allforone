import { Button, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { GetSayHelloData} from "../Services/DataService";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

export default function SayHelloComponent(){

    const [inputField, setInputField] = useState('Output');

    const handleKeyDown = async (event) => {
        const pattern = /^[a-zA-Z]+$/;
        if (event.key === 'Enter' && pattern.test(event.target.value)) {
            const response = await GetSayHelloData(event.target.value);
            console.log(response);
            setInputField(response);
        }
        else if(event.key ==='Enter'){
            setInputField("Enter a valid response")
        }
    };

    return(
        <div className="divBackSayHello">
            <Container fluid className="containerBackSayHello">
                <Row className="titleRowSayHello">
                    <div className="titleBoxSayHello">
                        <h1 className="titleTextSayHello">Say Hello</h1>
                    </div>
                </Row>

                <Row className="inputRowSayHello">
                    <Form.Control className="inputSayHello" type="input" placeholder="Enter Name : " onKeyDown={handleKeyDown}/>
                </Row>

                <Row className="outputRowSayHello">
                    <div className="outputBoxSayHello">
                        <h1 className="outputTextSayHello"> {inputField} </h1>
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

