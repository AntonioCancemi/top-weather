import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import MyHome from "./components/MyHome";
import CityDetails from "./components/CityDetails";
import { Container } from "react-bootstrap";
import MyNav from "./components/MyNav";

function App() {
  return (
    <Container fluid={true}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyHome />} />
          <Route path="/details/:lat/:lon" element={<CityDetails />} />
          <Route path="*" element={<NotFound></NotFound>} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
