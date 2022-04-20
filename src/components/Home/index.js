import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import Banner from "./Banner";
import MainView from "./MainView";

const mapStateToProp = (state) => {
  return {
    appName: state.appName,
  };
};

const Home = (props) => {
  return (
    <div>
      <Banner appName={props.appName} />
      <Container className="p-5">
        <Row className="mx-5">
          <Col>
            <MainView />
          </Col>
          <Col sm={3}>Popular Tags</Col>
        </Row>
      </Container>
    </div>
  );
};

export default connect(mapStateToProp, () => {})(Home);
