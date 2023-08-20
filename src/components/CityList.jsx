import { Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FiMoreVertical } from "react-icons/fi";
import { BsFillCloudSunFill } from "react-icons/bs";
const CityList = (props) => {
  const navigate = useNavigate();
  return (
    <Col xs={10} className="text-center">
      {props.cities.map((city, i) => (
        <div key={i}>
          <div
            onClick={() =>
              navigate("/details/lat=" + city.lat + "/lon=" + city.lon)
            }
            className="d-flex justify-content-between  border-bottom border-muted"
          >
            <span>
              <FiMoreVertical />
            </span>
            <span>
              {city.local_names?.it ? city.local_names?.it : city.name},{" "}
              {city.state}
            </span>

            <span>
              <FiMoreVertical />
            </span>
          </div>
        </div>
      ))}
    </Col>
  );
};
export default CityList;
