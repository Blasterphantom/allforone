import { Button, Container, Form, FormControl, Row } from "react-bootstrap";
import { useState } from "react";
import { GetOddOrEvenData} from "../Services/DataService";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

export default function OddOrEvenComponent(){

    const [inputField, setInputField] = useState('Output');

    const handleKeyDown = async (event) => {
        const pattern = /^\d+$/;
        if (event.key === 'Enter' && pattern.test(event.target.value)) {
            const response = await GetOddOrEvenData(event.target.value);
            console.log(response);
            setInputField(response);
        }
        else if(event.key ==='Enter'){
            setInputField("Enter a valid response")
        }
    };

    return(
        <div className="divBackSayHello">
            <Container fluid className="containerBackOddOrEven">
                <Row className="titleRowSayHello">
                    <div className="titleBoxOddOrEven">
                        <h1 className="titleTextSayHello">Odd or Even</h1>
                    </div>
                </Row>

                <Row className="inputRowSayHello">
                    <Form.Control className="inputOddOrEven" type="input" placeholder="Enter Number : " onKeyDown={handleKeyDown}/>
                </Row>

                <Row className="outputRowSayHello">
                    <div className="outputBoxOddOrEven">
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