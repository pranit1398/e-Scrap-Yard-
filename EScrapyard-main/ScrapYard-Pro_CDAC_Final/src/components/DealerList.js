import React, { Component } from 'react'
import UserService from '../UserService/UserService'
import axios from 'axios';
import { Container, Button, Row } from "reactstrap";

class UserList extends Component {
    constructor(props) {
        super(props)

        this.state = {
           
                users: []
        }
        this.deleteUser= this.deleteUser.bind(this);
       
    }

    deleteUser(userId){
        UserService.deleteUser(userId).then(res =>{
            this.setState({users: this.state.users.filter(user => user.userId !== userId)});
        });
    }

    componentDidMount(){
        const dealer="http://localhost:8082/findByRole" 
         const role="dealer";
         axios.get(dealer+"/"+role).then((res) => {
            console.log(res.data);
            this.setState({ users: res.data.data});
        });
    }

    

    // render() {
    //     return (
    //       <div>
    //         <Container>
    //           <Row>
    //             <Button variant="secondary" type="submit" href="/admindash">
    //               MAIN MENU
    //             </Button>
    //           </Row>
    //         </Container>
    //         <h2 className="text-center">Dealers List</h2>

    //         <div className="row">
    //           <div
    //             style={{
    //               paddingTop: "30px",
    //               paddingLeft: "20px",
    //               paddingRight: "20px",
    //               paddingBottom: "20px",
    //             }}
    //           >
    //             <table className="table table-striped table-bordered">
    //               <thead>
    //                 <tr>
    //                   <th> User Id</th>
    //                   <th> Dealers Name</th>
    //                   <th> Email Id</th>
    //                   <th> Role</th>
    //                   <th> Action</th>
    //                 </tr>
    //               </thead>
    //               <tbody>
    //                 {this.state.users.map((user) => (
    //                   <tr key={user.email}>
    //                     <td> {user.userId} </td>
    //                     <td> {user.name} </td>
    //                     <td> {user.email}</td>
    //                     <td> {user.role}</td>
    //                     <td>
    //                       <button
    //                         style={{ marginLeft: "20px" }}
    //                         onClick={() => this.deleteUser(user.userId)}
    //                         className="btn btn-danger"
    //                       >
    //                         Delete{" "}
    //                       </button>
    //                     </td>
    //                   </tr>
    //                 ))}
    //               </tbody>
    //             </table>
    //           </div>
    //         </div>
    //       </div>
    //     );
    render() {
      return (
        <div>
          <Container>
            <Row>
              <Button variant="secondary" type="submit" href="/admindash">
                MAIN MENU
              </Button>
            </Row>
          </Container>
          <h2 className="text-center">Dealers List</h2>
    
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
                    <th> User Id</th>
                    <th> Dealers Name</th>
                    <th> Email Id</th>
                    <th> Role</th>
                    <th> Action</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(this.state.users) && this.state.users.length > 0 ? (
                    this.state.users.map((user) => (
                      <tr key={user.userId}>
                        <td>{user.userId}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td>
                          <button
                            style={{ marginLeft: "20px" }}
                            onClick={() => this.deleteUser(user.userId)}
                            className="btn btn-danger"
                          >
                            Delete
                          </button>
                          <a
            style={{ marginLeft: "20px" }}
            // onClick={() => this.updateUser(user.userId)}
            className="btn btn-warning"
            href="/updateuser"
          >
            Update{" "}
          </a>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center">
                        No users found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }
    
    }


export default UserList