import { Button, Col, Container, Row } from "react-bootstrap";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

export default function HomeComponent(){
    return(
        <div className="divBack">
        <Container fluid className="containerBack" id="Home">
          <div className="homeBox">
            <Row className="titleRow">
              <h1 className="titleText">All for One</h1>
            </Row>

            <Row className="columnRow">
              <Col className="columns">
                <Link to={"SayHello"}>
                  <button className="columnBox3">
                    <h2 className="columnText">Say Hello</h2>
                  </button>
                </Link>

                <Link to={"Add2Numbers"}>
                <button className="columnBox3">
                  <h2 className="columnText">Add 2 Numbers</h2>
                </button>
                </Link>

                <Link to={"AskingQuestions"}>
                <button className="columnBox3">
                  <h2 className="columnText">Asking Questions</h2>
                </button>
                </Link>

                <Link to={"Greater"}>
                <button className="columnBox3">
                  <h2 className="columnText">Greater Than or Less Than</h2>
                </button>
                </Link>
              </Col>

              <Col className="columns2">

                <Link className="linkMad" to={"MadLib"}>
                <button className="columnBox4">
                  <h2 className="columnText">Mad Lib</h2>
                </button>
                </Link>

                <Link className="linkOdd" to={"OddOrEven"}>
                <button className="columnBox3">
                  <h2 className="columnText">Odd or Even</h2>
                </button>
                </Link>
              </Col>

              <Col className="columns">
                <Link to={"ReverseIt"}>
                <button className="columnBox3">
                  <h2 className="columnText">Reverse It</h2>
                </button>
                </Link>

                <Link to={"RestaurantPicker"}>
                <button className="columnBox3">
                  <h2 className="columnText">Restaurant Picker</h2>
                </button>
                </Link>

                <Link to={"StudentDirectory"}>
                <button className="columnBox3">
                  <h2 className="columnText">Student Directory</h2>
                </button>
                </Link>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    )
}