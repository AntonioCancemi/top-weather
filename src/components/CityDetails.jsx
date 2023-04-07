import { Row, Col, Container } from "react-bootstrap";
import MyNav from "./MyNav";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NotFound from "./NotFound";
import MySpinner from "./MySpinner";
import MyFooter from "./MyFooter";
const apiKey = "8cdafc0e1a99c13d56957f350ac92768";

const CityDetails = () => {
  const [loading, setLoading] = useState(true);
  const { lat } = useParams();
  const { lon } = useParams();
  const [weatherData, setWeatherData] = useState({});
  const result = (x) => {
    x ? new Date(x * 1000).toISOString().slice(11, 16) : console.log("notime");
  };

  useEffect(() => {
    getWeather();
    console.log("getting");
  }, []);
  const getWeather = async () => {
    try {
      let response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?" +
          lat +
          "&" +
          lon +
          "&appid=" +
          apiKey +
          "&units=metric&lang=it",
        { "Content-Type": "application/json", method: "GET" }
      );

      if (response.ok) {
        let data = await response.json();
        setWeatherData(data);
        setLoading(false);
        console.log(weatherData);

        //setWeatherData({ weatherCondition: data.weather, main: data.main,visibility:data.visibility });
      }
    } catch (error) {
      console.log(error);
      alert("errore nella fetch");
    }
  };
  return (
    <>
      {loading ? (
        <MySpinner></MySpinner>
      ) : (
        <>
          <Row>
            <MyNav />
          </Row>
          <Row className="pt-5 heroSearch ">
            <Col xs={1} md={3} lg={4}></Col>
            <Col className="rounded border-muted meteo">
              <Row className=" pt-5 ">
                <Col className="d-flex align-content-center">
                  <span className="fs-1"> {weatherData.name}</span>
                  <span className=""> </span>
                  <button className="btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-bookmark-heart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
                    </svg>
                  </button>
                </Col>
              </Row>
              <Row>
                <Col>{result(weatherData.dt)}</Col>
              </Row>
              <Row>
                <Col className="pe-0">
                  <span className="fs-1">{weatherData.main.temp} C°</span>
                </Col>
                <Col>
                  <p className="border-start border-danger ps-2">
                    MAX: {weatherData.main.temp_max}
                  </p>
                  <p className="border-start border-primary ps-2">
                    MIN: {weatherData.main.temp_min}
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span className="fs-1">{weatherData.weather[0].main} </span>
                  <br />
                  <span className="fs-4">
                    {weatherData.weather[0].description}
                  </span>
                </Col>
              </Row>
              <Row className="pt-4 border-top border-dark">
                <span>
                  <b className="fs-5">WIND & CLOUDS</b>
                </span>
                <Col>
                  <p className="border-start border-primary ps-2">
                    Wind speed: <b>{weatherData.wind.speed} C°</b>
                  </p>
                  <p className="border-start border-primary ps-2">
                    Clouds in %: <b>{weatherData.clouds.all}</b>
                  </p>
                </Col>
              </Row>
              <Row className="pt-4 border-top border-dark">
                <span>
                  <b className="fs-5">MORE...</b>
                </span>
                <Col>
                  <p className="border-start border-primary ps-2">
                    This temperature parameter accounts for the human perception
                    of weather: <b>{weatherData.main.feels_like} C°</b>
                  </p>
                  <p className="border-start border-primary ps-2">
                    Atmospheric pressure: <b>{weatherData.main.pressure}</b>
                  </p>
                  <p className="border-start border-primary ps-2">
                    Humidity:<b> %{weatherData.main.humidity}</b>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col xs={1} md={3} lg={4}></Col>
          </Row>
          <MyFooter />
        </>
      )}
      ;
    </>
  );
};
export default CityDetails;
