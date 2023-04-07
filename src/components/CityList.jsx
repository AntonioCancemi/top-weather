import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CityList = (props) => {
  return (
    <Col xs={10} className="text-center">
      <ul>
        {props.cities.map((city, i) => (
          <>
            <br />
            <li
              key={i}
              className="d-flex justify-content-between border-bottom border-muted"
            >
              <Link
                to={"/details/lat=" + city.lat + "/lon=" + city.lon}
                className="linkTo"
              >
                <span>
                  {city.name}, {city.state}
                </span>
              </Link>
              <span>
                latitudine: {city.lat}, longitudine: {city.lon}
              </span>
            </li>
          </>
        ))}
      </ul>
    </Col>
  );
};
export default CityList;
