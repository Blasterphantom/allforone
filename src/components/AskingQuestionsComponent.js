import { Button, Container, Form, FormControl, Row } from "react-bootstrap";
import { useState } from "react";
import { GetAskingQuestionsData} from "../Services/DataService";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

export default function AskingQuestionsComponent(){
    const [inputValue1, setInputValue1] = useState('Enter Number : ');
    const [inputValue2, setInputValue2] = useState('');
    const [inputField, setInputField] = useState('Output');

    const handleInputValue1 = (event) => {
        setInputValue1(event.target.value);
    };
    
    const handleInputValue2 = (event) => {
        setInputValue2(event.target.value);
    };

    const handleKeyDown = async (event) => {
        const pattern = /^[a-zA-Z]+$/;
        if (event.key === 'Enter' && pattern.test(inputValue1) && inputValue2 != '') {
            const response = await GetAskingQuestionsData(inputValue1,inputValue2);
            console.log(response);
            setInputField(response);
        }
        else if(event.key ==='Enter'){
            setInputField("Enter a valid response")
        }
    };

    return(
        <div className="divBackSayHello">
            <Container fluid className="containerBackAskingQuestions">
                <Row className="titleRowSayHello">
                    <div className="titleBoxAskingQuestions">
                        <h1 className="titleTextSayHello">Asking Questions</h1>
                    </div>
                </Row>

                <Row className="inputRowSayHello">
                    <Form.Control className="inputAskingQuestions" type="input" placeholder="Enter Name : " onChange={handleInputValue1} onKeyDown={handleKeyDown}/>
                </Row>

                <Row className="inputRowSayHello">
                    <Form.Control className="inputAskingQuestions" type="input" placeholder="Enter Time You Woke Up : " onChange={handleInputValue2} onKeyDown={handleKeyDown}/>
                </Row>

                <Row className="outputRowSayHello">
                    <div className="outputBoxAskingQuestions">
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