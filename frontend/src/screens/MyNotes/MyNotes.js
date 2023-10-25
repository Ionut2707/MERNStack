import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
import {
  Accordion,
  Badge,
  Button,
  Card,
} from "react-bootstrap";

const MyNotes = () => {
  return (
    <MainScreen title="Welcome Back Ionut-Adrian">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Card style={{ margin: 10 }}>
            <Card.Header style={{ display: "flex" }}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              >
                <Accordion.Header>Title</Accordion.Header>
              </span>

              <div>
                <Button>Edit</Button>
                <Button variant="danger" className="mx-2">
                  Delete
                </Button>
              </div>
            </Card.Header>
            <Accordion.Body eventKey="0">
              <Card.Body>
                <h4>
                  <Badge bg="success" text="light">
                    Category - A category
                  </Badge>
                </h4>
                <blockquote className="blockquote mb-0">
                  <p>lorem10</p>
                  <footer className="blockquote-footer">
                    Created At: your DAte
                  </footer>
                </blockquote>
              </Card.Body>
            </Accordion.Body>
          </Card>
        </Accordion.Item>
      </Accordion>
    </MainScreen>
  );
};

export default MyNotes;
