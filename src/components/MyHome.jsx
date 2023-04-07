import { useEffect, useState } from "react";
import { Row, Form, Col, Button } from "react-bootstrap";
import MyNav from "./MyNav";
import CityList from "./CityList";
import MyFooter from "./MyFooter";
const apiKey = "8cdafc0e1a99c13d56957f350ac92768";
const MyHome = () => {
  const [keyWord, setKeyWord] = useState("Roma");
  const [countryCode, setCountryCode] = useState("it");
  const [searchResults, setSearchResults] = useState([]);
  const [limit, setLimit] = useState(10);

  const [infoPos, setInfoPos] = useState({
    state: String,
    lat: Number,
    lon: Number,
  });
  useEffect(() => {
    setSearchResults([]);
    getXYpos();
  }, [keyWord]);

  const getXYpos = async function () {
    if (keyWord !== "" && countryCode !== "") {
      try {
        let response = await fetch(
          `http://api.openweathermap.org/geo/1.0/direct?q=` +
            keyWord +
            "," +
            countryCode +
            "&limit=" +
            limit +
            "&appid=" +
            apiKey,
          { method: "GET", "content-type": "application/json" }
        );
        if (response.ok) {
          let data = await response.json();
          data.map((city) =>
            searchResults.includes(city)
              ? console.log("gia presente")
              : setSearchResults([city])
          );
          setInfoPos({ state: data.state, lat: data.lat, lon: data.lon });
          console.log(searchResults);
        }
      } catch (error) {}
    } else {
      setSearchResults(null);
    }
  };
  return (
    <>
      <Row>
        <MyNav />
      </Row>

      <Row className="justify-content-center py-5 heroSearch-home">
        <Col xs={12} className="d-flex justify-content-center pb-4 ">
          <form>
            <div className="">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                aria-describedby="search"
                placeholder="inserisci una qualsiasi lettera o parola per effetuare una ricerca"
                value={keyWord}
                onChange={(e) => {
                  setKeyWord(e.target.value);
                }}
              />
            </div>

            <div>
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                aria-describedby="country"
                value={countryCode}
                onChange={(e) => {
                  setCountryCode(e.target.value);
                }}
              />
            </div>
          </form>
        </Col>

        <Button
          className="reset"
          onClick={(e) => {
            setKeyWord("");
          }}
        >
          RESET
        </Button>
      </Row>
      <br />

      <Row className="justify-content-center d-flex text-dark align-content-center ">
        {searchResults ? (
          <CityList cities={searchResults.reverse()} />
        ) : (
          <Col xs={8} className="text-center text-dark">
            digita una citta`
          </Col>
        )}
      </Row>
      <MyFooter></MyFooter>
    </>
  );
};
export default MyHome;
