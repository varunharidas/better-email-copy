import React, { Component } from "react";
import { Container } from "reactstrap";
import Header from "./Header.js";
import "./Home.css";

export default class Home extends Component {
  state = {
    response: ""
  };


  render() {
    

    return (

      <div className="maincontainer">
        <Header />

        <Container>

Home is where happiness is           
        </Container>
      </div>

      
    );
  }
}
