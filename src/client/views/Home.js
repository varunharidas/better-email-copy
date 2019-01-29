import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";



function Home(/* props */) {
  return <div>Lets kick start the rockets. yo

<Link to={`/about`}>About</Link>
<Row gutter={40}>
   <Col span={4}>clear
   </Col>
   <Col span={4}>col-4</Col>
   <Col span={4}>col-4</Col>
</Row>

  </div>;
}

export default Home;
