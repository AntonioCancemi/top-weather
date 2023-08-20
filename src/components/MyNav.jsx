import { Navbar, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BsBookmarks } from "react-icons/bs";
const MyNav = () => {
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" variant="dark" className="text-center">
      <Container>
        <Navbar.Brand>
          <img
            alt="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrq_4wbEccDpZ6E7BI5fo1bT5W7i_o_tRXsg&usqp=CAU"
            width="30"
            height="30"
            className="d-inline-block align-top rounded"
          />{" "}
          Top-Weather
        </Navbar.Brand>
        <div className="text-light" onClick={() => navigate("/bookmarks")}>
          <BsBookmarks />
        </div>
      </Container>
    </Navbar>
  );
};
export default MyNav;
