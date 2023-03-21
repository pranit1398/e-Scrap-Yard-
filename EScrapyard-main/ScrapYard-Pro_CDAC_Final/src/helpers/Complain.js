import React ,{useState} from "react";
import { Container } from "reactstrap";
import MultiplePizzas from "../assets/about.jpg";
import {toast} from 'react-toastify';
import "../styles/About.css";
function About() {
    const [name,setName] = useState("");
    const [complain,setComplain] = useState("");

    const handleClick=(e)=>{

        e.preventDefault()
        // const login = { name, complain }
        toast.success('Thank you for feedback');
        setTimeout(() => {
            const role = localStorage.getItem("roles");
            console.log(role);
            if (role === "industrialist") {
            window.location.href = "/industrialistDash";
            } else if (role === "dealer") {
            window.location.href = "/dealerdash";
            } else if (role === "trader") {
            window.location.href = "/trederdash";
            }
        }, 2000);
        // axios.post(`http://localhost:8082/emailsend/`,name).then(
        //     (response)=>{
        //         console.log("success");
        //         console.log(response);
        //         toast.success("Login Successfylly...")
        //         localStorage.setItem('adminEmail',response.email);
        //         localStorage.setItem('roles',role);
        //         setTimeout(() => {
        //             window.location.href = "/admindash";
        //         }, 4000);
        //     },
        //     (error)=>{
        //         console.log(error);
        //         console.log("Error");
        //         toast.error("Invalid Login Credentials..")
        //     }
        // );
    };


  return (
    <>
        <div className="container">
            <div className="row justify-content-center my-3">
                <div className="col-sm-8">
                    <div className="card">
                        <div className="card-body">
                        <form method="GET">
                        <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Name</label>
                                <input type="text" class="form-control" id="exampleInputPassword1" value={name} name="name" onChange={(e)=>{e.preventDefault(); setName(e.target.value)}}/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Complain or Feedback</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  value={complain} name="complain" onChange={(e)=>{e.preventDefault(); setComplain(e.target.value)}}/>
                                <div id="emailHelp" class="form-text">Your complains and feedbacks make us knew about your expierence on our site. </div>
                            </div>
                            <button type="submit" class="btn btn-primary" onClick={handleClick}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default About;