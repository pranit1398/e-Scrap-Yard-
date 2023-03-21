import React, { Component } from 'react'
import { Button, Container, Row } from "reactstrap";
import axios from 'axios'
class OrderList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    const getuserId = JSON.parse(localStorage.getItem("userId"));
    console.log(getuserId)
    axios
      .get("http://localhost:8082/orders/listOfOrderPlaced" + "/" + getuserId)
      .then((res) => {
        console.log(res);
        console.log(getuserId);
        this.setState({ users: res.data.data });
      });
  }
  menuButton = () => {
    const role = localStorage.getItem("roles");
    console.log(role);
    if (role === "industrialist") {
      window.location.href = "/industrialistDash";
    } else if (role === "dealer") {
      window.location.href = "/dealerdash";
    } else if (role === "trader") {
      window.location.href = "/trederdash";
    }
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Button variant="secondary" type="submit" onClick={this.menuButton}>
              MAIN MENU
            </Button>
          </Row>
        </Container>
        <h2 className="text-center">Your Orders</h2>

        <div className="row">
          <div
            style={{
              paddingTop: "30px",
              paddingLeft: "20px",
              paddingRight: "20px",
              paddingBottom: "20px",
            }}
          >
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th> OrderId</th>
                  <th> Category</th>
                  <th>Subcategory</th>
                  <th> Price</th>
                  <th> OrderDate</th>
                  <th> Address</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map((user) => (
                  <tr key={user.userId}>
                    <td> {user.orderId} </td>
                    <td> {user.category} </td>
                    <td> {user.subcategory}</td>
                    <td> {user.rate}</td>
                    <td> {user.orderDate}</td>
                    <td> {user.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderList