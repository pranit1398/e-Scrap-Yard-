
import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, CardGroup,Col, Row } from "reactstrap";



const Order = ({ orders }) => {
    console.log(orders);
    const a=window.sessionStorage.getItem("address");
    console.log(a);
  return (
    <>
      <div>
        <br></br>
       <Row>
       <Col sm="4">
         </Col>
       <Col sm="3">
        <Card
           body
           color="info"
           outline
           style={{ width: '18rem' }}
        >
          <CardBody className="text-center" >
            <CardTitle tag="h5" >
            Name:
              {orders.name}
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              ContactNo:
              {orders.contactNo}
            </CardSubtitle>
            <CardText>
            Email:
              {orders.email}
            </CardText>
            <CardText>
            State:
              {orders.state}
            </CardText>
            <CardText>
            City:
              {orders.city}
            </CardText>
            <CardText>
            Address:
              {window.sessionStorage.getItem("address")}
            </CardText>

          </CardBody>
        </Card>
        </Col>
        </Row> 
      </div>
      <br></br>
    </>
  );
}

export default Order;