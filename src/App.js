import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Row } from "react-bootstrap";

import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import SayHelloComponent from "./components/SayHelloComponent";
import HomeComponent from "./components/HomeComponent";
import Add2NumbersComponent from "./components/Add2NumbersComponent";
import AskingQuestionsComponent from "./components/AskingQuestionsComponent";
import GreaterComponent from "./components/GreaterComponent";
import MadLibComponent from "./components/MadLib";
import OddOrEvenComponent from "./components/OddOrEvenComponent";
import ReverseItComponent from "./components/ReverseItComponent";
import RestaurantPickerComponent from "./components/RestaurantPickerComponent";
import StudentDirectoryComponent from "./components/StudentDirectoryComponent";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
              <Route path="/" element={<HomeComponent />} />
              <Route path="SayHello" element={<SayHelloComponent />} />
              <Route path="Add2Numbers" element={<Add2NumbersComponent />} />
              <Route path="AskingQuestions" element={<AskingQuestionsComponent />} />
              <Route path="Greater" element={<GreaterComponent />} />
              <Route path="MadLib" element={<MadLibComponent/>} />
              <Route path="OddOrEven" element={<OddOrEvenComponent />} />
              <Route path="ReverseIt" element={<ReverseItComponent />} />
              <Route path="RestaurantPicker" element={<RestaurantPickerComponent />} />
              <Route path="StudentDirectory" element={<StudentDirectoryComponent />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
