import React, { Component } from 'react'
import {
  Button,
 
  Container,
  
  Row 
} from "reactstrap";
import axios from 'axios'
class UserList extends Component {
    constructor(props) {
        super(props)

        this.state = {
           
                users: []
        }
       
       
    }

    componentDidMount(){
        const getuserId = JSON.parse(localStorage.getItem('userId'));
        axios.put("http://localhost:8082/getStock"+"/"+getuserId).then((res) => {
            console.log(res);
            console.log(getuserId);
            this.setState({ users: res.data.data});
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
    return null;
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
                <br></br>
            <h2 className="text-center">Stock</h2>

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
                      <th> Stock ID</th>
                      <th> Category</th>
                      <th>Subcategory</th>
                      <th> Price </th>
                      <th> Quantity </th>
                      <th> Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.users.map((user) => (
                      <tr key={user.userId}>
                        <td> {user.sid} </td>
                        <td> {user.category} </td>
                        <td> {user.subcategory}</td>
                        <td> {user.price}</td>
                        <td> {user.qty}</td>
                        <td> {user.description}</td>
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

export default UserList