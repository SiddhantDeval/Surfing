import React from "react";
import { Card, CardTitle, CardBody, CardText } from "reactstrap";

const title = {
  fontSize: "50px",
};
const subTitle = {
  fontSize: "25px",
};

const Banner = ({ appName }) => {
  return (
    <>
      <Card
        inverse
        body
        style={{
          backgroundColor: "#5cb85c",
        }}
        className="text-center"
      >
        <CardBody>
          <CardTitle className="fw-bolder" style={title} tag="h1">
            {appName.toLowerCase()}
          </CardTitle>
          <CardText className="lead" style={subTitle} tag="p">
            Some quick example text to build .
          </CardText>
        </CardBody>
      </Card>
    </>
  );
};

export default Banner;
