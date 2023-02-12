import { Button, Container, Form, FormControl, Row } from "react-bootstrap";
import { useState } from "react";
import { GetGreaterData} from "../Services/DataService";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

export default function GreaterComponent(){
    const [inputValue1, setInputValue1] = useState('Enter Number : ');
    const [inputValue2, setInputValue2] = useState('Enter Second Number : ');
    const [inputField, setInputField] = useState('Output');

    const handleInputValue1 = (event) => {
        setInputValue1(event.target.value);
    };
    
    const handleInputValue2 = (event) => {
        setInputValue2(event.target.value);
    };

    const handleKeyDown = async (event) => {
        const pattern = /^\d+$/;
        if (event.key === 'Enter' && pattern.test(inputValue1) && pattern.test(inputValue2)) {
            const response = await GetGreaterData(inputValue1,inputValue2);
            console.log(response);
            setInputField(response);
        }
        else if(event.key ==='Enter'){
            setInputField("Enter a valid response")
        }
    };

    return(
        <div className="divBackSayHello">
            <Container fluid className="containerBackGreater">
                <Row className="titleRowSayHello">
                    <div className="titleBoxGreater">
                        <h1 className="titleTextSayHello">Greater Than or less Than</h1>
                    </div>
                </Row>

                <Row className="inputRowSayHello">
                    <Form.Control className="inputGreater" type="input" placeholder="Enter Number : " onChange={handleInputValue1} onKeyDown={handleKeyDown}/>
                </Row>

                <Row className="inputRowSayHello">
                    <Form.Control className="inputGreater" type="input" placeholder="Enter Second Number : " onChange={handleInputValue2} onKeyDown={handleKeyDown}/>
                </Row>

                <Row className="outputRowSayHello">
                    <div className="outputBoxGreater">
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