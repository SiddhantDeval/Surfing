import React from "react";
import { connect } from "react-redux";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import ArticleList from "../ArticleList";

const mapStateToProp = (state) => {
  return {
    articles: state.articles,
  };
};

const MainView = (props) => {
  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink className="active">Global Feed</NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab="1">
        <TabPane tabId="1">
          <ArticleList articles={props.articles} />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default connect(mapStateToProp, () => {})(MainView);
