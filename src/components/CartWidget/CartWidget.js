import React from "react";
import logo from "./logocarrito2.png";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


function CartWidget() {
  return (
    <>
    <div className="App">
        <Card >
        <Card.Img     
        alt="logo empresa"
        src={logo} 
        widht="10"
        backgroundColor="black"
        className="d-inline-block align-top"         
        />
      </Card>
      </div>
    </>
  );
}

export default CartWidget;

