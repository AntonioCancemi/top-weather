import { Navbar, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MyNav = (props) => {
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
        <Navbar.Text>{props.city ? props.city : ""}</Navbar.Text>
      </Container>
    </Navbar>
  );
};
export default MyNav;
