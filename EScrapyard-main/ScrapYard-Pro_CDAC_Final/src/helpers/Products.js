
import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, CardGroup,Col, Row } from "reactstrap";



const Products = ({ products }) => {

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
              userId:
              {products.userId}
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              category:
              {products.category}
            </CardSubtitle>
            <CardText>
              subcategory:
              {products.subcategory}
            </CardText>
            <CardText>
              description:
              {products.description}
            </CardText>
            <CardText>
              price:Rs 
              {products.rate}
            </CardText>
            <CardText>
              qty:
              {products.qty} pcs
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

export default Products;