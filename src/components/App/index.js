import { connect } from "react-redux";
import App from "./App";

const mapStateToProps = ({start}) => {
    return {
        start: start,
    };
};


export default connect(mapStateToProps)(App);