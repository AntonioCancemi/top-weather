import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import { Container, Row } from "react-bootstrap";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import MyHome from "./page/MyHome";
import CityDetails from "./page/CityDetails";
import Bookmark from "./page/Bookmark";

function App() {
  return (
    <Container fluid={true}>
      <BrowserRouter>
        <Row>
          <MyNav />
        </Row>
        <Routes>
          <Route path="/" element={<MyHome />} />
          <Route path="/bookmarks" element={<Bookmark />} />
          <Route path="/details/:lat/:lon" element={<CityDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </Container>
  );
}

export default App;
