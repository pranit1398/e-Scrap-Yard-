
import { Dashboard } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Card,  CardTitle, Col, Row } from "reactstrap";
import "../styles/dashboard.css"


function Trederdash() {

    
    return (
        <div>
        <h1 className="dashboard-heading">Trader Dashboard</h1>
            <br></br>

            <Row>
                <Col sm="3">

                </Col>
                <Col sm="3">
                    <Card body>
                      
                        <CardTitle tag="h1">
                            Sell Your Products
                        </CardTitle>

                       
                        <Button href="trderAdd" className="btn btn-danger" type="submit">
                            Add 
                        </Button>
                    </Card>
                </Col>
                    
                <Col sm="3">
                    <Card body>
                      
                        <CardTitle tag="h1">
                           Buy New Products
                        </CardTitle>

                       
                        <Button href="buy" className="btn btn-danger" type="submit">
                        Buy 
                        </Button>
                    </Card>
                </Col>
                
            </Row>
            <br></br><br></br>
            <Row>
            
                <Col sm="4">
                    <Card body>
                        <CardTitle tag="h1">
                            Add Stock
                        </CardTitle>
                        <Button href="addstock" className="btn btn-danger" type="submit">
                            Add Stock
                        </Button>
                    </Card>
                </Col>
                
                <Col sm="4">
                    <Card body>
                        <CardTitle tag="h1">
                          View Your Orders
                        </CardTitle>
                        <Button href="listoforder" className="btn btn-danger" type="submit">
                        View 
                        </Button>
                    </Card>
                </Col>
              
                <Col sm="4">
                    <Card body>
                        <CardTitle tag="h1">
                          View Stock
                        </CardTitle>
                        <Button href="stock" className="btn btn-danger" type="submit">
                        View 
                        </Button>
                    </Card>
                </Col>

                
                
            </Row>
            <br></br>
            
            
           
            
         
        </div>
    );
}

export default Trederdash;