import { Button, Container, Form, FormControl, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { GetMadLibData} from "../Services/DataService";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

export default function MadLibComponent(){
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [inputValue3, setInputValue3] = useState('');
    const [inputValue4, setInputValue4] = useState('');
    const [inputValue5, setInputValue5] = useState('');
    const [inputValue6, setInputValue6] = useState('');
    const [inputValue7, setInputValue7] = useState('');
    const [inputValue8, setInputValue8] = useState('');
    const [inputValue9, setInputValue9] = useState('');
    const [inputValue10, setInputValue10] = useState('');
    const [inputValue11, setInputValue11] = useState('');
    const [inputField, setInputField] = useState('Output');

    const handleInputValue1 = (event) => {
        setInputValue1(event.target.value);
    };
    
    const handleInputValue2 = (event) => {
        setInputValue2(event.target.value);
    };

    const handleInputValue3 = (event) => {
        setInputValue3(event.target.value);
    };

    const handleInputValue4 = (event) => {
        setInputValue4(event.target.value);
    };

    const handleInputValue5 = (event) => {
        setInputValue5(event.target.value);
    };

    const handleInputValue6 = (event) => {
        setInputValue6(event.target.value);
    };

    const handleInputValue7 = (event) => {
        setInputValue7(event.target.value);
    };

    const handleInputValue8 = (event) => {
        setInputValue8(event.target.value);
    };

    const handleInputValue9 = (event) => {
        setInputValue9(event.target.value);
    };

    const handleInputValue10 = (event) => {
        setInputValue10(event.target.value);
    };

    const handleInputValue11 = (event) => {
        setInputValue11(event.target.value);
    };

    const handleClick = async (event) => {
        const pattern = /^[a-zA-Z]+$/;
        if (pattern.test(inputValue1) && pattern.test(inputValue2) && pattern.test(inputValue3) && pattern.test(inputValue4) && pattern.test(inputValue5) && pattern.test(inputValue6) && pattern.test(inputValue7) && pattern.test(inputValue8) && pattern.test(inputValue9) && pattern.test(inputValue10) && pattern.test(inputValue11)) {
            const response = await GetMadLibData(inputValue1,inputValue2,inputValue3,inputValue4,inputValue5,inputValue6,inputValue7,inputValue8,inputValue9,inputValue10,inputValue11);
            console.log(response);
            setInputField(response);
        }
        else{
            setInputField("Enter a valid response")
        }
    };
    return (
        <div className="divBackSayHello">
             <Container fluid className="containerBackMadLib">
                <Row className="titleRowSayHello">
                    <div className="titleBoxMadLib">
                        <h1 className="titleTextSayHello">Mad Lib</h1>
                    </div>
                </Row>

                <Row className='madRow1'>
                    <Col className='colMad'>
                        <Form.Control className="inputmad1" type="input" placeholder="Enter Name 1 : " onChange={handleInputValue1}/>
                        <Form.Control className="inputmad2" type="input" placeholder="Enter Noun 1 : " onChange={handleInputValue2}/>
                        <Form.Control className="inputmad1" type="input" placeholder="Enter Verb 1 : " onChange={handleInputValue3}/>
                    </Col>

                    <Col className='colMad'>
                        <Form.Control className="inputmad2" type="input" placeholder="Enter Adj 1 : " onChange={handleInputValue4}/>
                        <Form.Control className="inputmad1" type="input" placeholder="Enter Noun 2 : " onChange={handleInputValue5}/>
                        <Form.Control className="inputmad2" type="input" placeholder="Enter Verb 2 : " onChange={handleInputValue6}/>
                    </Col>

                    <Col className='colMad'>
                        <Form.Control className="inputmad1" type="input" placeholder="Enter Adj 2 : " onChange={handleInputValue7}/>
                        <Form.Control className="inputmad2" type="input" placeholder="Enter Adj 3 : " onChange={handleInputValue8}/>
                        <Form.Control className="inputmad1" type="input" placeholder="Enter Verb 3 : " onChange={handleInputValue9}/>
                    </Col>

                    <Col className='colMad'>
                        <Form.Control className="inputmad2" type="input" placeholder="Enter Verb 4 : " onChange={handleInputValue10}/>
                        <Form.Control className="inputmad1" type="input" placeholder="Enter Verb 5 : " onChange={handleInputValue11}/>
                        <Button className='submitButton' onClick={handleClick}>Submit</Button>
                    </Col>
                </Row>

                <Row className='madOutputRow'>
                    <div className='madOutputBox'>
                        <h1 className='madOutputText'>{inputField}</h1>
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