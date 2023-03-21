
import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardTitle, Col, Row } from "reactstrap";


function AdminDash() {

    return (
        <div>
<br></br>
<br></br>

            <Row>
                <Col sm="4">
                    <Card body>
                
                        <CardTitle tag="h1" className="text-center">
                            Industrialists
                        </CardTitle>

                        <Button href="industrialistList" className="btn btn-warning"type="submit">
                            Show List
                        </Button>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card body>
                        <CardTitle tag="h1" className="text-center" >
                            Dealers
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
                        <Button href="dealerList"className="btn btn-info" type="submit">
                            Show List
                        </Button>
                    </Card>
                </Col>

                <Col sm="4">
                    <Card body>
                        <CardTitle tag="h1"  className="text-center">
                            Traders
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
                        <Button href="tradersList" className="btn btn-danger" type="submit">
                            Show List
                        </Button>
                    </Card>
                </Col>
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
           
            
            <br></br>
        </div>
    );
}

export default AdminDash;