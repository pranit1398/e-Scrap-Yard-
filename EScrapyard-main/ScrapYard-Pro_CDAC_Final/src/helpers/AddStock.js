import React, { useState,useEffect } from 'react'
import { Button, Form, FormGroup, Container, Input, Label, Row } from 'reactstrap'
import axios from "axios";
import { toast } from 'react-toastify';

export default function TrderAdd() {
  
  const [category, setcategory] = useState('')
  const [subcategory, setsubcategory] = useState('')
  const [description, setdescription] = useState('')
  const [qty, setqty] = useState('')
  const [price, setprice] = useState('')
  const [active,setactive] = useState(false);
  
  useEffect(() => {
  if (subcategory == "Other") {
    setactive(true);
  }
  }, [subcategory])
  // let Category = [
  //   LargeDevices:["Refrigerators","WashingMachines","Dryers"],
  //   SmallDevices:[],
  //   OfficeElectronics:[],
  //   ConsumerElectronics:[]
  // ]
  

  const handleClick = () => {
    
    const userId = JSON.parse(localStorage.getItem('userId'));
    const login = { userId, category, subcategory, description, qty, price }
    axios.post("http://localhost:8082/addstock/",login).then(
        (response)=>{
            console.log("success");
            console.log(response);
            console.log("new Stock added")
           toast.success("new Stock added");
           setTimeout(() => {
            window.location.href="/stock"
           },3000);
        },
        (error)=>{
            console.log(error);
            console.log("Error");
          toast.error("Error");
        }
    );
};

  const menuButton = () => {
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

  return (
    <div>
      <Container>
        <Row>
          <Button variant="secondary" type="submit" onClick={menuButton}>
            MAIN MENU
          </Button>
        </Row>
      </Container>
      <br />
      <br />

      <Form>
        <h1>Add Stock</h1>

        <FormGroup>
          <Input
            id="category"
            name="category"
            type="select"
            // value="category"
            onChange={(e) => setcategory(e.target.value)}
          >
            <option selected disabled>Select Category</option>
            <option value="LargeDevices">Large Devices</option>
            <option value="SmallDevices">Small Devices</option>
            <option value="OfficeElectronics">Computer & Telecoms</option>
            <option value="ConsumerElectronics">Consumer Electronics</option>
          </Input>
        </FormGroup>
        {/* <FormGroup>
          <Input
            id="subcategory"
            name="subcategory"
            placeholder="subcategory"
            type="select"
            value={subcategory}
            onChange={(e) => setsubcategory(e.target.value)}
          />
          
        </FormGroup> */}
          <FormGroup>
          <Input
            id="subcategory"
            name="subcategory"
            type="select"
            // value="category"
            onChange={(e) => setsubcategory(e.target.value)}
          >
            <option selected disabled>Select SubCategory</option>
            <option value="Regrigerators">Refrigerators</option>
            <option value="WashingMachine">Washing machines</option>
            <option value="Dryer">Dryers</option>
            <option value="VacuumCleaners">Vacuum cleaners</option>
            <option value="Irons">Irons</option>
            <option value="Laptops">Laptops</option>
            <option value="PCs">PCs</option>
            <option value="Telephones">telephones</option>
            <option value="MobilePhones">Mobile phones</option>
            <option value="Printers">Printers</option>
            <option value="Scanners">Scanners</option>
            <option value="WebCams">Webcam</option>
            <option value="Speaker">Speakers</option>
            <option value="MusicalInstruments">Musical instruments</option>
            <option value="Other">Other</option>
            {/* <option value="LargeDevices">Refrigerators</option>
            <option value="LargeDevices">Washing machines</option>
            <option value="LargeDevices">Dryers</option>
            <option value="SmallDevices">Vacuum cleaners</option>
            <option value="SmallDevices">Irons</option>
            <option value="SmallDevices">Laptops</option>
            <option value="SmallDevices">PCs</option>
            <option value="SmallDevices">telephones</option>
            <option value="SmallDevices">Mobile phones</option>
            <option value="OfficeElectronics">Printers</option>
            <option value="OfficeElectronics">Scanners</option>
            <option value="OfficeElectronics">Webcam</option>
            <option value="ConsumerElectronics">Speakers</option>
            <option value="ConsumerElectronics">Musical instruments</option>  */}
          </Input>
        </FormGroup>
        {active ? (
          <FormGroup>
            <Input
              id="description"
              name="subcategory"
              placeholder="Enter Sub category"
              value={subcategory}
              onChange={(e) => setsubcategory(e.target.value)}
            />
          </FormGroup>
        ) : (
          ""
        )}
        <FormGroup>
          <Input
            id="description"
            name="description"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Input
            id="qty"
            name="qty"
            placeholder="Quantity"
            value={qty}
            onChange={(e) => setqty(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Input
            id="price"
            name="price"
            placeholder="price"
            value={price}
            onChange={(e) => setprice(e.target.value)}
          />
        </FormGroup>

        <FormGroup check>
          <Input type="checkbox" /> <Label check>Accept the terms</Label>
        </FormGroup>

        <Button onClick={handleClick}>Submit</Button>
      </Form>
    </div>
  );
}