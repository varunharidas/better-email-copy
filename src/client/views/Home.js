import React, { Component } from "react";
import { Container, Col } from "reactstrap";
import Header from "./Header.js";
import "./Home.css";

export default class Home extends Component {
  state = {

    data: []
  };


  componentDidMount() {
    fetch('/api/hello')
    .then(res => {
        console.log(res);
        return res.json()
     })
    .then(data => { 
        console.log(data); 
        this.setState({ data })
     });
  }


  render() {
    

    return (

      <div className="maincontainer">
          <Col sm="12" md={{ size: 6, offset: 3 }}>
          
          
          <h2 className='logo-text'>
Better Email Copies</h2>     

<h3 className='logo-subtext'>
Learn how some of the best companies are doing it right.

</h3>        
          
          </Col>

        <Container>
 
{/* <div>
                <h3>Emails</h3>
                {this.state.data.map(data =>
                <div key={data.id}><h2>{data.title}</h2>{data.copy}</div>
              )}
            </div> */}

        </Container>
      </div>

      
    );
  }
}
