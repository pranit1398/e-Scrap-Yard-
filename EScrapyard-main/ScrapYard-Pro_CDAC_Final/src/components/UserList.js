import React, { Component } from 'react'
import UserService from '../UserService/UserService'

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
        UserService.getUsers().then((res) => {
            console.log(res.data);
            this.setState({ users: res.data.data});
        });
    }

    

    render() {
        return (
            <div>
                 <h2 className="text-center">Industrialist List</h2>
                
                 <div className = "row">
                 <div style={{paddingTop:"30px", paddingLeft:"20px" , paddingRight:"20px",paddingBottom:"20px" }}>

                        <table className = "table table-striped table-bordered" >

                            <thead>
                                <tr>
                                  <th> User Id</th>
                                    <th> Industrialist  Name</th>
                                    <th> Industrialist Email Id</th>
                                    <th> Industrialist Role</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                  this.state.users.map(
                                        user => 
                                        <tr key = {user.email}>
                                             <td> {user.userId} </td>
                                             <td> { user.name} </td>   
                                             <td> {user.email}</td>
                                             <td> {user.role}</td>
                                            <td><button style={{marginLeft: "20px"}} onClick={ () => this.deleteUser(user.userId)} className="btn btn-danger">Delete </button></td> 
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                        </div>
                 </div>

            </div>
        )
    }
}

export default UserList