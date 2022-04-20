import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import MainView from "./components/Home";
import Header from "./components/Header";

const mapStateToProp = (state) => ({
  appName: state.appName,
});

const App = (props) => {
  return (
    <>
      <div className="navBar">
        <Header appName={props.appName} />
        <MainView />
      </div>
    </>
  );
};
export default connect(mapStateToProp, () => {})(App);
