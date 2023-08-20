import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsList, BsArrowLeftCircle } from "react-icons/bs";
import { FiMoreVertical } from "react-icons/fi";
import { getPosition } from "../redux/middleware/getPosition";
import { setCountry, setKeyword } from "../redux/action/searchAtion";
import { getWeather } from "../redux/middleware/getWeather";
const apiKey = "8cdafc0e1a99c13d56957f350ac92768";
const Bookmark = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { keyword, country } = useSelector((state) => state.search);
  const { bookmark } = useSelector((state) => state.bookmark);
  const { data } = useSelector((state) => state.position);

  console.log();
  return (
    <Row className=" py-3  ">
      <Col xs={12} onClick={() => navigate("/")}>
        <BsArrowLeftCircle size={27} />
      </Col>
      <Col xs={12} className="d-flex  mt-2 mb-4 border-top">
        <div className="d-flex align-items-center fs-2">
          <BsList size={27} />
          <div>
            <strong>Bookmarks</strong>
          </div>
        </div>
      </Col>
      <Col xs={12}>
        {bookmark?.map((b, i) => (
          <div key={i}>
            {console.log(b.split("/"))}
            <div
              onClick={() => {
                dispatch(
                  setKeyword(b.split("/")[0]),
                  setCountry(b.split("/")[1]),
                  getPosition(keyword, country, apiKey)
                ),
                  navigate(
                    "/details/lat=" + data[0].lat + "/lon=" + data[0].lon
                  );
              }}
              className="d-flex justify-content-between  border-bottom border-muted"
            >
              <span>
                <FiMoreVertical />
              </span>
              <span>{b.replace("/", "  (") + ")"}</span>

              <span>
                <FiMoreVertical />
              </span>
            </div>
          </div>
        ))}
      </Col>
    </Row>
  );
};
export default Bookmark;
