import Col from "react-bootstrap/Col";
import {Container,Row} from "react-bootstrap/esm";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        position: "relative",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container>
        <Row>
          <Col className="text-center py-3" >
            Copyright @ Note Zipper
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
