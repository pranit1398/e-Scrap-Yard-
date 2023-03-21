import React, { Component } from 'react'
import UserService from '../UserService/UserService'
import axios from 'axios';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
import { Button, Container, Row } from 'reactstrap';

class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  Postproduct(subcategory, rate, category) {
    const cookie = new Cookies();
    const userId = cookie.get("userId");
    console.log(userId);
    const contactNo = cookie.get("contactNo");
    console.log(contactNo);
    const zipcode = cookie.get("zipcode");
    const city = cookie.get("city");
    const state = cookie.get("state");
    const address = cookie.get("address");

    const orderDate = new Date();
    console.log(orderDate);
    const para = {
      userId,
      category,
      subcategory,
      rate,
      contactNo,
      state,
      city,
      zipcode,
      address,
      orderDate,
    };
    axios.post("http://localhost:8082/orders/placeOrder", para).then(
      (response) => {
        console.log("success");
        console.log(response);
        console.log("new Product added");

        toast.success("Order placed ....!!");

        cookie.set("category", response.data.data.category);
        cookie.set("subcategory", response.data.data.subcategory);
        cookie.set("rate", response.data.data.rate);
        setTimeout(() => {
        window.location.href = "/placedorder"; 
        }, 1000);
      },
      (error) => {
        console.log(error);
        console.log("Error");
        toast.error("Error")
      }
    );
  }

  componentDidMount() {
    UserService.getProduct().then((res) => {
      console.log(res.data);
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
        <h2 className="text-center">...Place Order...</h2>

        <div className="row">
          <div
            style={{
              paddingTop: "30px",
              paddingLeft: "30px",
              paddingRight: "30px",
              paddingBottom: "20px",
            }}
          >
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th> Category</th>
                  <th>Subcategory</th>
                  <th> Price</th>
                  <th> Description</th>
                  <th> Quantity</th>
                </tr>
              </thead>
              <tbody>
                            {this.state.users.map((user) => (
                    
                  <tr key={user.email}>
                    <td> {user.category} </td>
                    <td> {user.subcategory}</td>
                    <td> {user.rate}</td>
                    <td> {user.description}</td>
                    <td> {user.qty}</td>
                    <td>
                      <button
                        style={{ marginLeft: "40px" }}
                        onClick={() =>
                          this.Postproduct(
                            user.subcategory,
                            user.rate,
                            user.category,
                            user.description,
                            user.qty
                          )
                        }
                        className="btn btn-danger"
                      >
                        Place Order
                      </button>
                    </td>
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

export default UserList