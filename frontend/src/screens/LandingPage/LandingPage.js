import { Button, Container, Row } from "react-bootstrap";
import "./LandingPage.css";
import { Link , useNavigate} from 'react-router-dom'
import { useEffect } from "react";

const LandingPage = () => {
  const navigate = useNavigate();

     useEffect(() => {
       const userInfo = localStorage.getItem("userInfo");

       if (userInfo) {
         navigate("/mynotes");
       }
     },[]);
  
  
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Note Zipper</h1>
              <p className="subtitle"> One safe place for all your notes.</p>
              <div className="buttonContainer">
               <Link to="/login">
                  <Button size="lg" className="landingbutton">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button
                    size="lg"
                    className="landingbutton "
                    variant="outline-primary"
                  >
                    Register
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};
export default LandingPage;
