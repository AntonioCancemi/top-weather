import { Row, Col } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MySpinner from "../components/MySpinner";
import {
  BsArrowLeftCircle,
  BsBookmarkStar,
  BsBookmarkStarFill,
} from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../redux/middleware/getWeather";
import {
  clearBookmark,
  removeBookmark,
  setBookmark,
} from "../redux/action/bookmarkAction";
const apiKey = "8cdafc0e1a99c13d56957f350ac92768";

const CityDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [saved, setSaved] = useState(false);
  const [indexMark, setIndexMark] = useState(null);
  const { lat } = useParams();
  const { lon } = useParams();
  const { country } = useSelector((state) => state.search);
  const { data, loading, error } = useSelector((state) => state.weather);
  const { bookmark } = useSelector((state) => state.bookmark);

  const result = (x) => {
    x ? new Date(x * 1000).toISOString().slice(11, 16) : console.log("notime");
  };

  useEffect(() => {
    //start fetch
    dispatch(getWeather(lat, lon, apiKey));
  }, []);
  useEffect(() => {
    console.log(country, saved);
    let newbookmark = `${data.name}/${country}`;
    //check if saved
    if (bookmark != [] && !bookmark?.includes(newbookmark)) {
      setSaved(true);
      //get index removeBookmark
      setIndexMark(bookmark.indexOf(newbookmark));
      // console.log(indexMark);
    }
    //after data loading
  }, [loading]);

  return (
    <>
      <Row className="pt-5 heroSearch ">
        <Col xs={1} md={3} lg={4}></Col>
        <Col className="rounded border-muted meteo">
          {loading ? (
            <MySpinner></MySpinner>
          ) : (
            <>
              <Row className="bg-light rounded-top">
                <Col className="fs-2 py-2">
                  <div className="   d-flex align-items-center  justify-content-between">
                    <div onClick={() => navigate("/")}>
                      <BsArrowLeftCircle />
                    </div>
                    <div
                      onClick={
                        saved
                          ? () =>
                              dispatch(setBookmark(`${data.name}/${country}`))
                          : () => dispatch(removeBookmark(indexMark))
                      }
                    >
                      {saved ? <BsBookmarkStar /> : <BsBookmarkStarFill />}
                    </div>
                    <div onClick={() => dispatch(clearBookmark())}>clear</div>
                  </div>
                </Col>
              </Row>
              <Row className=" pt-2 ">
                <Col xs={12} className="d-flex align-content-center">
                  <span className="fs-1">
                    {" "}
                    {data.name} {data.sys.country}
                  </span>
                </Col>
              </Row>
              <Row>
                <Col>{result(data.dt)}</Col>
              </Row>
              <Row>
                <Col className="pe-0">
                  <span className="fs-1">{data.main.temp} C°</span>
                </Col>
                <Col>
                  <p className="border-start border-danger ps-2">
                    MAX: {data.main.temp_max}
                  </p>
                  <p className="border-start border-primary ps-2">
                    MIN: {data.main.temp_min}
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span className="fs-1">{data.weather[0].main} </span>
                  <br />
                  <span className="fs-4">{data.weather[0].description}</span>
                </Col>
              </Row>
              <Row className="pt-4 border-top border-dark">
                <span>
                  <b className="fs-5">WIND & CLOUDS</b>
                </span>
                <Col>
                  <p className="border-start border-primary ps-2">
                    Wind speed: <b>{data.wind.speed} C°</b>
                  </p>
                  <p className="border-start border-primary ps-2">
                    Clouds in %: <b>{data.clouds.all}</b>
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
                    of weather: <b>{data.main.feels_like} C°</b>
                  </p>
                  <p className="border-start border-primary ps-2">
                    Atmospheric pressure: <b>{data.main.pressure}</b>
                  </p>
                  <p className="border-start border-primary ps-2">
                    Humidity:<b> %{data.main.humidity}</b>
                  </p>
                </Col>
              </Row>
            </>
          )}
        </Col>
        <Col xs={1} md={3} lg={4}></Col>
      </Row>
      ;
    </>
  );
};
export default CityDetails;
