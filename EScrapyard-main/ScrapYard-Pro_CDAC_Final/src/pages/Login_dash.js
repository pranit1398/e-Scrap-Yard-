import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col, Row } from "reactstrap";
// import transLogin1 from "../assets/t";
// import custLogin1 from "../assets/custLogin1.jpg";
// import "../styles/Contact.css";

function Login_dash() {
  return (
    <div>


          <Row>
              <Col sm="6">
                  <Card body>
                      <CardTitle tag="h1">
                             Admin 
                      </CardTitle>
                      {/* <CardImg
     
      src={transLogin1}
      margin-top="10px"
      margin-bottom="10px"
      width="13" 
      height="130"

      // width="20px"
      // height="30px"
    /> */}
                      <Button href="login" type="submit">
                          Register
                      </Button>
                  </Card>
              </Col>

              <Col sm="6">
                  <Card body>
                      <CardTitle tag="h1">
                          User 
                      </CardTitle>
                      {/* <CardImg
     
      src={custLogin1}
      margin-top="10px"
      margin-bottom="10px"
      width="0px"
      height="280px"

      // width="20px"
      // height="30px"
    /> */}
                      <Button href="user_login" type="submit">
                          Register
                      </Button>
                  </Card>
              </Col>
          </Row>
      </div>
  );
}

export default Login_dash;