import { Navbar, Container } from "react-bootstrap";

const MyNav = (props) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="http://localhost:3000/">
          <img
            alt=""
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
