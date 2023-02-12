import { Container, Row, Button, Col, Dropdown } from "react-bootstrap";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { GetStudentDirectoryData } from "../Services/DataService";

export default function StudentDirectoryComponent() {

  const [inputValue1, setInputValue1] = useState('Name Appears Here');
  const [inputValue2, setInputValue2] = useState('Name Appears Here');
  const [inputValue3, setInputValue3] = useState('Name Appears Here');
  const [inputValue4, setInputValue4] = useState('Email Appears Here');
  const [inputValue5, setInputValue5] = useState('Hobbies Appears Here');
  const [inputField, setInputField] = useState('');
 

  const handleInputValue1 = (event) => {
      setInputField(event.target.value);
      console.log(inputField);
  };
  
  // const handleInputValue2 = (event) => {
  //     setInputValue2(event.target.value);
  // };

  // const handleInputValue3 = (event) => {
  //     setInputValue3(event.target.value);
  // };

  // const handleInputValue4 = (event) => {
  //     setInputValue4(event.target.value);
  // };

  // const handleInputValue5 = (event) => {
  //     setInputValue5(event.target.value);
  // };

  const handleClick = async (event) => {

        console.log(event.target);
        const response = await GetStudentDirectoryData(event.target.textContent);
        console.log(response);
        setInputValue1(response.firstName);
        setInputValue2(response.lastName);
        setInputValue3(response.slackName);
        setInputValue4(response.email);
        setInputValue5(response.hobbies);

  };

  return (
    <div className="divBackSayHello">
      <Container fluid className="containerBackStudentDirectory">
        <Row className="titleRowSayHello">
          <div className="titleBoxStudentDirectory">
            <h1 className="titleTextSayHello">Student Directory</h1>
          </div>
        </Row>

        <Row className="studentRow">
          <Col className="studentDropDown">
            <Dropdown>
              <Dropdown.Toggle className="dropdownCss" id="dropdown-basic">
                Select a Name: 
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item className="studentGroup" href="#" value="Aisha" onClick={handleClick}>Aisha</Dropdown.Item>
                <Dropdown.Item className="studentGroup" href="#" value="Amar" onClick={handleClick}>Amar</Dropdown.Item>
                <Dropdown.Item className="studentGroup" href="#" value="Andrea" onClick={handleClick}>Andrea</Dropdown.Item>
                <Dropdown.Item className="studentGroup" href="#" value="Andrew" onClick={handleClick}>Andrew</Dropdown.Item>
                <Dropdown.Item className="studentGroup" href="#" value="Brandon" onClick={handleClick}>Brandon</Dropdown.Item>
                <Dropdown.Item className="studentGroup" href="#" value="Caroline" onClick={handleClick}>Caroline</Dropdown.Item>
                <Dropdown.Item className="studentGroup" href="#" value="Chris" onClick={handleClick}>Chris</Dropdown.Item>
                <Dropdown.Item className="studentGroup" href="#" value="Daniel" onClick={handleClick}>Daniel</Dropdown.Item>
                <Dropdown.Item className="studentGroup" href="#" value="Elizar" onClick={handleClick}>Elizar</Dropdown.Item>
                <Dropdown.Item className="studentGroup" href="#" value="Frenando" onClick={handleClick}>Freddy</Dropdown.Item>
                <Dropdown.Item className="studentGroup" href="#" value="Griffin" onClick={handleClick}>Griffin</Dropdown.Item>
                <Dropdown.Item className="studentGroup" href="#" value="Harrison" onClick={handleClick}>Harrison</Dropdown.Item>
                <Dropdown.Item className="studentGroup" href="#" value="Isaiah" onClick={handleClick}>Isaiah</Dropdown.Item>
                <Dropdown.Item className="studentGroup" href="#" value="Jacob" onClick={handleClick}>Jacob</Dropdown.Item>
                <Dropdown.Item className="studentGroup" href="#" value="Jeremy" onClick={handleClick}>Jeremy</Dropdown.Item>
                <Dropdown.Item className="studentGroup" href="#" value="Jessie" onClick={handleClick}>Jessie</Dropdown.Item>
                <Dropdown.Item className="studentGroup" href="#" value="John" onClick={handleClick}>John</Dropdown.Item>
                <Dropdown.Item className="studentGroup" href="#" value="Jovann" onClick={handleClick}>Jovann</Dropdown.Item>
                <Dropdown.Item className="studentGroup" href="#" value="Kenneth" onClick={handleClick}>Kenneth</Dropdown.Item>
                <Dropdown.Item className="studentGroup" href="#" value="Kent" onClick={handleClick}>Kent</Dropdown.Item>
                <Dropdown.Item className="studentGroup" href="#" value="Lerissa" onClick={handleClick}>Lerissa</Dropdown.Item>
                <Dropdown.Item className="studentGroup" href="#" value="Madeline" onClick={handleClick}>Madeline</Dropdown.Item>
                <Dropdown.Item className="studentGroup" href="#" value="Manuel" onClick={handleClick}>Manuel</Dropdown.Item>
                <Dropdown.Item className="studentGroup" href="#" value="Marcel" onClick={handleClick}>Marcel</Dropdown.Item>
                <Dropdown.Item className="studentGroup" href="#" value="Mark" onClick={handleClick}>Mark</Dropdown.Item>
                <Dropdown.Item className="studentGroup" href="#" value="NHarrison" onClick={handleClick}>NHarrison</Dropdown.Item>
                <Dropdown.Item className="studentGroup" href="#" value="Pedro" onClick={handleClick}>Pedro</Dropdown.Item>
                <Dropdown.Item className="studentGroup" href="#" value="Reed" onClick={handleClick}>Reed</Dropdown.Item>
                <Dropdown.Item className="studentGroup" href="#" value="Richard" onClick={handleClick}>Richard</Dropdown.Item>
                <Dropdown.Item className="studentGroup" href="#" value="Samuel" onClick={handleClick}>Samuel</Dropdown.Item>
                <Dropdown.Item className="studentGroup" href="#" value="Shaun" onClick={handleClick}>Shaun</Dropdown.Item>
                <Dropdown.Item className="studentGroup" href="#" value="Ulises" onClick={handleClick}>Ulises</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col className="studentOutput">
            <div className="studentOutputBox">
                <Row className="studentOutputRow">
                    <div className="firstName">First Name:</div>
                    <div className="firstNameOutput">{inputValue1}</div>
                </Row>
                <Row className="studentOutputRow">
                    <div className="lastName">Last Name:</div>
                    <div className="lastNameOutput">{inputValue2}</div>
                </Row>
                <Row className="studentOutputRow">
                    <div className="slackName">Slack Name:</div>
                    <div className="slackNameOutput">{inputValue3}</div>
                </Row>
                <Row className="studentOutputRow">
                    <div className="email">Email:</div>
                    <div className="emailOutput">{inputValue4}</div>
                </Row>
                <Row className="studentOutputRow">
                    <div className="hobbies">Hobbies:</div>
                    <div className="hobbiesOutput">{inputValue5}</div>
                </Row>
                
            </div>
          </Col>
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
